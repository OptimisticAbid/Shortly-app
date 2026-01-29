import React from "react";
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    // <nav className="flex w-full fixed top-0 mb-1 items-center justify-between z-50 px-5 py-5 h-16 bg-slate-50 backdrop-blur-md ">
    <nav className="nav-container  ">

      <div className="nav-inner max-w-7xl">
        
        <div className="nav-logo-container ">
          <span className="nav-logo text-primary-dark font-semibold text-3xl">
            <img src={logo} alt=""
            className="w-full h-full scale-250" />
          </span>
        </div>

        <div className="nav-menu ">

          <ul className="nav-items items-center hidden md:flex gap-4 justify-center ">
            <li>
              <a href="/docs">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/api">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="nav-right-section">
          <button className="btn-primary md:bg-white md:text-muted-foreground md:border md:border-(--color-primary) md:hover:bg-(--color-primary) md:hover:text-white">Sign In</button>
            
         <button className="hidden md:block btn-primary"> Get Started →</button>

        {/* data-text px-6 py-3 hover:bg-slate-50 hover:text-primary transition-all duration-700 ease-in-out  border-2 border-brand-gray-300 rounded-2xl */}
        </div>
        {/* <div className="flex gap-4">
          <button className="bg-primary data-text px-6 py-3 hover:bg-slate-50 hover:text-primary transition-all duration-700 ease-in-out  border-2 border-brand-gray-300 rounded-2xl">Sign In</button> */}

          {/* <button className="bg-slate-50 border  hover:text-primary duration-700 border-brand-gray-300 px-6 py-3 rounded-2xl">
            Login
          </button> */}
        {/* </div> */}
      
      </div>
    </nav>
  );
};

export default Navbar;
