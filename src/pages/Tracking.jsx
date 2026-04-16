import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import ThmBtn from "../components/thmBtn";
import { TrackingResultsSkeleton } from "../components/ui/AppSkeletons";
import { Package2 } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTruck,faLocationDot, faCheck, faCheckCircle, faShippingFast, faBoxOpen, faTruckLoading, faBuilding, faRoute, faWarehouse, faHandHolding, faFileAlt, faUser} from '@fortawesome/free-solid-svg-icons'

const TRACKING_ENDPOINT = "https://api.lionexcourier.com/api/v8/track/unified-track";

const ensureJsPdf = () =>
  new Promise((resolve, reject) => {
    if (window.jspdf?.jsPDF) {
      resolve(window.jspdf.jsPDF);
      return;
    }

    const existing = document.querySelector('script[data-jspdf="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(window.jspdf?.jsPDF));
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.async = true;
    script.dataset.jspdf = "true";
    script.onload = () => {
      if (window.jspdf?.jsPDF) {
        resolve(window.jspdf.jsPDF);
      } else {
        reject(new Error("jsPDF failed to load"));
      }
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });

const getStatusIcon = (status = "") => {
  const normalized = status.toLowerCase();

  if (normalized.includes("delivered")) return faCheckCircle;
  if (normalized.includes("out for delivery")) return faTruckLoading;
  if (normalized.includes("destination")) return faBuilding;
  if (normalized.includes("transit")) return faRoute;
  if (normalized.includes("origin")) return faWarehouse;
  if (normalized.includes("picked")) return faHandHolding;
  return faFileAlt;
};

const Tracking = () => {
  const { trackingNumber: trackingNumberParam } = useParams();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const packet = trackingData?.packet_list?.[0] || null;
  const trackingDetails = packet?.["Tracking Detail"] || [];
  const currentStatus = packet?.booked_packet_status || "In Transit";
  const latestActivity = packet?.activity_date || "N/A";
  const isDelivered = currentStatus.toLowerCase().includes("deliver");

  const handleTrack = async (trackingNumberOverride) => {
    const resolvedTrackingNumber =
      typeof trackingNumberOverride === "string"
        ? trackingNumberOverride
        : trackingNumber;
    const trimmedTrackingNumber = resolvedTrackingNumber.trim();

    if (!trimmedTrackingNumber) {
      setError("Please enter a tracking number.");
      setTrackingData(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(TRACKING_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trackingNumber: trimmedTrackingNumber }),
      });

      const raw = await response.text();
      let data = null;

      try {
        data = raw ? JSON.parse(raw) : null;
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to fetch tracking details right now."
        );
      }

      if (!data?.packet_list?.length) {
        setTrackingData(null);
        setError("No tracking data found for this tracking number.");
        return;
      }

      setTrackingData(data);
    } catch (fetchError) {
      setTrackingData(null);
      setError(
        fetchError.message || "Unable to fetch tracking details right now."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trackingNumberFromUrl = (
      trackingNumberParam || params.get("trackingNumber") || ""
    ).trim();

    if (trackingNumberFromUrl) {
      setTrackingNumber(trackingNumberFromUrl);
      handleTrack(trackingNumberFromUrl);
    }
  }, [trackingNumberParam]);

  const generatePDF = async (e) => {
    e.preventDefault();

    try {
      if (!packet) {
        alert("No tracking data found.");
        return;
      }

      const jsPDF = await ensureJsPdf();
      const doc = new jsPDF();

      doc.setFont("helvetica");

      doc.setFillColor(0, 102, 204);
      doc.rect(0, 0, 210, 30, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(18);
      doc.text("Order Tracking Details", 105, 12, { align: "center" });
      doc.setFontSize(12);
      doc.text("Lionex Courier", 105, 20, { align: "center" });

      doc.setTextColor(0, 0, 0);
      let y = 40;

      doc.setFillColor(245, 245, 245);
      doc.rect(10, y, 190, 8, "F");
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Order Summary", 15, y + 5);

      y += 12;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);

      doc.text("Tracking ID:", 15, y);
      doc.text(String(packet.track_number || "N/A"), 50, y);

      doc.text("Status:", 120, y);
      doc.setTextColor(40, 167, 69);
      doc.setFont("helvetica", "bold");
      doc.text(String(packet.booked_packet_status || "N/A"), 140, y);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");

      y += 8;
      doc.text("Booking Date:", 15, y);
      doc.text(String(packet.booking_date || "N/A"), 50, y);

      doc.text("Activity Date:", 120, y);
      doc.text(String(packet.activity_date || "N/A"), 150, y);

      y += 12;
      doc.setFillColor(0, 102, 204);
      doc.rect(10, y, 190, 8, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Shipment Details", 15, y + 5);

      y += 12;
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);

      doc.text("Origin:", 15, y);
      doc.text(String(packet.origin_city_name || "N/A"), 50, y);

      doc.text("Destination:", 120, y);
      doc.text(String(packet.destination_city_name || "N/A"), 150, y);

      y += 8;
      doc.text("Weight:", 15, y);
      doc.text(String(`${packet.booked_packet_weight || "N/A"} kg`), 50, y);

      doc.text("Pieces:", 120, y);
      doc.text(String(packet.booked_packet_no_piece || "N/A"), 150, y);

      y += 8;
      doc.text("Collect Amount:", 15, y);
      doc.text(`PKR ${String(packet.booked_packet_collect_amount || "N/A")}`, 50, y);

      doc.text("Order ID:", 120, y);
      doc.text(String(packet.booked_packet_order_id || "N/A"), 150, y);

      y += 8;
      doc.text("Courier:", 15, y);
      doc.text(String(packet.courier || "N/A"), 50, y);

      y += 12;
      doc.setFillColor(0, 102, 204);
      doc.rect(10, y, 90, 8, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Shipper Details", 15, y + 5);

      doc.rect(110, y, 90, 8, "F");
      doc.text("Consignee Details", 115, y + 5);

      y += 12;
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);

      doc.text("Name:", 15, y);
      doc.text(String(packet.shipment_name_eng || "N/A"), 50, y);
      doc.text("Name:", 115, y);
      doc.text(String(packet.consignment_name_eng || "N/A"), 150, y);

      y += 8;
      doc.text("Phone:", 15, y);
      doc.text(String(packet.shipment_phone || "N/A"), 50, y);
      doc.text("Phone:", 115, y);
      doc.text(String(packet.consignment_phone || "N/A"), 150, y);

      y += 8;
      doc.text("Address:", 15, y);
      const shipperLines = doc.splitTextToSize(
        String(packet.shipment_address || "N/A"),
        80,
      );
      doc.text(shipperLines, 50, y);
      doc.text("Address:", 115, y);
      const consigneeLines = doc.splitTextToSize(
        String(packet.consignment_address || "N/A"),
        80,
      );
      doc.text(consigneeLines, 150, y);

      y += Math.max(shipperLines.length * 5, consigneeLines.length * 5) + 8;

      if (y > 220) {
        doc.addPage();
        y = 20;
      }

      doc.setFillColor(0, 102, 204);
      doc.rect(10, y, 190, 8, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text(`Tracking History (${trackingDetails.length} Events)`, 15, y + 5);

      y += 12;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(9);
      doc.setFillColor(245, 245, 245);
      doc.rect(10, y - 4, 190, 6, "F");
      doc.setFont("helvetica", "bold");
      doc.text("Status", 15, y);
      doc.text("Date & Time", 120, y);

      y += 6;
      doc.setFont("helvetica", "normal");

      for (let i = 0; i < trackingDetails.length; i += 1) {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
        const detail = trackingDetails[i];
        doc.text(String(detail.Status || "N/A").substring(0, 50), 15, y);
        doc.text(String(detail.Activity_datetime || "N/A"), 120, y);
        y += 6;
      }

      y += 10;
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text(
        "This is a computer-generated document. No signature is required.",
        105,
        y,
        { align: "center" },
      );
      doc.text(`Generated on: ${new Date().toLocaleString()}`, 105, y + 4, {
        align: "center",
      });

      const pdfBlob = doc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const printWindow = window.open(pdfUrl, "_blank");
      if (printWindow) {
        printWindow.onload = function () {
          printWindow.print();
        };
      }
    } catch (error) {
      console.error("Error loading tracking data:", error);
      alert("Unable to load tracking data. Please try again.");
    }
  };

  return (
    <PageShell
      title="Shipment Tracking"
      subtitle="Enter your tracking number to see live updates."
    >
      <section className="bg-[linear-gradient(180deg,#fff8f4_0%,#ffffff_100%)] px-0 pb-[50px] pt-10 min-[768px]:pb-[60px] min-[768px]:pt-[50px] min-[992px]:pb-20 min-[992px]:pt-[60px]">
        <div className="mx-auto mb-5 flex w-[40%] flex-col items-center justify-center gap-3 sm:items-center">
          <input
            type="text"
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleTrack();
              }
            }}
            className="h-[56px] w-full rounded-[6px] border border-gray-300 bg-white px-5 text-[15px] text-[#062f3a] outline-none placeholder:text-[#6a6c6e]"
          />
          <ThmBtn type="button" onClick={handleTrack}>
            {loading ? "Tracking..." : "Track Order"}
          </ThmBtn>
          {error ? (
            <p className="text-center text-[14px] text-red-200">{error}</p>
          ) : null}
        </div>
        <style>
          {`
            @keyframes truckMove {
              0%, 100% { transform: translate(-50%, -50%) translateX(-20px); }
              50% { transform: translate(-50%, -50%) translateX(20px); }
            }
            @keyframes truckMoveMobile {
              0%, 100% { transform: translate(-50%, -50%) translateX(-10px); }
              50% { transform: translate(-50%, -50%) translateX(10px); }
            }
            @keyframes pulse {
              0%, 100% { box-shadow: 0 0 0 0 rgba(253, 85, 35, 0.4); }
              50% { box-shadow: 0 0 0 12px rgba(253, 85, 35, 0); }
            }
          `}
        </style>
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          {loading ? (
            <TrackingResultsSkeleton />
          ) : packet ? (
            <>
          <div
            className="mb-[30px] flex flex-col items-center justify-between gap-[30px] rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white px-5 py-[25px] shadow-[0_10px_40px_rgba(6,47,58,0.08)] min-[768px]:px-[35px] min-[768px]:py-[30px] min-[1200px]:flex-row min-[1200px]:text-left"
            id="trackingDataSection"
          >
            <div className="flex-1 text-center min-[1200px]:text-left">
              <span className="mb-[15px] inline-block rounded-[50px] bg-[#f78134] px-[14px] py-[6px] text-[11px] font-semibold uppercase tracking-[0.5px] text-white min-[768px]:px-[18px] min-[768px]:py-[8px] min-[768px]:text-[13px]">
                {currentStatus}
              </span>
              <h2 className="m-0 mb-[10px] text-[18px] font-bold leading-[1.3] text-[#062f3a] min-[481px]:text-[20px] min-[992px]:text-[24px] min-[1200px]:text-[28px]">
                Tracking ID: <span>{packet.track_number || trackingNumber}</span>
              </h2>
              <p className="m-0 text-[15px] text-[#6a6c6e]">
                {isDelivered ? "Status: " : "Estimated Delivery: "}
                <strong className="font-semibold text-[#f78134]">
                  {isDelivered ? "Delivered" : latestActivity}
                </strong>
              </p>
            </div>
            <div className="w-full flex-1 min-[1200px]:w-auto">
              <div className="flex flex-row items-center justify-between gap-2 min-[1200px]:justify-center">
                <div className="flex min-w-0 flex-col items-center text-center min-[992px]:min-w-[80px] min-[1200px]:min-w-[100px]">
                  <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f5] text-[12px] text-[#f78134] min-[768px]:mb-[10px] min-[768px]:h-10 min-[768px]:w-10 min-[768px]:text-[15px] min-[992px]:h-[40px] min-[992px]:w-[40px] min-[1200px]:h-[50px] min-[1200px]:w-[50px] min-[1200px]:text-[18px]">
                    <Package2 />
                  </span>
                  <span className="mb-1 text-[9px] uppercase tracking-[1px] text-[#6a6c6e] min-[768px]:text-[11px]">
                    Origin
                  </span>
                  <span className="text-[11px] font-semibold text-[#062f3a] min-[992px]:text-[12px] min-[1200px]:text-[14px]">
                    {packet.origin_city_name || "N/A"}
                  </span>
                </div>
                <div className="relative flex flex-1 flex-col items-center px-[5px] min-[768px]:px-[10px]">
                  <span className="h-[2px] w-full rounded-[6px] bg-[#f78134] min-[768px]:h-[3px]"></span>
                  <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#f78134]"></span>
                  <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#f78134]"></span>
                  <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 animate-[truckMoveMobile_2s_ease-in-out_infinite] items-center justify-center rounded-full bg-white p-2 text-[16px] text-[#f78134] shadow-[0_4px_15px_rgba(0,0,0,0.1)] min-[768px]:animate-[truckMove_2s_ease-in-out_infinite]">
                    <FontAwesomeIcon icon={faTruck} />
                  </span>
                </div>
                <div className="flex min-w-0 flex-col items-center text-center min-[992px]:min-w-[80px] min-[1200px]:min-w-[100px]">
                  <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(253,85,35,0.15)] text-[12px] text-[#f78134] min-[768px]:mb-[10px] min-[768px]:h-10 min-[768px]:w-10 min-[768px]:text-[15px] min-[992px]:h-[40px] min-[992px]:w-[40px] min-[1200px]:h-[50px] min-[1200px]:w-[50px] min-[1200px]:text-[18px]">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <span className="mb-1 text-[9px] uppercase tracking-[1px] text-[#6a6c6e] min-[768px]:text-[11px]">
                    Destination
                  </span>
                  <span className="text-[11px] font-semibold text-[#062f3a] min-[992px]:text-[12px] min-[1200px]:text-[14px]">
                    {packet.destination_city_name || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[30px] items-start min-[992px]:grid-cols-1 min-[1200px]:grid-cols-[1fr_320px] min-[1200px]:gap-[30px] min-[1320px]:grid-cols-[1fr_380px]">
            <div className="flex flex-col gap-[30px]">
              <div className="rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white p-[30px] shadow-[0_10px_40px_rgba(6,47,58,0.08)]">
                <h3 className="m-0 mb-[25px] border-b-2 border-[#f5f5f5] pb-5 text-[18px] font-bold text-[#062f3a] min-[481px]:mb-[30px] min-[481px]:text-[20px]">
                  Shipment Progress
                </h3>
                <div className="relative pl-[30px] min-[481px]:pl-[35px] min-[768px]:pl-10">
                  {trackingDetails.map((detail, index) => {
                    const isLast = index === trackingDetails.length - 1;
                    const isActive = index === trackingDetails.length - 1;

                    return (
                      <div
                        key={`${detail.Status}-${detail.Activity_datetime}-${index}`}
                        className={`relative ${isLast ? "" : "pb-[35px]"}`}
                      >
                        <div className="absolute left-[-30px] top-0 flex flex-col items-center min-[481px]:left-[-30px] min-[768px]:left-[-40px]">
                          <span
                            className={`z-[1] flex h-[26px] w-[26px] items-center justify-center rounded-full border-[3px] text-[10px] text-white min-[768px]:h-[36px] min-[768px]:w-[36px] min-[768px]:text-[12px] ${
                              isActive
                                ? "animate-[pulse_2s_infinite] border-[#f78134] bg-[#f78134]"
                                : "border-[#f78134] bg-[#f78134]"
                            }`}
                          >
                            <FontAwesomeIcon
                              icon={isActive ? faShippingFast : faCheck}
                            />
                          </span>
                          {!isLast ? (
                            <span className="mt-2 min-h-[30px] w-[2px] flex-1 bg-[#f78134]"></span>
                          ) : null}
                        </div>
                        <div>
                          <h4
                            className={`m-0 mb-[6px] text-[15px] font-semibold min-[768px]:text-[17px] ${
                              isActive ? "text-[#f78134]" : "text-[#062f3a]"
                            }`}
                          >
                            {detail.Status || "N/A"}
                          </h4>
                          <p className="m-0 mb-[6px] text-[12px] font-medium text-[#6a6c6e] min-[768px]:text-[13px]">
                            {detail.Activity_datetime || "N/A"}
                          </p>
                          <p className="m-0 text-[12px] leading-[1.5] text-[#6a6c6e] min-[768px]:text-[13px]">
                            {detail.Reason || detail.Status || "Tracking update available"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="overflow-hidden rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white shadow-[0_10px_40px_rgba(6,47,58,0.08)]">
                <div className="flex items-center justify-between rounded-t-[10px] bg-[#062f3a] px-5 py-[18px] text-white min-[768px]:px-[30px] min-[768px]:py-[25px]">
                  <h3 className="m-0 text-[18px] font-semibold text-white">
                    Tracking History
                  </h3>
                  <span className="rounded-[6px] bg-white/15 px-3 py-[5px] text-[13px]">
                    {trackingDetails.length} Events
                  </span>
                </div>
                <ul className="m-0 list-none overflow-y-auto p-[10px]">
                  {trackingDetails.map((detail, index) => (
                    <li
                      key={`${detail.Status}-${detail.Activity_datetime}-${index}`}
                      className={`flex items-center gap-[15px] border-b border-[rgba(6,47,58,0.05)] px-[5px] py-[15px] transition-all duration-300 ease-[ease] hover:bg-[rgba(244,245,249,0.5)] min-[768px]:px-[15px] min-[768px]:py-[13px] ${index % 2 === 1 ? "bg-[rgba(244,245,249,0.4)] hover:bg-[rgba(244,245,249,0.7)]" : ""}`}
                    >
                      <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[rgba(253,85,35,0.1)] text-[12px] text-[#f78134] min-[768px]:h-10 min-[768px]:w-10 min-[768px]:text-[14px]">
                        <FontAwesomeIcon icon={getStatusIcon(detail.Status)} />
                      </div>
                      <div className="flex flex-1 justify-between">
                        <p className="m-0 text-[14px] font-semibold text-[#062f3a]">
                          {detail.Status || "N/A"}
                        </p>
                        <time className="text-[12px] text-[#6a6c6e]">
                          {detail.Activity_datetime || "N/A"}
                        </time>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-[25px] min-[992px]:flex-row min-[992px]:flex-wrap min-[1200px]:flex-col">
              <div className="min-w-full overflow-hidden rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white shadow-[0_10px_40px_rgba(6,47,58,0.08)] min-[992px]:min-w-[280px] min-[992px]:flex-1">
                <div className="flex items-center gap-3 bg-[#062f3a] px-5 py-[18px] text-white min-[768px]:px-[25px] min-[768px]:py-[22px]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[rgba(253,85,35,0.2)] text-[16px] text-[#f78134]">
                    <FontAwesomeIcon icon={faTruck} />
                  </span>
                  <h3 className="m-0 text-[17px] font-semibold text-white">
                    Shipment Details
                  </h3>
                </div>
                <div className="p-5 min-[768px]:p-[25px]">
                  {[
                    ["Service Type", packet.courier || "N/A", false],
                    ["Weight", `${packet.booked_packet_weight || "N/A"} kg`, false],
                    ["Pieces", packet.booked_packet_no_piece || "N/A", false],
                    ["Current Status", currentStatus, true],
                  ].map(([label, value, active], index, arr) => (
                    <div
                      key={label}
                      className={`flex flex-row items-start justify-between gap-[5px] py-3 ${index !== arr.length - 1 ? "border-b border-[rgba(6,47,58,0.06)]" : ""}`}
                    >
                      <span className="text-[13px] font-medium text-[#6a6c6e]">
                        {label}
                      </span>
                      <span
                        className={
                          active
                            ? "rounded-[6px] bg-[rgba(253,85,35,0.1)] px-3 py-1 text-[12px] font-semibold text-[#f78134]"
                            : "text-left text-[14px] font-semibold text-[#062f3a]"
                        }
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="min-w-full overflow-hidden rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white shadow-[0_10px_40px_rgba(6,47,58,0.08)] min-[992px]:min-w-[280px] min-[992px]:flex-1">
                <div className="flex items-center gap-3 bg-[#062f3a] px-5 py-[18px] text-white min-[768px]:px-[25px] min-[768px]:py-[22px]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[rgba(253,85,35,0.2)] text-[16px] text-[#f78134]">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <h3 className="m-0 text-[17px] font-semibold text-white">
                    Consignee Details
                  </h3>
                </div>
                <div className="p-5 min-[768px]:p-[25px]">
                  <div className="flex flex-col items-center gap-5 text-center min-[768px]:flex-col">
                    <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f78134_0%,#e06a2a_100%)] text-[24px] text-white">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>
                      <h4 className="m-0 mb-2 text-[16px] font-semibold text-[#062f3a]">
                        {packet.consignment_name_eng || "N/A"}
                      </h4>
                      <p className="m-0 mb-[5px] flex items-center justify-center gap-2 text-[13px] text-[#6a6c6e]">
                        <i className="fas fa-phone w-4 text-[#f78134]"></i>
                        <span>{packet.consignment_phone || "N/A"}</span>
                      </p>
                      <p className="m-0 flex items-center justify-center gap-2 text-[13px] text-[#6a6c6e]">
                        <i className="fas fa-map-pin w-4 text-[#f78134]"></i>
                        {packet.consignment_address || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-[6px] bg-[linear-gradient(135deg,#062f3a_0%,#0a3d4a_100%)] px-5 py-[25px] text-center text-white min-[768px]:px-[30px] min-[768px]:py-[30px]">
                <h3 className="m-0 mb-[10px] text-[20px] font-bold text-white">
                  Need Help?
                </h3>
                <p className="m-0 mb-[25px] text-[14px] leading-[1.6] text-white/70">
                  Contact us for any queries about your shipment
                </p>
                <div className="flex flex-col gap-[10px] min-[768px]:gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-[10px] rounded-[6px] bg-[#f78134] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 ease-[ease] hover:-translate-y-[2px] hover:bg-[#e06a2a] hover:shadow-[0_8px_20px_rgba(253,85,35,0.3)] min-[768px]:px-[25px] min-[768px]:py-[14px] min-[768px]:text-[14px]"
                  >
                    <i className="fas fa-headset"></i> Contact Support
                  </Link>
                  <a
                    href="#"
                    onClick={generatePDF}
                    className="inline-flex items-center justify-center gap-[10px] rounded-[6px] border border-white/20 bg-white/10 px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 ease-[ease] hover:-translate-y-[2px] hover:bg-white/20 min-[768px]:px-[25px] min-[768px]:py-[14px] min-[768px]:text-[14px]"
                  >
                    <i className="fas fa-print"></i> Print Details
                  </a>
                </div>
              </div>
            </div>
          </div>
            </>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
};

export default Tracking;
