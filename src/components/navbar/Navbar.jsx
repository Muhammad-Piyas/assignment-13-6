import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto  py-4">
        {/* Navbar Start: Mobile Menu + Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] bg-clip-text text-transparent cursor-pointer hover:opacity-90">
            DigiTools
          </a>
        </div>

        {/* Navbar Center: Desktop Only */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium text-base-content/70">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        {/* Navbar End: Icons + Button */}
        <div className="navbar-end gap-2 lg:gap-6">
          <button className="btn btn-ghost btn-circle btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          <a className="link link-hover font-medium hidden sm:inline-block">
            Login
          </a>

          <button className="btn btn-sm lg:btn-md border-none bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] hover:opacity-90 rounded-full px-4 lg:px-8 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
