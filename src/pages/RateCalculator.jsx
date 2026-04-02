import { useState } from "react";
import PageShell from "../components/PageShell";
import ThmBtn from "../components/thmBtn";
import rateCalculatorShape from "../assets/images/shapes/counter-one-bg-shape.png";

const shipmentRates = {
  documents: 150,
  parcel: 200,
  cargo: 350,
  fragile: 450,
};

const serviceMultipliers = {
  standard: 1.0,
  express: 1.5,
  overnight: 2.5,
  international: 3.0,
};

const deliveryTimes = {
  standard: "3-5 Business Days",
  express: "1-2 Business Days",
  overnight: "Next Day",
  international: "5-10 Business Days",
};

const featureItems = [
  {
    icon: "icon-tracking",
    title: "Real-Time Tracking",
    text: "Track your shipment in real-time with our advanced AI-powered tracking system",
  },
  {
    icon: "icon-delivery-man",
    title: "Fast Delivery",
    text: "Express delivery options to get your package delivered on time, every time",
  },
  {
    icon: "icon-shield",
    title: "Secure Handling",
    text: "Your packages are insured and handled with maximum care and security",
  },
];

const RateCalculator = () => {
  const [formData, setFormData] = useState({
    shipmentType: "",
    service: "",
    origin: "",
    destination: "",
    weight: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { shipmentType, service, origin, destination, weight } = formData;
    if (!shipmentType || !service || !origin || !destination || !weight) return;

    const baseRate = shipmentRates[shipmentType] || 200;
    const multiplier = serviceMultipliers[service] || 1;
    const effectiveWeight = Math.max(Number(weight), 1);
    const price = Math.round(baseRate * effectiveWeight * multiplier);

    setResult({
      price: price.toLocaleString(),
      deliveryTime: deliveryTimes[service],
    });
  };

  return (
    <PageShell
      title="Rate Calculator"
      subtitle="Get an estimated delivery cost in seconds."
    >
      <section className="relative z-[1] block overflow-hidden bg-[#f7f8fa] py-[80px] lg:py-[85px]">
        <div
          className="absolute inset-0 -z-[1] bg-center bg-no-repeat opacity-[0.03]"
          style={{
            backgroundImage: `url(${rateCalculatorShape})`,
          }}
        ></div>

        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-10 xl:px-[15px]">
          <div className="relative mx-auto max-w-[800px] overflow-visible rounded-[6px] bg-white px-5 py-[30px] shadow-[0_20px_60px_rgba(6,47,58,0.08)] min-[576px]:px-10 min-[576px]:py-[40px] lg:px-[50px] lg:py-[60px]">
            <div className="absolute left-0 right-0 top-0 h-1 rounded-t-[10px] bg-[linear-gradient(90deg,#f47f33,#f9a65a)]"></div>
            <div className="absolute -right-[20%] top-[-50%] z-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(244,127,51,0.08)_0%,transparent_70%)]"></div>

            <div className="relative z-[1] mx-auto mb-[30px] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#f47f33,#e46a1f)] shadow-[0_15px_40px_rgba(244,127,51,0.3)]">
              <div className="absolute inset-[-8px] animate-[spin_20s_linear_infinite_reverse] rounded-full border-[3px] border-dashed border-[#f47f33]"></div>
              <span className="icon-delivery-man relative text-[40px] text-white"></span>
            </div>

            <div className="relative z-[1] mb-[50px] text-center">
              <h2 className="mb-[15px] font-['Rubik',sans-serif] text-[24px] font-bold text-[#062f3a] min-[576px]:text-[28px] lg:text-[36px]">
                Calculate Your <span className="text-[#f47f33]">Shipping Rate</span>
              </h2>
              <p className="text-[16px] text-[#6c7176]">
                Get instant shipping cost estimates for your parcel
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-[1]">
              <div className="mb-10 grid grid-cols-1 gap-[25px] lg:grid-cols-2 lg:gap-[30px]">
                <div className="relative z-[1] lg:col-span-1">
                  <div className="absolute left-[15px] top-[35px] z-[2] flex h-[45px] w-[45px] items-center justify-center rounded-[6px] bg-[linear-gradient(135deg,#f47f33,#e46a1f)] transition-all duration-300 min-[576px]:left-5 min-[576px]:top-[38px] min-[576px]:h-[50px] min-[576px]:w-[50px]">
                    <span className="icon-box text-[18px] text-white min-[576px]:text-[22px]"></span>
                  </div>
                  <div className="relative z-[2] pl-[70px] min-[576px]:pl-20">
                    <label
                      htmlFor="shipmentType"
                      className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.5px] text-[#062f3a]"
                    >
                      Shipment Type
                    </label>
                    <select
                      id="shipmentType"
                      name="shipmentType"
                      value={formData.shipmentType}
                      onChange={handleChange}
                      required
                      className="block h-[55px] w-full appearance-none rounded-[6px] border-2 border-[#e8e8e8] bg-white bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22%3E%3Cpath fill=%22%23585b6b%22 d=%22M6 8L1 3h10z%22/%3E%3C/svg%3E')] bg-[position:right_20px_center] bg-no-repeat px-[15px] pr-[50px] font-['Poppins',sans-serif] text-[15px] text-[#6c7176] outline-none transition-all duration-300 focus:border-[#f47f33] focus:shadow-[0_10px_30px_rgba(244,127,51,0.1)] min-[576px]:h-[60px] min-[576px]:px-[25px]"
                     >
                      <option value="">Select Shipment Type</option>
                      <option value="documents">Documents</option>
                      <option value="parcel">Parcel</option>
                      <option value="cargo">Cargo</option>
                      <option value="fragile">Fragile Items</option>
                    </select>
                  </div>
                  <div className="absolute bottom-0 left-[70px] right-0 h-[3px] rounded-b-[15px] bg-[linear-gradient(90deg,#f47f33,#f9a65a)] min-[576px]:left-20"></div>
                </div>

                <div className="relative z-[1] lg:col-span-1">
                  <div className="absolute left-[15px] top-[35px] z-[2] flex h-[45px] w-[45px] items-center justify-center rounded-[6px] bg-[linear-gradient(135deg,#f47f33,#e46a1f)] transition-all duration-300 min-[576px]:left-5 min-[576px]:top-[38px] min-[576px]:h-[50px] min-[576px]:w-[50px]">
                    <span className="icon-truck text-[18px] text-white min-[576px]:text-[22px]"></span>
                  </div>
                  <div className="relative z-[2] pl-[70px] min-[576px]:pl-20">
                    <label
                      htmlFor="service"
                      className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.5px] text-[#062f3a]"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="block h-[55px] w-full appearance-none rounded-[6px] border-2 border-[#e8e8e8] bg-white bg-[position:right_20px_center] bg-no-repeat px-[15px] pr-[50px] font-['Poppins',sans-serif] text-[15px] text-[#6c7176] outline-none transition-all duration-300 focus:border-[#f47f33] focus:shadow-[0_10px_30px_rgba(244,127,51,0.1)] min-[576px]:h-[60px] min-[576px]:px-[25px]"
                    >
                      <option value="">Select Service</option>
                      <option value="standard">Standard Delivery (3-5 Days)</option>
                      <option value="express">Express Delivery (1-2 Days)</option>
                      <option value="overnight">Overnight Delivery</option>
                      <option value="international">International Shipping</option>
                    </select>
                  </div>
                  <div className="absolute bottom-0 left-[70px] right-0 h-[3px] rounded-b-[15px] bg-[linear-gradient(90deg,#f47f33,#f9a65a)] min-[576px]:left-20"></div>
                </div>

                <div className="relative z-[1] lg:col-span-1">
                  <div className="absolute left-[15px] top-[35px] z-[2] flex h-[45px] w-[45px] items-center justify-center rounded-[6px] bg-[linear-gradient(135deg,#f47f33,#e46a1f)] transition-all duration-300 min-[576px]:left-5 min-[576px]:top-[38px] min-[576px]:h-[50px] min-[576px]:w-[50px]">
                    <span className="icon-location1 text-[18px] text-white min-[576px]:text-[22px]"></span>
                  </div>
                  <div className="relative z-[2] pl-[70px] min-[576px]:pl-20">
                    <label
                      htmlFor="origin"
                      className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.5px] text-[#062f3a]"
                    >
                      Origin City
                    </label>
                    <input
                      type="text"
                      id="origin"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      placeholder="Enter origin city"
                      required
                      className="block h-[55px] w-full rounded-[6px] border-2 border-[#e8e8e8] bg-white px-[15px] pr-[50px] font-['Poppins',sans-serif] text-[15px] text-[#6c7176] outline-none transition-all duration-300 placeholder:text-[#a0a0a0] focus:border-[#f47f33] focus:shadow-[0_10px_30px_rgba(244,127,51,0.1)] min-[576px]:h-[60px] min-[576px]:px-[25px]"
                    />
                  </div>
                  <div className="absolute bottom-0 left-[70px] right-0 h-[3px] rounded-b-[15px] bg-[linear-gradient(90deg,#f47f33,#f9a65a)] min-[576px]:left-20"></div>
                </div>

                <div className="relative z-[1] lg:col-span-1">
                  <div className="absolute left-[15px] top-[35px] z-[2] flex h-[45px] w-[45px] items-center justify-center rounded-[6px] bg-[linear-gradient(135deg,#f47f33,#e46a1f)] transition-all duration-300 min-[576px]:left-5 min-[576px]:top-[38px] min-[576px]:h-[50px] min-[576px]:w-[50px]">
                    <span className="icon-plane text-[18px] text-white min-[576px]:text-[22px]"></span>
                  </div>
                  <div className="relative z-[2] pl-[70px] min-[576px]:pl-20">
                    <label
                      htmlFor="destination"
                      className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.5px] text-[#062f3a]"
                    >
                      Destination City
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Enter destination city"
                      required
                      className="block h-[55px] w-full rounded-[6px] border-2 border-[#e8e8e8] bg-white px-[15px] pr-[50px] font-['Poppins',sans-serif] text-[15px] text-[#6c7176] outline-none transition-all duration-300 placeholder:text-[#a0a0a0] focus:border-[#f47f33] focus:shadow-[0_10px_30px_rgba(244,127,51,0.1)] min-[576px]:h-[60px] min-[576px]:px-[25px]"
                    />
                  </div>
                  <div className="absolute bottom-0 left-[70px] right-0 h-[3px] rounded-b-[15px] bg-[linear-gradient(90deg,#f47f33,#f9a65a)] min-[576px]:left-20"></div>
                </div>

                <div className="relative z-[1] lg:col-span-2">
                  <div className="absolute left-[15px] top-[35px] z-[2] flex h-[45px] w-[45px] items-center justify-center rounded-[6px] bg-[linear-gradient(135deg,#f47f33,#e46a1f)] transition-all duration-300 min-[576px]:left-5 min-[576px]:top-[38px] min-[576px]:h-[50px] min-[576px]:w-[50px]">
                    <span className="icon-box text-[18px] text-white min-[576px]:text-[22px]"></span>
                  </div>
                  <div className="relative z-[2] pl-[70px] min-[576px]:pl-20">
                    <label
                      htmlFor="weight"
                      className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.5px] text-[#062f3a]"
                    >
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="Enter weight in kg"
                      min="0.1"
                      step="0.1"
                      required
                      className="block h-[55px] w-full rounded-[6px] border-2 border-[#e8e8e8] bg-white px-[15px] pr-[50px] font-['Poppins',sans-serif] text-[15px] text-[#6c7176] outline-none transition-all duration-300 placeholder:text-[#a0a0a0] focus:border-[#f47f33] focus:shadow-[0_10px_30px_rgba(244,127,51,0.1)] min-[576px]:h-[60px] min-[576px]:px-[25px]"
                    />
                  </div>
                  <div className="absolute bottom-0 left-[70px] right-0 h-[3px] rounded-b-[15px] bg-[linear-gradient(90deg,#f47f33,#f9a65a)] min-[576px]:left-20"></div>
                </div>
              </div>

              <div className="text-center">
                <ThmBtn
                  type="submit"
                  className="rounded-[50px] bg-[linear-gradient(135deg,#f47f33,#e46a1f)] px-[30px] py-4 text-[17px] font-semibold min-[576px]:px-[50px] [&>span]:h-10 [&>span]:w-10 [&>span]:bg-[rgba(255,255,255,0.2)] hover:[&>span]:rotate-[360deg] hover:[&>span]:bg-white hover:[&>span]:text-[#f47f33]"
                  icon="icon-delivery-man"
                >
                  Calculate Rate
                </ThmBtn>
              </div>
            </form>

            {result && (
              <div className="relative z-[1] mt-[50px] overflow-hidden rounded-[6px] bg-[linear-gradient(135deg,#062f3a,#0c4353)] p-10">
                <div className="absolute -right-[10%] top-[-50%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(244,127,51,0.2)_0%,transparent_70%)]"></div>
                <div className="absolute -left-[10%] bottom-[-30%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(244,127,51,0.15)_0%,transparent_70%)]"></div>

                <div className="relative z-[1] flex flex-col items-center gap-[30px] text-center lg:flex-row lg:text-left">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f47f33,#f9a65a)] shadow-[0_10px_30px_rgba(244,127,51,0.4)]">
                    <span className="icon-check text-[35px] text-white"></span>
                  </div>

                  <div className="flex-1">
                    <h4 className="mb-[10px] text-[18px] font-semibold uppercase tracking-[1px] text-[rgba(255,255,255,0.7)]">
                      Estimated Shipping Cost
                    </h4>
                    <div className="mb-[10px] flex items-baseline justify-center gap-[10px] lg:justify-start">
                      <span className="text-[20px] font-semibold text-[#f47f33]">
                        PKR
                      </span>
                      <span className="text-[36px] font-bold leading-none text-white min-[576px]:text-[48px]">
                        {result.price}
                      </span>
                    </div>
                    <p className="text-[15px] text-[rgba(255,255,255,0.7)]">
                      Delivery Time:{" "}
                      <span className="font-semibold text-[#f9a65a]">
                        {result.deliveryTime}
                      </span>
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-5 top-5 h-[10px] w-[10px] animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-[#f47f33] opacity-50"></div>
                    <div className="absolute right-[30px] top-1/2 h-[15px] w-[15px] animate-[pulse_2s_ease-in-out_0.5s_infinite] rounded-full bg-[#f47f33] opacity-50"></div>
                    <div className="absolute bottom-5 right-5 h-[10px] w-[10px] animate-[pulse_2s_ease-in-out_1s_infinite] rounded-full bg-[#f47f33] opacity-50"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-10 xl:px-[15px]">
          <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
            {featureItems.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[6px] bg-white px-5 py-10 text-center shadow-[0_10px_50px_rgba(6,47,58,0.05)] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_60px_rgba(6,47,58,0.1)] min-[576px]:px-[30px] min-[576px]:py-[50px]"
              >
                <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#f47f33,#f9a65a)] transition-transform duration-300 group-hover:scale-x-100"></div>
                <div className="mx-auto mb-[25px] flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(244,127,51,0.1),rgba(244,127,51,0.05))] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:bg-[linear-gradient(135deg,#f47f33,#e46a1f)]">
                  <span
                    className={`${feature.icon} text-[40px] text-[#f47f33] transition-colors duration-300 group-hover:text-white`}
                  ></span>
                </div>
                <h3 className="mb-[15px] font-['Rubik',sans-serif] text-[22px] font-bold text-[#062f3a]">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-[26px] text-[#6c7176]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default RateCalculator;
