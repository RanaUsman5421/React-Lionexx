import { useEffect, useMemo, useRef, useState } from "react";
import ThmBtn from "./thmBtn";
import leopardLogo from "../assets/images/resources/Leopards.webp";
import lionexLogo from "../assets/images/resources/Lionex Org+Black PNG-08.webp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageShell from "./PageShell";

const DEFAULT_DATA = {
  trackingId: "LE7530248552",
  consignee: "Iqraar Ahmed",
  destination: "Rahim Yar Khan",
  phone: "03266251751",
  phone2: "03266251751",
  address: "Kustuntunia, uhala Puri ala, Nzad Baba Alayar, Pheeka Palwan, Near lucky Salon, Sialkot",
  shipper: "Iqraar Ahmed",
  origin: "Lahore",
  shipperPhone: "03266251751",
  pickup: "Kustuntunia, uhala Puri ala, Nzad Baba Alayar, Pheeka Palwan, Near lucky Salon, Sialkot",
  cod: "1200 PKR",
  barcode: "3546895018784",
  product: "Air Birds 31 Pro",
  weight: "0.5 KG",
  qty: "1",
  orderId: "#7843334",
  specialRequest: "Please handle carefully. Don't bend, glass item.",
};

const ensureScript = (src, dataKey, resolver) =>
  new Promise((resolve, reject) => {
    const resolvedValue = resolver();
    if (resolvedValue) {
      resolve(resolvedValue);
      return;
    }

    const existing = document.querySelector(`script[data-${dataKey}="true"]`);
    if (existing) {
      existing.addEventListener("load", () => {
        const value = resolver();
        if (value) {
          resolve(value);
        } else {
          reject(new Error(`${dataKey} failed to load`));
        }
      });
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset[dataKey] = "true";
    script.onload = () => {
      const value = resolver();
      if (value) {
        resolve(value);
      } else {
        reject(new Error(`${dataKey} failed to load`));
      }
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });

const ensureJsPdf = () =>
  ensureScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
    "jspdf",
    () => window.jspdf?.jsPDF
  );

const ensureHtml2Canvas = () =>
  ensureScript(
    "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
    "html2canvas",
    () => window.html2canvas
  );

const ensureQRCode = () =>
  ensureScript(
    "https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js",
    "qrcode",
    () => window.QRCode
  );

const ensureJsBarcode = () =>
  ensureScript(
    "https://cdn.jsdelivr.net/npm/jsbarcode/dist/JsBarcode.all.min.js",
    "jsbarcode",
    () => window.JsBarcode
  );

const EXPORT_WIDTH = 1120;
const EXPORT_WINDOW_WIDTH = 1280;

const PDFslip = ({ data = DEFAULT_DATA }) => {
  const labelRef = useRef(null);
  const qrRef = useRef(null);
  const barcodeRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [loadError, setLoadError] = useState("");

  const slipData = useMemo(
    () => ({ ...DEFAULT_DATA, ...(data || {}) }),
    [data]
  );

  useEffect(() => {
    let isMounted = true;

    const renderCodes = async () => {
      try {
        setLoadError("");
        const [QRCode, JsBarcode] = await Promise.all([
          ensureQRCode(),
          ensureJsBarcode(),
        ]);

        if (!isMounted) {
          return;
        }

        if (qrRef.current) {
          qrRef.current.innerHTML = "";
          new QRCode(qrRef.current, {
            text: slipData.trackingId,
            width: 80,
            height: 80,
          });
        }

        if (barcodeRef.current) {
          JsBarcode(barcodeRef.current, slipData.barcode, {
            format: "CODE128",
            width: 2,
            height: 40,
            displayValue: false,
            margin: 0,
          });
        }
      } catch (error) {
        if (isMounted) {
          setLoadError("Unable to load PDF helper libraries.");
        }
      }
    };

    renderCodes();

    return () => {
      isMounted = false;
    };
  }, [slipData.barcode, slipData.trackingId]);

  const handleDownloadPdf = async () => {
    if (!labelRef.current) {
      return;
    }

    setIsDownloading(true);
    setLoadError("");

    try {
      const [jsPDF, html2canvas] = await Promise.all([
        ensureJsPdf(),
        ensureHtml2Canvas(),
      ]);

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      const canvas = await html2canvas(labelRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: EXPORT_WINDOW_WIDTH,
        onclone: (clonedDocument) => {
          const clonedLabel = clonedDocument.querySelector('[data-pdf-slip="true"]');

          if (clonedLabel) {
            clonedLabel.style.width = `${EXPORT_WIDTH}px`;
            clonedLabel.style.maxWidth = `${EXPORT_WIDTH}px`;
            clonedLabel.style.margin = "0";
          }
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 8;
      const availableWidth = pageWidth - margin * 2;
      const availableHeight = pageHeight - margin * 2;
      const scale = Math.min(
        availableWidth / canvas.width,
        availableHeight / canvas.height
      );
      const imgWidth = canvas.width * scale;
      const imgHeight = canvas.height * scale;
      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      pdf.save(`${slipData.trackingId}.pdf`);
    } catch (error) {
      setLoadError("Unable to generate the PDF right now.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <PageShell
      title="Invoice"
      subtitle="Get Your order slip here by just one click"
    >
    <style>
      {`
        @page {
          size: A4 landscape;
          margin: 8mm;
        }

        @media print {
          html,
          body {
            background: #ffffff !important;
          }

          [data-pdf-print-root="true"] {
            padding: 0 !important;
            background: #ffffff !important;
          }

          [data-pdf-slip="true"] {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            break-inside: avoid;
            page-break-inside: avoid;
            overflow: hidden !important;
          }

          [data-pdf-slip="true"] * {
            box-sizing: border-box;
          }

          [data-pdf-slip-row="true"] {
            flex-direction: row !important;
            align-items: stretch !important;
          }

          [data-pdf-side-panel="true"] {
            width: 28% !important;
            min-width: 28% !important;
            max-width: 28% !important;
          }

          [data-pdf-main-panel="true"] {
            flex: 1 1 0% !important;
            min-width: 0 !important;
          }

          [data-pdf-print-hide="true"] {
            display: none !important;
          }
        }
      `}
    </style>
    <div
      data-pdf-print-root="true"
      className="bg-[#f4f4f4] px-4 py-20 text-center font-['Poppins',sans-serif] print:bg-white print:px-0 print:py-0"
    >
      <div
        ref={labelRef}
        data-pdf-slip="true"
        className="mx-auto w-auto max-w-[1120px] rounded-[22px] border border-[#bdbdbd] bg-white p-0 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] print:w-full print:max-w-full print:rounded-none print:shadow-none"
      >
        <div
          data-pdf-slip-row="true"
          className="flex items-stretch overflow-hidden rounded-[22px] rounded-bl-none max-[991px]:flex-col print:flex-row"
        >
          <div
            data-pdf-main-panel="true"
            className="flex min-w-0 flex-[1.15] flex-col border-r border-[#d9d9d9] text-left max-[991px]:border-r-0 max-[991px]:border-b print:border-b-0 print:border-r"
          >
            <div className="flex h-[88px] items-center justify-center bg-white px-4">
              <img
                src={leopardLogo}
                alt="Leopards Logo"
                crossOrigin="anonymous"
                className="max-h-[58px] object-contain"
              />
            </div>

            <div className="m-0 flex h-[47px] items-center border-y border-[#e1e1e1] bg-[#efefef] px-7 py-0 text-[19px] font-semibold leading-none text-black box-border">
              Consignee Details
            </div>

            <div className="flex flex-1 flex-col text-[14px] text-[#6f6f6f]">
              <div className="border-b border-[#ededed] px-4 py-[10px] leading-[1.35]">
                <span className="font-semibold text-black">Consignee:</span>{" "}
                {slipData.consignee}
              </div>
              <div className="border-b border-[#ededed] px-4 py-[10px] leading-[1.35]">
                <span className="font-semibold text-black">Destination:</span>{" "}
                {slipData.destination}
              </div>

              <div className="flex border-b border-[#ededed] max-[575px]:flex-col">
                <div className="flex-1 px-4 py-[10px] leading-[1.35]">
                  <span className="font-semibold text-black">Phone:</span>{" "}
                  {slipData.phone}
                </div>
                <div className="flex-1 px-4 py-[10px] leading-[1.35] max-[575px]:border-l-0 max-[575px]:border-t">
                  <span className="font-semibold text-black">Phone 2:</span>{" "}
                  {slipData.phone2}
                </div>
              </div>

              <div className="flex-1 px-4 py-[12px] leading-[1.45]">
                <span className="font-semibold text-black">Address:</span>{" "}
                {slipData.address}
              </div>
            </div>

            <div className="!rounded-none m-0 flex h-[41px] items-center border-[#d0d0d0] bg-[#6f6f6f] px-4 py-0 text-md font-medium capitalize leading-none text-white box-border">
              {slipData.origin} <FontAwesomeIcon icon={faArrowRight} /> {slipData.destination.toLowerCase()}
            </div>
          </div>

          <div
            data-pdf-side-panel="true"
            className="flex w-[290px] shrink-0 flex-col items-center border-r border-[#d9d9d9] bg-white max-[991px]:w-full max-[991px]:border-r-0 max-[991px]:border-b print:border-b-0 print:border-r"
          >
            <h3 className="m-0 w-full bg-black px-3 py-3 text-center text-[20px] font-semibold leading-none tracking-[0.3px] text-white">
              {slipData.trackingId}
            </h3>

            <div
              ref={qrRef}
              className="flex min-h-[108px] items-center justify-center px-4 py-[10px]"
            ></div>

            <div className="w-full border-t border-[#ececec] px-4 py-[8px] text-center leading-none">
              <span className="mr-2 text-[18px] font-semibold text-black">
                COD:
              </span>
              <span className="text-[28px] font-semibold text-[#4b4b4b]">
                {String(slipData.cod).replace(/\s*PKR$/i, "")}
              </span>
              <span className="ml-2 text-[18px] font-semibold text-[#4b4b4b]">
                Pkr
              </span>
            </div>

            <div className="w-full border-t border-[#ececec] px-4 pt-[10px] text-center">
              <svg ref={barcodeRef} className="mx-auto max-w-full"></svg>
              <p className="pb-[6px] pt-[4px] text-[12px] tracking-[6px] text-[#4a4a4a]">
                {slipData.barcode}
              </p>
            </div>

            <div className="w-full border-t border-[#ececec] px-4 py-[8px] text-left text-[13px] leading-[1.35] text-[#666]">
              <span className="font-semibold text-black">Product:</span>{" "}
              {slipData.product}
            </div>

            <div className="flex w-full border-t border-[#ececec] bg-[#f8f8f8] text-[13px] leading-none text-black">
              <div className="flex flex-1 items-center gap-1 px-4 py-[8px]">
                <span className="font-semibold">Wgt:</span>
                <span className="text-[#666]">{slipData.weight}</span>
              </div>
              <div className="flex flex-1 items-center justify-center gap-1 px-3 py-[8px]">
                <span className="font-semibold">Qty:</span>
                <span className="text-[#666]">{slipData.qty}</span>
              </div>
            </div>

            <div className="w-full border-t border-[#ececec] px-4 py-[8px] text-left text-[13px] leading-[1.35]">
              <span className="font-semibold text-black">Order ID:</span>{" "}
              <span className="text-[#666]">{slipData.orderId}</span>
            </div>
          </div>

          <div
            data-pdf-main-panel="true"
            className="flex min-w-0 flex-[1.15] flex-col text-left"
          >
            <div className="flex h-[88px] items-center justify-center bg-white px-4">
              <img
                src={lionexLogo}
                alt="Lionex Logo"
                crossOrigin="anonymous"
                className="max-h-[54px] object-contain"
              />
            </div>

            <div className="m-0 flex h-[47px] items-center border-y border-[#e1e1e1] bg-[#efefef] px-7 py-0 text-[19px] font-semibold leading-none text-black box-border">
              Shipper Details
            </div>

            <div className="flex flex-1 flex-col text-[14px] text-[#6f6f6f]">
              <div className="border-b border-[#ededed] px-4 py-[10px] leading-[1.35]">
                <span className="font-semibold text-black">Shipper:</span>{" "}
                {slipData.shipper}
              </div>
              <div className="border-b border-[#ededed] px-4 py-[10px] leading-[1.35]">
                <span className="font-semibold text-black">Origin:</span>{" "}
                {slipData.origin}
              </div>
              <div className="border-b border-[#ededed] px-4 py-[10px] leading-[1.35]">
                <span className="font-semibold text-black">Phone:</span>{" "}
                {slipData.shipperPhone}
              </div>
              <div className="border-b border-[#ededed] px-4 py-[12px] leading-[1.45]">
                <span className="font-semibold text-black">Pickup Address:</span>{" "}
                {slipData.pickup}
              </div>
              <div className="flex-1 px-4 py-[12px] leading-[1.45]">
                <span className="font-semibold text-black">Return Address:</span>{" "}
                Same Above
              </div>
            </div>
          </div>
        </div>

        <div className="m-0 flex min-h-[47px] items-center rounded-bl-3xl rounded-br-3xl border-t border-[#d7d7d7] bg-[#ececec] px-7 py-0 text-left text-[14px] leading-[1.35] text-[#787878] box-border">
          <b className="text-black">Special Request:</b> {slipData.specialRequest}
        </div>
      </div>

      <div
        data-pdf-print-hide="true"
        className="mt-5 flex justify-center print:hidden"
      >
        <ThmBtn
          type="button"
          onClick={handleDownloadPdf}
          disabled={isDownloading}
          className="border-none disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isDownloading ? "Generating PDF..." : "Download PDF"}
        </ThmBtn>
      </div>

      {loadError ? (
        <p className="mt-3 text-[14px] text-red-600">{loadError}</p>
      ) : null}
    </div>
  </PageShell >
  );
};

export default PDFslip;
