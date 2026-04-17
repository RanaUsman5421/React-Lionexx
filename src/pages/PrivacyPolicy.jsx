import PageShell from "../components/PageShell";
import { ShieldCheck, User, Lock, Share, Cookie, Key } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <PageShell title="Privacy Policy" subtitle="Committed to protecting your personal data and shipment information with secure practices.">
      <section className="relative block bg-white py-[85px]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="animate-fade-in opacity-0 data-[state=visible]:opacity-100">
              <div className="flex items-start gap-4 mb-8">
                <ShieldCheck className="h-12 w-12 text-[#f78134] mt-1 flex-shrink-0" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold font-rubik text-[#062f3a] mb-4">Privacy Policy</h1>
                  <p className="text-xl text-gray-600 leading-relaxed">Lionex Courier respects your privacy. This policy explains data handling for tracking, shipments, and accounts.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Effective: October 1, 2024. Applies to website, app, and services.</p>
              </div>
            </div>

            {/* Data Collected */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in opacity-0 data-[state=visible]:opacity-100 animate-delay-200">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <User className="h-10 w-10 text-[#f78134] mt-1" />
                  <h2 className="text-3xl font-bold font-rubik text-[#062f3a]">1. Data We Collect</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3"><Key className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Shipper/Receiver: Name, phone, address, email.</span></li>
                  <li className="flex items-start gap-3"><Key className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Shipment: Tracking ID, weight, value, COD amount.</span></li>
                  <li className="flex items-start gap-3"><Key className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Account: Login details (hashed), usage history.</span></li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <Cookie className="h-10 w-10 text-[#f78134] mt-1" />
                  <h2 className="text-3xl font-bold font-rubik text-[#062f3a]">2. Cookies & Tracking</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3"><Key className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Functional cookies for login/session.</span></li>
                  <li className="flex items-start gap-3"><Key className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Analytics (anonymized) for site improvement.</span></li>
                  <li className="flex items-start gap-3"><Key className="h-5 w-5 text-[#f78134] mt-1 flex-shrink-0" /><span>Opt-out available via browser settings.</span></li>
                </ul>
              </div>
            </div>

            {/* Use & Sharing */}
            <div className="animate-fade-in opacity-0 data-[state=visible]:opacity-100 animate-delay-400">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <Lock className="h-10 w-10 text-[#f78134] mt-1" />
                  <h2 className="text-3xl font-bold font-rubik text-[#062f3a]">3. How We Use Data</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#062f3a] mb-4">Service Delivery</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Routing & delivery coordination</li>
                      <li>• COD collection & remittance</li>
                      <li>• Customer notifications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#062f3a] mb-4">Improvement</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Route optimization</li>
                      <li>• Fraud prevention</li>
                      <li>• Service analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Rights */}
            <div className="grid lg:grid-cols-2 gap-8 animate-fade-in opacity-0 data-[state=visible]:opacity-100 animate-delay-600">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <Share className="h-10 w-10 text-[#f78134] mt-1" />
                  <h2 className="text-3xl font-bold font-rubik text-[#062f3a]">4. Sharing Data</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">No sale of data. Shared only with: carriers (delivery), banks (payments), authorities (legal).</li>
                  <li className="flex items-start gap-3">Third-parties under strict agreements.</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <h2 className="text-3xl font-bold font-rubik text-[#062f3a] mb-6">5. Your Rights</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access/delete data via account or request.</li>
                  <li>• Opt-out marketing.</li>
                  <li>• Complaints to support@lionexcourier.com</li>
                </ul>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center pt-12 border-t border-gray-200 animate-fade-in opacity-0 data-[state=visible]:opacity-100">
              <p className="text-xl font-semibold text-gray-700 mb-4">We update this policy periodically. Check back.</p>
              <p className="text-gray-600">Last updated: October 2024 | <a href="mailto:support@lionexcourier.com" className="text-[#f78134] hover:underline font-bold">support@lionexcourier.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default PrivacyPolicy;

