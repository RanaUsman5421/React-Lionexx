(function () {
  var endpoint = "https://api.lionexcourier.com/api/v8/track/unified-track";
  var inputEl = document.getElementById("trackingIdInput");
  var buttonEl = document.getElementById("trackOrderBtn");
  var sectionEl = document.getElementById("trackingDataSection");
  var statusEl = document.getElementById("trackingFormStatus");

  if (!inputEl || !buttonEl || !sectionEl) {
    return;
  }

  function setFormStatus(message, isError) {
    if (!statusEl) {
      return;
    }
    statusEl.textContent = message || "";
    statusEl.style.color = isError ? "#ffd2d2" : "#ffffff";
  }

  function getByPath(obj, path) {
    if (!obj || !path) {
      return undefined;
    }
    var parts = path.split(".");
    var current = obj;
    for (var i = 0; i < parts.length; i += 1) {
      if (current == null || typeof current !== "object") {
        return undefined;
      }
      current = current[parts[i]];
    }
    return current;
  }

  function pick(obj, paths) {
    for (var i = 0; i < paths.length; i += 1) {
      var value = getByPath(obj, paths[i]);
      if (value !== undefined && value !== null && value !== "") {
        return value;
      }
    }
    return "";
  }

  function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (value && typeof value === "object") {
      return [value];
    }
    return [];
  }

  function formatDate(value) {
    if (!value) {
      return "N/A";
    }
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return String(value);
    }
    return date.toLocaleString();
  }

  function setText(selector, value, fallback) {
    var el = document.querySelector(selector);
    if (!el) {
      return;
    }
    el.textContent = value || fallback || "N/A";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function clearStepClasses(stepEl) {
    stepEl.classList.remove("is-active");
    stepEl.classList.remove("is-complete");
  }

  function updateProgress(currentStatus, events) {
    var steps = document.querySelectorAll(
      ".tracking-data__progress .track-step",
    );
    var times = document.querySelectorAll("[data-step-time]");
    var status = String(currentStatus || "").toLowerCase();
    var activeIndex = 0;

    if (status.indexOf("deliver") > -1) {
      activeIndex = 3;
    } else if (
      status.indexOf("transit") > -1 ||
      status.indexOf("dispatch") > -1
    ) {
      activeIndex = 2;
    } else if (status.indexOf("pick") > -1) {
      activeIndex = 1;
    }

    for (var i = 0; i < steps.length; i += 1) {
      clearStepClasses(steps[i]);
      if (i < activeIndex) {
        steps[i].classList.add("is-complete");
      } else if (i === activeIndex) {
        steps[i].classList.add("is-active");
      }
    }

    var keywords = [
      ["book", "create"],
      ["pick"],
      ["transit", "dispatch"],
      ["deliver"],
    ];

    for (var t = 0; t < times.length; t += 1) {
      var stepTime = "Pending";
      for (var e = 0; e < events.length; e += 1) {
        var message = String(
          pick(events[e], [
            "status",
            "event",
            "activity",
            "description",
            "details",
            "remarks",
          ]) || "",
        ).toLowerCase();
        var matched = false;
        for (var k = 0; k < keywords[t].length; k += 1) {
          if (message.indexOf(keywords[t][k]) > -1) {
            matched = true;
            break;
          }
        }
        if (matched) {
          stepTime = formatDate(
            pick(events[e], [
              "date",
              "time",
              "datetime",
              "created_at",
              "event_time",
            ]),
          );
          break;
        }
      }
      times[t].textContent = stepTime;
    }
  }

  function renderHistory(events) {
    var listEl = document.querySelector("[data-track-history-list]");
    if (!listEl) {
      return;
    }

    if (!events.length) {
      listEl.innerHTML =
        '<li><div><i class="fas fa-map-marker-alt"></i><p>No tracking events found</p></div><time>N/A</time></li>';
      return;
    }

    var rows = events.map(function (eventItem) {
      var text =
        pick(eventItem, [
          "status",
          "event",
          "activity",
          "description",
          "details",
          "remarks",
        ]) || "Status Updated";
      var time = formatDate(
        pick(eventItem, [
          "date",
          "time",
          "datetime",
          "created_at",
          "event_time",
        ]),
      );
      return (
        '<li><div><i class="fas fa-map-marker-alt"></i><p>' +
        escapeHtml(text) +
        "</p></div><time>" +
        escapeHtml(time) +
        "</time></li>"
      );
    });

    listEl.innerHTML = rows.join("");
  }

  function renderTracking(data, trackingId) {
    var record = data;
    if (Array.isArray(record)) {
      record = record[0] || {};
    }

    var events = toArray(
      pick(record, [
        "events",
        "history",
        "tracking_history",
        "tracking_events",
        "scans",
        "timeline",
        "activities",
      ]) ||
        pick(data, [
          "events",
          "history",
          "tracking_history",
          "tracking_events",
          "scans",
          "timeline",
          "activities",
        ]),
    );

    var status = pick(record, [
      "status",
      "shipment_status",
      "current_status",
      "tracking_status",
      "delivery_status",
    ]);
    var eta = pick(record, [
      "eta",
      "estimated_delivery",
      "expected_delivery",
      "delivery_date",
      "promise_date",
    ]);
    var origin = pick(record, [
      "origin",
      "origin_city",
      "shipper_city",
      "from_city",
      "shipper_address",
    ]);
    var destination = pick(record, [
      "destination",
      "destination_city",
      "consignee_city",
      "to_city",
      "destination_address",
    ]);
    var service = pick(record, [
      "service",
      "service_type",
      "service_name",
      "product",
      "product_name",
    ]);
    var consignee = pick(record, [
      "consignee_name",
      "consignee",
      "receiver_name",
      "customer_name",
    ]);
    var phone = pick(record, [
      "consignee_phone",
      "phone",
      "receiver_phone",
      "customer_phone",
    ]);
    var lastScan = pick(record, [
      "last_scan",
      "last_event",
      "last_status",
      "current_location",
    ]);
    var returnedTrackingId = pick(record, [
      "tracking_id",
      "trackingId",
      "tracking_number",
      "tracking_no",
      "cn",
      "cn_no",
      "consignment_no",
    ]);

    setText("[data-track-id]", returnedTrackingId || trackingId, trackingId);
    setText("[data-track-status]", status, "In Transit");
    setText("[data-track-eta]", formatDate(eta), "N/A");
    setText("[data-track-origin]", origin, "N/A");
    setText("[data-track-destination]", destination, "N/A");
    setText("[data-track-service]", service, "N/A");
    setText("[data-track-consignee]", consignee, "N/A");
    setText("[data-track-phone]", phone, "N/A");
    setText("[data-track-last-scan]", lastScan || status, "N/A");
    setText(
      "[data-track-events-count]",
      String(events.length) + " Events",
      "0 Events",
    );

    updateProgress(status, events);
    renderHistory(events);
    sectionEl.classList.remove("tracking-data--hidden");
  }

  async function fetchTracking() {
    var trackingId = inputEl.value.trim();
    if (!trackingId) {
      setFormStatus("Please enter a tracking ID first.", true);
      sectionEl.classList.add("tracking-data--hidden");
      return;
    }

    buttonEl.disabled = true;
    setFormStatus("Fetching tracking details...", false);

    try {
      var response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trackingNumber: trackingId,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      var payload = await response.json();
      var trackingData =
        pick(payload, ["data", "result", "tracking", "shipment", "payload"]) ||
        payload;

      renderTracking(trackingData, trackingId);
      setFormStatus("Tracking details loaded.", false);
    } catch (error) {
      sectionEl.classList.add("tracking-data--hidden");
      setFormStatus(
        "Unable to fetch tracking details. Please verify your ID and try again.",
        true,
      );
      console.error("Tracking API error:", error);
    } finally {
      buttonEl.disabled = false;
    }
  }

  buttonEl.addEventListener("click", fetchTracking);
  inputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchTracking();
    }
  });
})();

// Print Details PDF Generation
document.addEventListener("DOMContentLoaded", function () {
  var printBtn = document.querySelector(".action-btn.secondary");
  if (printBtn) {
    printBtn.onclick = function (e) {
      e.preventDefault();
      generatePDF();
    };
  }
});

function generatePDF() {
  // Fetch data from res.json
  fetch("assets/response/res.json")
    .then((response) => response.json())
    .then((data) => {
      if (data.packet_list && data.packet_list.length > 0) {
        var packet = data.packet_list[0];
        var trackingDetails = packet["Tracking Detail"] || [];

        // Initialize jsPDF
        var { jsPDF } = window.jspdf;
        var doc = new jsPDF();

        // Set font
        doc.setFont("helvetica");

        // Header
        doc.setFillColor(0, 102, 204);
        doc.rect(0, 0, 210, 30, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(18);
        doc.text("Order Tracking Details", 105, 12, { align: "center" });
        doc.setFontSize(12);
        doc.text("Lionex Courier", 105, 20, { align: "center" });

        // Reset text color
        doc.setTextColor(0, 0, 0);

        var y = 40;

        // Order Summary
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

        // Shipment Details
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
        doc.text(String((packet.booked_packet_weight || "N/A") + " kg"), 50, y);

        doc.text("Pieces:", 120, y);
        doc.text(String(packet.booked_packet_no_piece || "N/A"), 150, y);

        y += 8;
        doc.text("Collect Amount:", 15, y);
        doc.text(
          "PKR " + String(packet.booked_packet_collect_amount || "N/A"),
          50,
          y,
        );

        doc.text("Order ID:", 120, y);
        doc.text(String(packet.booked_packet_order_id || "N/A"), 150, y);

        y += 8;
        doc.text("Courier:", 15, y);
        doc.text(String(packet.courier || "N/A"), 50, y);

        y += 12;

        // Shipper and Consignee side by side
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

        // Shipper details
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
        var shipperAddr = String(packet.shipment_address || "N/A");
        var shipperLines = doc.splitTextToSize(shipperAddr, 80);
        doc.text(shipperLines, 50, y);

        var addrHeight = shipperLines.length * 5;
        doc.text("Address:", 115, y);
        var consigneeAddr = String(packet.consignment_address || "N/A");
        var consigneeLines = doc.splitTextToSize(consigneeAddr, 80);
        doc.text(consigneeLines, 150, y);

        y += Math.max(addrHeight, 8) + 8;

        // Tracking History
        if (y > 220) {
          doc.addPage();
          y = 20;
        }

        doc.setFillColor(0, 102, 204);
        doc.rect(10, y, 190, 8, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(
          "Tracking History (" + trackingDetails.length + " Events)",
          15,
          y + 5,
        );

        y += 12;
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(9);

        // Table header
        doc.setFillColor(245, 245, 245);
        doc.rect(10, y - 4, 190, 6, "F");
        doc.setFont("helvetica", "bold");
        doc.text("Status", 15, y);
        doc.text("Date & Time", 120, y);

        y += 6;
        doc.setFont("helvetica", "normal");

        // Tracking events
        for (var i = 0; i < trackingDetails.length; i++) {
          if (y > 270) {
            doc.addPage();
            y = 20;
          }

          var detail = trackingDetails[i];
          doc.text(String(detail.Status || "N/A").substring(0, 50), 15, y);
          doc.text(String(detail.Activity_datetime || "N/A"), 120, y);
          y += 6;
        }

        // Footer
        y += 10;
        doc.setFontSize(8);
        doc.setTextColor(128, 128, 128);
        doc.text(
          "This is a computer-generated document. No signature is required.",
          105,
          y,
          { align: "center" },
        );
        doc.text("Generated on: " + new Date().toLocaleString(), 105, y + 4, {
          align: "center",
        });

        // Print PDF
        var pdfBlob = doc.output("blob");
        var pdfUrl = URL.createObjectURL(pdfBlob);
        var printWindow = window.open(pdfUrl, "_blank");
        printWindow.onload = function () {
          printWindow.print();
        };
      } else {
        alert("No tracking data found.");
      }
    })
    .catch((error) => {
      console.error("Error loading tracking data:", error);
      alert("Unable to load tracking data. Please try again.");
    });
}
