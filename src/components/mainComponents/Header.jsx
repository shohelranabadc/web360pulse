import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo/logo.png";

const navData = [
  { path: "/", label: "Home" },
  { path: "/donar", label: "Find Donars" },
  { path: "/request", label: "Blood Request" },
  { path: "/events", label: "Events" },
  { path: "/about", label: "About Us" },
];

const NavItems = ({toggleMenu}) => {
  const navlinkStyle = ({isActive}) => isActive ? "text-red-600 font-bold border-b-2 border-red-600" : "hover:text-red-500 transition";
  
  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {
          navData.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <NavLink to={item.path} className={navlinkStyle}>{item.label}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto max-w-screen-2xl flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-red-600 flex items-center gap-2">
           {/* <span className="bg-black text-white px-2 py-1 rounded">WAB360</span> Pulse */}
           <img src={logo} alt="WAB360 Pulse Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* Call to Action Buttons /CTA  */}
        <div className="hidden sm:flex items-center gap-4">
          <NavLink to="/donate" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
            Donate Now
          </NavLink>
          <NavLink to="/login" className="text-gray-700 font-medium hover:text-red-600">
            Login
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <div className="cursor-pointer md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? null : <Menu size={28} />}
        </div>

        {/* mobile menus */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center space-y-8 text-white transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden z-[60]`}
        >
          <div className="absolute top-6 right-6 cursor-pointer" onClick={toggleMenu}>
            <X size={32} />
          </div>

          <NavItems toggleMenu={toggleMenu} />
          
          {/* Mobile CTA */}
          <div className="flex flex-col gap-4 w-full px-10">
             <NavLink to="/donate" onClick={toggleMenu} className="bg-red-600 text-center py-3 rounded-lg">Donate Now</NavLink>
             <NavLink to="/login" onClick={toggleMenu} className="border border-white text-center py-3 rounded-lg">Login</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
