const pages = {
  about: {
    title: "About Lionex",
    subtitle:
      "We blend reliable courier networks with smart automation to keep Pakistan moving.",
    sections: [
      {
        title: "Our Story",
        body:
          "Lionex started as a tech-forward logistics team focused on dependable delivery and transparent tracking.",
        bullets: [
          "Service-first operations across major cities",
          "Real-time visibility for shippers and customers",
          "Safety, compliance, and accountability as defaults",
        ],
      },
      {
        title: "What We Believe",
        body:
          "Great logistics is a promise kept. We use data and people together to keep that promise.",
        bullets: [
          "Fast handoffs between hubs",
          "Proactive support for exceptions",
          "Continuous improvement through feedback",
        ],
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "Built for growth: local, nationwide, and eCommerce delivery.",
    sections: [
      {
        title: "Courier & Parcel",
        body:
          "Daily pickup and last-mile delivery with route optimization and proof-of-delivery.",
        bullets: [
          "Nationwide coverage",
          "Cash on delivery support",
          "Same and next day options",
        ],
      },
      {
        title: "eCommerce Fulfillment",
        body:
          "Storage, pick, pack, and dispatch workflows designed for online sellers.",
        bullets: ["Inventory visibility", "Batch processing", "Returns handling"],
      },
    ],
  },
  pricing: {
    title: "Pricing",
    subtitle: "Transparent rates with volume-friendly tiers.",
    sections: [
      {
        title: "How We Price",
        body:
          "Rates are based on distance, service speed, and parcel weight.",
        bullets: [
          "No hidden fuel surcharges",
          "Discounts for high-volume merchants",
          "Custom enterprise contracts",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Selected logistics programs and client launches.",
    sections: [
      {
        title: "Operational Rollouts",
        body:
          "From new regions to seasonal peaks, we scale safely and quickly.",
        bullets: ["Hub launch support", "Route planning", "Last-mile training"],
      },
    ],
  },
  "project-details": {
    title: "Project Details",
    subtitle: "Deep dives into our delivery programs.",
    sections: [
      {
        title: "Scope",
        body:
          "We align service design, staffing, and tracking to each client’s needs.",
        bullets: ["Dedicated lanes", "Custom SLAs", "Weekly reporting"],
      },
    ],
  },
  blog: {
    title: "Blog",
    subtitle: "Insights on logistics, last-mile delivery, and automation.",
    sections: [],
  },
  "blog-details": {
    title: "Blog Details",
    subtitle: "Practical guidance for modern delivery teams.",
    sections: [
      {
        title: "Key Takeaways",
        body:
          "Focus on predictable ETAs, clear communication, and continuous route refinement.",
        bullets: [
          "Set expectations early",
          "Track exceptions in real time",
          "Automate repetitive workflows",
        ],
      },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "Tell us about your delivery needs.",
    sections: [
      {
        title: "Support",
        body: "We reply quickly on weekdays during business hours.",
        bullets: ["Phone and email support", "Dedicated account managers"],
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Quick answers to common shipping questions.",
    sections: [],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "Feedback from merchants and partners.",
    sections: [],
  },
  tracking: {
    title: "Tracking",
    subtitle: "Track your shipment in seconds.",
    sections: [],
  },
  login: {
    title: "Login",
    subtitle: "Access your Lionex account.",
    sections: [],
  },
  "sign-up": {
    title: "Create Account",
    subtitle: "Join Lionex and start shipping today.",
    sections: [],
  },
  "rateCalculator": {
    title: "Rate Calculator",
    subtitle: "Estimate delivery costs quickly.",
    sections: [],
  },
  "nation-wide": {
    title: "Nationwide Delivery",
    subtitle: "Reliable delivery across Pakistan.",
    sections: [
      {
        title: "Coverage",
        body: "Major cities and growing regional networks.",
        bullets: ["Daily dispatches", "Secure handling", "Status updates"],
      },
    ],
  },
  "cash-on-delivery": {
    title: "Cash On Delivery",
    subtitle: "Collect payments at delivery with confidence.",
    sections: [
      {
        title: "Collections",
        body: "Transparent reconciliation and scheduled payouts.",
        bullets: ["COD tracking", "Weekly settlements", "Fraud safeguards"],
      },
    ],
  },
  "ecommerce-order-fullfillment": {
    title: "eCommerce Fulfillment",
    subtitle: "Storage, packing, and shipping under one roof.",
    sections: [
      {
        title: "Warehouse Operations",
        body: "Streamlined stock receiving and order processing.",
        bullets: ["SKU scanning", "Batch pick lists", "Returns handling"],
      },
    ],
  },
  "3pl-services": {
    title: "3PL Services",
    subtitle: "Flexible logistics for growing businesses.",
    sections: [
      {
        title: "Third-Party Logistics",
        body: "Outsource operations and keep full visibility.",
        bullets: ["Dedicated lanes", "Custom SLAs", "Analytics reporting"],
      },
    ],
  },
  "associated-delivery": {
    title: "Associated Delivery",
    subtitle: "Partner delivery routes optimized for scale.",
    sections: [
      {
        title: "Partner Network",
        body: "Trusted carriers with shared standards.",
        bullets: ["SLA alignment", "Shared tracking", "Quality audits"],
      },
    ],
  },
  "cargo-service": {
    title: "Cargo Service",
    subtitle: "Bulk movement for large shipments.",
    sections: [
      {
        title: "Heavy Freight",
        body: "Secure handling and scheduled line-haul.",
        bullets: ["Flexible loads", "Loading safety", "Delivery receipts"],
      },
    ],
  },
  detain: {
    title: "Detain Service",
    subtitle: "Controlled holding for urgent reroutes.",
    sections: [
      {
        title: "Holding Options",
        body: "Pause and release shipments on request.",
        bullets: ["Secure storage", "Priority release", "Customer alerts"],
      },
    ],
  },
  overland: {
    title: "Overland Service",
    subtitle: "Reliable ground transport between regions.",
    sections: [
      {
        title: "Line Haul",
        body: "Optimized routes for predictable delivery windows.",
        bullets: ["Fuel efficient lanes", "Cross-dock hubs", "Live tracking"],
      },
    ],
  },
  overnight: {
    title: "Overnight Service",
    subtitle: "Next-day delivery for time-sensitive parcels.",
    sections: [
      {
        title: "Priority Handling",
        body: "Early cut-offs and express sorting.",
        bullets: ["Night runs", "Guaranteed windows", "Proof of delivery"],
      },
    ],
  },
  "smart-ai-service": {
    title: "Smart AI Service",
    subtitle: "Automation that improves routing and response time.",
    sections: [
      {
        title: "Automation",
        body: "AI-assisted decisions for faster fulfillment.",
        bullets: ["Route optimization", "Demand forecasting", "Chat support"],
      },
    ],
  },
  "warehouse-facility": {
    title: "Warehouse Facility",
    subtitle: "Secure storage with modern fulfillment flow.",
    sections: [
      {
        title: "Operations",
        body: "Barcode tracking and inventory accuracy.",
        bullets: ["Climate control", "SKU tracking", "Secure access"],
      },
    ],
  },
  "startup-business": {
    title: "Startup Business",
    subtitle: "Logistics designed for early-stage teams.",
    sections: [
      {
        title: "Launch Support",
        body: "Simple onboarding and flexible pricing.",
        bullets: ["Low minimums", "Growth-friendly plans", "Fast setup"],
      },
    ],
  },
  "index-dark": {
    title: "Home Dark",
    subtitle: "Alternative dark-style home preview.",
    sections: [
      {
        title: "Preview",
        body: "This route mirrors the dark home concept from the template.",
        bullets: ["Same routes", "Same content", "Different mood"],
      },
    ],
  },
};

export default pages;
