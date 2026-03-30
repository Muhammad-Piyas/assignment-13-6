import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100 px-8 py-4 shadow-sm">
        <div class="navbar-start">
          <a class="text-3xl font-bold bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] hover:from-[#AD1DFF] hover:to-[#8133FF] bg-clip-text text-transparent cursor-pointer">
            DigiTools
          </a>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 gap-4 font-medium text-base-content/70">
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

        <div class="navbar-end gap-6">
          <button class="btn btn-ghost btn-circle btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          <a class="link link-hover font-medium">Login</a>

          <button class="btn border-none bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] hover:from-[#AD1DFF] hover:to-[#8133FF] rounded-full px-8 text-white">
            Get Started
          </button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;
