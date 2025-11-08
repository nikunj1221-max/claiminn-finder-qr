import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import logo from "@/assets/logo.jpg";

import { Link } from "react-router-dom";
// import { FaRegSnowflake } from "react-icons/fa"; // login icon (same as screenshot)

export default function Navbar() {
  return (
    <nav className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 w-full">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="ClaimInn Logo" 
            className="w-6 h-6"
          />
          <span className="text-xl font-semibold text-[#0B2D81]">ClaimInn</span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0B2D81]">
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/generate-qr">Generate QR</Link>
          <Link to="/found-items">Found items</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Right: Login + Sign Up */}
        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="flex items-center gap-1 text-[#0B2D81] font-medium text-sm"
          >
            {/* <FaRegSnowflake size={14} />  */}
            Login
          </Link>

          <Link 
            to="/signup" 
            className="bg-[#FFC225] hover:bg-[#ffb700] transition text-[#0B2D81] font-semibold text-sm px-4 py-2 rounded-full"
          >
            Sign up
          </Link>
        </div>

      </div>
    </nav>
  );
}
