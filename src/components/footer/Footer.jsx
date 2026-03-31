import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-white pt-16 pb-8 px-4 lg:px-12">
      <div className="container mx-auto">
        {/* Upper Footer: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Templates
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Integrations
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Press
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Social Links</h3>
            <div className="flex gap-4">
              {/* Instagram Icon */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 group">
                <BsInstagram className="text-[#101727] text-xl group-hover:text-white" />
              </div>

              {/* Facebook Icon */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 group">
                <FaFacebook className="text-[#101727] text-xl group-hover:text-white" />
              </div>

              {/* X (Twitter) Icon */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 group">
                <BsTwitterX className="text-[#101727] text-xl group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Copyright & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
