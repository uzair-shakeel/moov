import { Link } from "react-router-dom";

export default function AccountType() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1180px] bg-white rounded-2xl shadow-md p-8 relative overflow-hidden">
        {/* Bottom right curve */}
        <div className="absolute bottom-0 left-0 h-full">
          <img
            src="/driver/driver-bg-img-1.svg"
            alt=""
            className="h-full w-full object-contain "
          />
        </div>
        {/* Top left curve */}
        <div className="hidden lg:block absolute top-0 right-0 ">
          <img
            src="/driver/auth/welcome.svg"
            alt=""
            className="transform rotate-90"
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-[300px] relative">
          <h1 className="text-2xl font-semibold mb-2">Account Type</h1>
          <p className="text-gray-600 mb-8">
            To tailor our services to your needs, please let us know if you're
            an individual driver or representing a company.
          </p>

          <div className="space-y-4">
            <button className="w-full p-4 bg-gray-50 h-[120px] border border-gray-300 rounded-lg text-left hover:bg-gray-100 transition-colors">
              <h3 className="font-medium mb-1">Individual</h3>
              <p className="text-sm text-gray-500">
                Personal account for individual drivers.
              </p>
            </button>

            <button className="w-full p-4 bg-gray-50 h-[120px] border border-gray-300 rounded-lg text-left hover:bg-gray-100 transition-colors">
              <h3 className="font-medium mb-1">Company</h3>
              <p className="text-sm text-gray-500">
                Business account for companies or fleet managers.
              </p>
            </button>

            <Link to="/d/earn-types">
              <button className="w-full mt-6 bg-primaryPurple text-white py-3 rounded-lg hover:bg-[#7347d5] transition-colors ">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
