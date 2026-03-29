const comparisonRows = [
  {
    otherFeature: "Choose Any Best Courier",
    otherPct: "0%",
    lionexFeature: "Choose Any Best Courier",
    lionexAccent: "(By Ai)",
    lionexPct: "100%",
  },
  {
    otherFeature: "Customer Support",
    otherPct: "35%",
    lionexFeature: "Customer Support",
    lionexAccent: "(Ai + Human)",
    lionexPct: "96%",
  },
  {
    otherFeature: "Auto Reattempt",
    otherPct: "0%",
    lionexFeature: "Auto Reattempt",
    lionexAccent: "(By Ai + Human)",
    lionexPct: "89%",
  },
  {
    otherFeature: "Daily Parcel Reports (Auto)",
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
    otherFeature: "Booking & Tracking on WhatsApp",
    otherPct: "2%",
    lionexFeature: "Booking & Tracking on WhatsApp",
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
    otherFeature: "Shippers' Live Order Notifications",
    otherPct: "0%",
    lionexFeature: "Shippers' Live Order Notifications",
    lionexAccent: "(By AI)",
    lionexPct: "97%",
  },
  {
    otherFeature: "Consignee Live Order Notifications",
    otherPct: "0%",
    lionexFeature: "Consignee Live Order Notifications",
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
    otherFeature: "Easy-to-Use CRM Portal",
    otherPct: "17%",
    lionexFeature: "Easy-to-Use CRM Portal",
    lionexAccent: "",
    lionexPct: "100%",
  },
  {
    otherFeature: "AI Business Growth Assistant",
    otherPct: "0%",
    lionexFeature: "AI Business Growth Assistant",
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
    otherFeature: "Auto Detect Fake Consignees & Orders",
    otherPct: "9%",
    lionexFeature: "Auto Detect Fake Consignees & Orders",
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
    otherFeature: "Many More Smart & Innovative Tools",
    otherPct: "0%",
    lionexFeature: "Many More Smart & Innovative Tools",
    lionexAccent: "",
    lionexPct: "100%",
  },
];

const lionexStatusText = {
  "Choose Any Best Courier": "Fully Available",
  "Customer Support": "24/7 Smart Support",
  "Auto Reattempt": "Automated",
};

const otherCourierStatusText = {
  "Choose Any Best Courier": "Not Available",
  "Customer Support": "Limited Support",
  "Auto Reattempt": "Manual / Limited",
};

const getLionexLabel = (feature) => lionexStatusText[feature] || "Fully Available";

const getOtherCourierLabel = (feature, pct) => {
  if (otherCourierStatusText[feature]) return otherCourierStatusText[feature];
  return parseInt(pct, 10) > 12 ? "Limited" : "Not Available";
};

const StatusCell = ({ ok, label }) => (
  <div className="flex min-h-[54px] items-center gap-2 rounded-[16px] border border-[#eef1f8] bg-white px-3 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.07)] min-[480px]:min-h-[62px] min-[480px]:gap-3 min-[480px]:px-4 min-[768px]:min-h-[82px] min-[768px]:px-5">
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.14)] min-[480px]:h-8 min-[480px]:w-8 min-[768px]:h-10 min-[768px]:w-10 ${
        ok
          ? "bg-gradient-to-br from-[#3ee58f] to-[#18b968]"
          : "bg-gradient-to-br from-[#ff7e6a] to-[#e34a3c]"
      }`}
    >
      {ok ? (
        <svg
          viewBox="0 0 16 16"
          className="h-3 w-3 min-[480px]:h-4 min-[480px]:w-4 min-[768px]:h-[18px] min-[768px]:w-[18px]"
          fill="none"
        >
          <path
            d="M3 8.5 6.2 11.5 13 4.5"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 16 16"
          className="h-3 w-3 min-[480px]:h-4 min-[480px]:w-4 min-[768px]:h-[18px] min-[768px]:w-[18px]"
          fill="none"
        >
          <path
            d="M4 4 12 12M12 4 4 12"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
    <span className="font-['Rubik',sans-serif] text-[10px] font-medium leading-[1.1] text-[#23262f] min-[480px]:text-[12px] min-[768px]:text-[16px] lg:text-[18px]">
      {label}
    </span>
  </div>
);

const BusinessGrowthSection = () => {
  return (
    <section className="bg-white px-2 py-[30px] min-[480px]:px-3 md:px-5">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="font-['Rubik',sans-serif] text-[24px] font-bold leading-[1.08] tracking-[-0.03em] text-[#111111] min-[480px]:text-[28px] md:text-[40px] lg:text-[56px]">
            Why LionEx Powers Your
            <br />
            <span className="relative inline-block text-[#f78134]">
              <span className="absolute inset-0" />
              Business Growth?
            </span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[rgba(214,221,244,0.85)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,255,0.94))] shadow-[0_28px_60px_rgba(48,72,115,0.12)]">
          <div className="grid grid-cols-[1.3fr_1fr_1fr] bg-[linear-gradient(90deg,#26107a_0%,#4c2dc8_45%,#56c8ff_70%,#6f8fb6_100%)] text-white">
            <div className="px-3 py-3 text-left font-['Rubik',sans-serif] text-[10px] font-semibold min-[480px]:px-4 min-[480px]:text-[12px] min-[768px]:px-7 min-[768px]:py-6 min-[768px]:text-[18px] lg:text-[22px]">
              Smart Features
            </div>
            <div className="border-x border-white/10 px-3 py-3 text-center font-['Rubik',sans-serif] text-[10px] font-semibold min-[480px]:px-4 min-[480px]:text-[12px] min-[768px]:px-7 min-[768px]:py-6 min-[768px]:text-[18px] lg:text-[22px]">
              LionEx
            </div>
            <div className="px-3 py-3 text-center font-['Rubik',sans-serif] text-[10px] font-semibold min-[480px]:px-4 min-[480px]:text-[12px] min-[768px]:px-7 min-[768px]:py-6 min-[768px]:text-[18px] lg:text-[22px]">
              Other Couriers
            </div>
          </div>

          <div className="grid gap-[2px] bg-[rgba(233,238,249,0.7)] p-[2px] min-[480px]:gap-[3px] min-[480px]:p-[3px] min-[768px]:gap-[4px] min-[768px]:p-[4px]">
            {comparisonRows.map((row) => (
              <div
                key={row.otherFeature}
                className="grid grid-cols-[1.3fr_1fr_1fr] items-stretch gap-[2px] rounded-[16px] bg-transparent"
              >
                <div className="flex items-center bg-[linear-gradient(135deg,rgba(255,246,238,0.95),rgba(247,249,255,0.96))] px-3 py-3 min-[480px]:px-4 min-[768px]:px-7 min-[768px]:py-4">
                  <div className="flex flex-wrap items-center gap-2 min-[768px]:gap-3">
                    <span className="rounded-[16px] px-3 py-2 text-[10px] font-medium leading-[1.15] text-black min-[480px]:text-[12px] min-[768px]:px-4 min-[768px]:py-3 min-[768px]:text-[16px] lg:text-[18px]">
                      {row.lionexFeature}
                    </span>
                    {row.lionexAccent ? (
                      <button
                        type="button"
                        className="rounded-[16px] border border-[rgba(255,255,255,0.55)] bg-[linear-gradient(135deg,rgba(255,211,138,0.72),rgba(255,255,255,0.45)_52%,rgba(223,175,255,0.35)_100%)] px-3 py-[7px] font-['Rubik',sans-serif] text-[9px] font-semibold leading-none text-[#d97815] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(237,171,80,0.25)] backdrop-blur-[10px] min-[480px]:text-[10px] min-[768px]:px-4 min-[768px]:py-[10px] min-[768px]:text-[14px]"
                      >
                        {row.lionexAccent.replace(/[()]/g, "")}
                      </button>
                    ) : null}
                  </div>
                </div>

                <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,255,0.96))] px-2 py-2 min-[480px]:px-3 min-[480px]:py-3 min-[768px]:px-4 min-[768px]:py-4">
                  <StatusCell ok label={getLionexLabel(row.lionexFeature)} />
                </div>

                <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,255,0.96))] px-2 py-2 min-[480px]:px-3 min-[480px]:py-3 min-[768px]:px-4 min-[768px]:py-4">
                  <StatusCell
                    ok={false}
                    label={getOtherCourierLabel(row.lionexFeature, row.otherPct)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowthSection;
