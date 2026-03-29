import React from 'react'

const solutions = [
  {
    title: "Nationwide Delivery",
    desc: "Fast delivery across Pakistan",
    Icon: "icon-truck",
  },
  {
    title: "Cash on Delivery",
    desc: "Secure payment collection",
    Icon: "icon-wallet",
  },
  {
    title: "E-Commerce Delivery",
    desc: "Optimized for online stores",
    Icon: "icon-shopping-bag",
  },
  {
    title: "3PL Fulfillment",
    desc: "Complete warehouse solution",
    Icon: "icon-warehouse",
  },
  {
    title: "Overnight Service",
    desc: "Next day delivery guarantee",
    Icon: "icon-zap",
  },
  {
    title: "Smart AI Features",
    desc: "Route optimization + tracking",
    Icon: "icon-bolt",
  },
];

const SolutionSec = () => {
  return (
    <section className="py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Provide Efficient Logistics{" "}
            <span className="text-lionex-primary">Solutions</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {solutions.map((service) => (
              <div
                key={service.title}
                className="group cursor-pointer p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-orange-200 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="text-4xl mb-6 text-lionex-primary">
                  <span className={`${service.Icon} inline-block text-[36px]`} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-lionex-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <button className="flex items-center gap-2 text-lionex-primary font-semibold hover:text-orange-600 transition-colors">
                  Read More{" "}
                  <span className="icon-right-arrow w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default SolutionSec

