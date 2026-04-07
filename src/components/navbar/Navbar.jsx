import { HiOutlineShoppingCart, HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ cartCount }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4 py-2 lg:py-4">
        {/* Navbar Start: Logo + Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-3 text-[#8133FF]"
            >
              <HiMenuAlt3 className="text-2xl" />{" "}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-white rounded-2xl w-64 font-semibold text-[#101727] gap-2 border border-gray-100"
            >
              <li>
                <a className="hover:text-[#8133FF]">Products</a>
              </li>
              <li>
                <a className="hover:text-[#8133FF]">Features</a>
              </li>
              <li>
                <a className="hover:text-[#8133FF]">Pricing</a>
              </li>
              <li>
                <a className="hover:text-[#8133FF]">Testimonials</a>
              </li>
              <li>
                <a className="hover:text-[#8133FF]">FAQ</a>
              </li>
              <div className="divider my-1"></div>
              <li>
                <a className="text-[#8133FF]">Login</a>
              </li>
            </ul>
          </div>

          <a className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] bg-clip-text text-transparent cursor-pointer tracking-tight">
            DigiTools
          </a>
        </div>

        {/* Navbar Center: Desktop Links (Hidden on Mobile) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-semibold text-[#101727]/70">
            <li>
              <a className="hover:text-[#8133FF] transition-colors">Products</a>
            </li>
            <li>
              <a className="hover:text-[#8133FF] transition-colors">Features</a>
            </li>
            <li>
              <a className="hover:text-[#8133FF] transition-colors">Pricing</a>
            </li>
            <li>
              <a className="hover:text-[#8133FF] transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a className="hover:text-[#8133FF] transition-colors">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3 md:gap-6">
          <div className="indicator cursor-pointer group">
            {cartCount > 0 && (
              <span className="indicator-item badge badge-sm bg-[#AD1DFF] text-white border-white font-bold p-2 w-5 h-5 text-[10px] animate-bounce">
                {cartCount}
              </span>
            )}
            <button className="btn btn-ghost btn-circle btn-sm md:btn-md hover:bg-purple-50 transition-colors">
              <HiOutlineShoppingCart className="text-2xl md:text-3xl text-[#8133FF] group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <a className="link link-hover font-bold hidden lg:inline-block text-[#101727] hover:text-[#8133FF]">
            Login
          </a>

          <button className="btn btn-xs sm:btn-sm lg:btn-md border-none bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] hover:shadow-lg hover:shadow-purple-200 transition-all rounded-full px-4 lg:px-8 text-white font-bold text-[10px] sm:text-xs lg:text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
