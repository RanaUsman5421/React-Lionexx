import PageShell from "../components/PageShell";
import { FileText, CheckCircle, Shield, Truck, CreditCard, Scale } from "lucide-react";

const TermsConditions = () => {
  return (
    <PageShell title="Terms & Conditions" subtitle="Standard terms governing your use of Lionex Courier services for reliable and secure shipping across Pakistan.">
      <section className="relative block bg-white py-[85px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="animate-fade-in opacity-0 animate-delay-200 data-[state=visible]:opacity-100">
              <div className="flex items-start gap-4 mb-8">
                <FileText className="h-12 w-12 text-[#f78134] mt-1 flex-shrink-0" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold font-rubik text-[#062f3a] mb-4">Terms & Conditions</h1>
                  <p className="text-xl text-gray-600 leading-relaxed">Welcome to Lionex Courier. These terms govern your shipments, payments, and service expectations.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Effective Date: October 1, 2024. By using Lionex services, you agree to these terms.</p>
              </div>
            </div>

            {/* Services */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in opacity-0 data-[state=visible]:opacity-100 animate-delay-400">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <Truck className="h-10 w-10 text-[#f78134] mt-1" />
                  <h2 className="text-3xl font-bold font-rubik text-[#062f3a]">1. Services</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>We provide nationwide parcel delivery, COD collection, tracking, and related logistics.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Service levels: Standard, Express, Overnight based on zones and weight.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Prohibited items: Perishable goods, hazardous materials, valuables over PKR 50,000 without declaration.</span></li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <CreditCard className="h-10 w-10 text-[#f78134] mt-1" />
                  <h2 className="text-3xl font-bold font-rubik text-[#062f3a]">2. Payments & COD</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Prepaid or COD; COD collections remitted weekly minus 2% fee.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Failed COD: Return shipping at sender cost.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Disputed collections held pending resolution.</span></li>
                </ul>
              </div>
            </div>

            {/* Liability */}
            <div className="animate-fade-in opacity-0 data-[state=visible]:opacity-100 animate-delay-600">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="h-10 w-10 text-[#f78134] mt-1" />
                  <h2 className="text-3xl font-bold font-rubik text-[#062f3a]">3. Liability & Claims</h2>
                </div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>Maximum liability PKR 10,000 per shipment or declared value (whichever lower). Claims within 7 days with proof.</p>
                  <ul className="list-disc pl-8 space-y-2 mt-4">
                    <li>Delays: No liability unless due to gross negligence.</li>
                    <li>Loss/Damage: Subject to inspection; insurance available extra.</li>
                    <li>Force Majeure: Strikes, weather, etc. exempt.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Termination & Law */}
            <div className="grid lg:grid-cols-2 gap-8 animate-fade-in opacity-0 data-[state=visible]:opacity-100 animate-delay-800">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <Scale className="h-10 w-10 text-[#f78134] mt-1" />
                  <h2 className="text-3xl font-bold font-rubik text-[#062f3a]">4. Termination</h2>
                </div>
                <p className="text-gray-700 mb-4">We may suspend services for unpaid invoices, prohibited items, or abuse. You may terminate anytime.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <h2 className="text-3xl font-bold font-rubik text-[#062f3a] mb-6">5. Governing Law</h2>
                <p className="text-gray-700">Lahore courts, Pakistan law applies. Disputes resolved amicably first.</p>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center pt-12 border-t border-gray-200 animate-fade-in opacity-0 data-[state=visible]:opacity-100">
              <p className="text-xl font-semibold text-gray-700 mb-4">Questions? Contact <a href="mailto:support@lionexcourier.com" className="text-[#f78134] hover:underline font-bold">support@lionexcourier.com</a></p>
              <p className="text-gray-600">Last updated: October 2024</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default TermsConditions;

