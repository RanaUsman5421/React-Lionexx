import { useState } from "react";

const comparisonRows = [
  {
    otherFeature: "Choose the Best Courier",
    otherPct: "0%",
    lionexFeature: "Choose the Best Courier",
    lionexAccent: "(AI)",
    lionexPct: "100%",
  },
  {
    otherFeature: "Customer Support",
    otherPct: "35%",
    lionexFeature: "Customer Support",
    lionexAccent: "(AI + Human)",
    lionexPct: "96%",
  },
  {
    otherFeature: "Auto Reattempt",
    otherPct: "0%",
    lionexFeature: "Auto Reattempt",
    lionexAccent: "(AI + Human)",
    lionexPct: "89%",
  },
  {
    otherFeature: "Auto Daily Parcel Reports",
    otherPct: "0%",
    lionexFeature: "Daily Parcel Reports",
    lionexAccent: "(By AI + Human)",
    lionexPct: "83%",
  },
  {
    otherFeature: "Fast Payments",
    otherPct: "55%",
    lionexFeature: "Fast Payments",
    lionexAccent: "",
    lionexPct: "91%",
  },
  {
    otherFeature: "AI Return Handler",
    otherPct: "0%",
    lionexFeature: "AI Return Handler",
    lionexAccent: "(By AI)",
    lionexPct: "90%",
  },
  {
    otherFeature: "WhatsApp Booking & Tracking",
    otherPct: "2%",
    lionexFeature: "WhatsApp Booking & Tracking",
    lionexAccent: "(By AI)",
    lionexPct: "100%",
  },
  {
    otherFeature: "Super Fast Replies",
    otherPct: "12%",
    lionexFeature: "Super Fast Replies",
    lionexAccent: "",
    lionexPct: "97%",
  },
  {
    otherFeature: "Shipper Live Notifications",
    otherPct: "0%",
    lionexFeature: "Shipper Live Notifications",
    lionexAccent: "(By AI)",
    lionexPct: "97%",
  },
  {
    otherFeature: "Consignee Live Notifications",
    otherPct: "0%",
    lionexFeature: "Consignee Live Notifications",
    lionexAccent: "(By AI)",
    lionexPct: "91%",
  },
  {
    otherFeature: "City Finder & Address Detection",
    otherPct: "4%",
    lionexFeature: "City Finder & Address Detection",
    lionexAccent: "(By AI)",
    lionexPct: "93%",
  },
  {
    otherFeature: "Best Courier Suggestions",
    otherPct: "0%",
    lionexFeature: "Best Courier Suggestions",
    lionexAccent: "(By AI)",
    lionexPct: "94%",
  },
  {
    otherFeature: "WhatsApp AI Support",
    otherPct: "3%",
    lionexFeature: "WhatsApp AI Support",
    lionexAccent: "(By AI + Human)",
    lionexPct: "89%",
  },
  {
    otherFeature: "Easy CRM Portal",
    otherPct: "17%",
    lionexFeature: "Easy CRM Portal",
    lionexAccent: "",
    lionexPct: "100%",
  },
  {
    otherFeature: "AI Growth Assistant",
    otherPct: "0%",
    lionexFeature: "AI Growth Assistant",
    lionexAccent: "",
    lionexPct: "83%",
  },
  {
    otherFeature: "WhatsApp Marketing Tools",
    otherPct: "0%",
    lionexFeature: "WhatsApp Marketing Tools",
    lionexAccent: "(By AI)",
    lionexPct: "92%",
  },
  {
    otherFeature: "Smart Booking Suggestions",
    otherPct: "0%",
    lionexFeature: "Smart Booking Suggestions",
    lionexAccent: "(By AI)",
    lionexPct: "93%",
  },
  {
    otherFeature: "Detect Fake Orders",
    otherPct: "9%",
    lionexFeature: "Detect Fake Orders",
    lionexAccent: "",
    lionexPct: "97%",
  },
  {
    otherFeature: "AI Team Manager",
    otherPct: "0%",
    lionexFeature: "AI Team Manager",
    lionexAccent: "(By AI)",
    lionexPct: "94%",
  },
  {
    otherFeature: "More Smart Tools",
    otherPct: "0%",
    lionexFeature: "More Smart Tools",
    lionexAccent: "",
    lionexPct: "100%",
  },
];

const lionexStatusText = {
  "Choose the Best Courier": "Always On",
  "Customer Support": "24/7 Support",
  "Auto Reattempt": "Automated",
};

const otherCourierStatusText = {
  "Choose the Best Courier": "Unavailable",
  "Customer Support": "Limited Support",
  "Auto Reattempt": "Manual / Limited",
};

const getLionexLabel = (feature) => lionexStatusText[feature] || "Fully Available";

const getOtherCourierLabel = (feature, pct) => {
  if (otherCourierStatusText[feature]) return otherCourierStatusText[feature];
  return parseInt(pct, 10) > 12 ? "Limited" : "Not Available";
};

const StatusCell = ({ ok, label }) => (
  <div className="flex min-h-[46px] items-center justify-center gap-2 rounded-[14px] border border-[#eef1f8] bg-white px-2 py-2 text-center shadow-[0_10px_24px_rgba(15,23,42,0.06)] min-[480px]:min-h-[52px] min-[480px]:gap-2.5 min-[480px]:px-3 min-[768px]:min-h-[68px] min-[768px]:px-4">
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[9px] shadow-[0_8px_18px_rgba(0,0,0,0.12)] min-[480px]:h-7 min-[480px]:w-7 min-[768px]:h-9 min-[768px]:w-9 ${
        ok
          ? "bg-gradient-to-br from-[#3ee58f] to-[#18b968]"
          : "bg-gradient-to-br from-[#ff7e6a] to-[#e34a3c]"
      }`}
    >
      {ok ? (
        <svg viewBox="0 0 16 16" className="h-3 w-3 min-[768px]:h-4 min-[768px]:w-4" fill="none">
          <path
            d="M3 8.5 6.2 11.5 13 4.5"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" className="h-3 w-3 min-[768px]:h-4 min-[768px]:w-4" fill="none">
          <path
            d="M4 4 12 12M12 4 4 12"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
    <span className="whitespace-nowrap font-['Rubik',sans-serif] text-[9px] font-medium leading-none text-[#23262f] min-[480px]:text-[10px] min-[768px]:text-[13px] lg:text-[15px]">
      {label}
    </span>
  </div>
);

const BusinessGrowthSection = () => {
  const [visibleRowsCount, setVisibleRowsCount] = useState(5);
  const isAllRowsVisible = visibleRowsCount >= comparisonRows.length;
  const visibleRows = comparisonRows.slice(0, visibleRowsCount);

  return (
    <section className="bg-white px-2 min-[480px]:px-3 md:px-5">
      <div className="w-full">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-['Rubik',sans-serif] text-[24px] font-bold leading-[1.08] tracking-[-0.03em] text-[#111111] min-[480px]:text-[28px] md:text-[38px] lg:text-[50px]">
            Why LionEx Drives Your
            <br />
            <span className="relative inline-block text-[#f78134]">
              <span className="absolute inset-0" />
              Business Growth?
            </span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-[16px] border border-[rgba(214,221,244,0.85)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,255,0.94))] shadow-[0_22px_50px_rgba(48,72,115,0.1)]">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] min-h-[72px] bg-[linear-gradient(90deg,#26107a_0%,#4c2dc8_45%,#56c8ff_70%,#6f8fb6_100%)] text-white">
            <div className="flex h-full items-center px-2 text-left font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight min-[480px]:px-3 min-[480px]:text-[11px] min-[768px]:px-5 min-[768px]:text-[16px] lg:text-[20px]">
              Smart Features
            </div>
            <div className="flex h-full items-center justify-center border-x border-white/10 px-2 text-center font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight min-[480px]:px-3 min-[480px]:text-[11px] min-[768px]:px-5 min-[768px]:text-[16px] lg:text-[20px]">
              LionEx Courier
            </div>
            <div className="flex h-full items-center justify-center px-2 text-center font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight min-[480px]:px-3 min-[480px]:text-[11px] min-[768px]:px-5 min-[768px]:text-[16px] lg:text-[20px]">
              Others
            </div>
          </div>

          <div className="grid gap-[2px] bg-[rgba(233,238,249,0.7)] p-[2px] min-[768px]:gap-[3px] min-[768px]:p-[3px]">
            {visibleRows.map((row) => (
              <div
                key={row.otherFeature}
                className="grid grid-cols-[1.4fr_1fr_1fr] min-h-[72px] items-stretch gap-[2px] rounded-[14px] bg-transparent"
              >
                <div className="flex h-full items-center bg-[linear-gradient(135deg,rgba(255,246,238,0.95),rgba(247,249,255,0.96))] px-2 py-2.5 min-[480px]:px-3 min-[768px]:px-5 min-[768px]:py-3">
                  <div className="flex h-full flex-wrap items-center gap-1.5 min-[768px]:gap-2">
                    <span className="max-w-full rounded-[14px] px-2 py-1.5 text-[9px] font-medium leading-[1.2] text-black min-[480px]:text-[10px] min-[768px]:px-3 min-[768px]:py-2 min-[768px]:text-[14px] lg:text-[16px]">
                      {row.lionexFeature}
                    </span>
                    {row.lionexAccent ? (
                      <button
                        type="button"
                        className="rounded-[14px] border border-[rgba(255,255,255,0.55)] bg-[linear-gradient(135deg,rgba(255,211,138,0.72),rgba(255,255,255,0.45)_52%,rgba(223,175,255,0.35)_100%)] px-2 py-1.5 font-['Rubik',sans-serif] text-[8px] font-semibold leading-none text-[#d97815] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_18px_rgba(237,171,80,0.2)] backdrop-blur-[10px] min-[480px]:text-[9px] min-[768px]:px-3 min-[768px]:py-2 min-[768px]:text-[12px]"
                      >
                        {row.lionexAccent.replace(/[()]/g, "")}
                      </button>
                    ) : null}
                  </div>
                </div>

                <div className="flex h-full items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,255,0.96))] px-1.5 py-1.5 min-[480px]:px-2 min-[480px]:py-2 min-[768px]:px-3 min-[768px]:py-3">
                  <StatusCell ok label={getLionexLabel(row.lionexFeature)} />
                </div>

                <div className="flex h-full items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,255,0.96))] px-1.5 py-1.5 min-[480px]:px-2 min-[480px]:py-2 min-[768px]:px-3 min-[768px]:py-3">
                  <StatusCell
                    ok={false}
                    label={getOtherCourierLabel(row.lionexFeature, row.otherPct)}
                  />
                </div>
              </div>
            ))}

            <div className="grid grid-cols-[1.4fr_1fr_1fr] items-stretch gap-[2px] rounded-[14px] bg-transparent">
              <button
                type="button"
                onClick={() =>
                  setVisibleRowsCount((prev) =>
                    isAllRowsVisible ? 5 : Math.min(prev + 5, comparisonRows.length)
                  )
                }
                className="col-span-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,255,0.96))] px-3 py-2.5 font-['Rubik',sans-serif] text-[10px] font-medium leading-none text-[#26107a] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:text-[#f78134] min-[480px]:min-h-[54px] min-[480px]:px-4 min-[480px]:text-[11px] min-[768px]:min-h-[68px] min-[768px]:px-5 min-[768px]:text-[14px] lg:text-[16px]"
              >
                <span>{isAllRowsVisible ? "Show Less" : "Show More"}</span>
                <svg
                  viewBox="0 0 16 16"
                  className={`h-3 w-3 transition-transform duration-300 min-[480px]:h-4 min-[480px]:w-4 min-[768px]:h-[18px] min-[768px]:w-[18px] ${
                    isAllRowsVisible ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                >
                  <path
                    d="M3.5 6 8 10.5 12.5 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowthSection;
