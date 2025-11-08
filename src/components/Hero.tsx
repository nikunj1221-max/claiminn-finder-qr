import { Button } from "@/components/ui/button";
import { Search, QrCode } from "lucide-react";
import { useEffect, useState } from "react";
import lostFoundImg from "@/assets/lostfoundimg.png";

import { Link } from "react-router-dom";
// import { FiSearch, FiUpload } from "react-icons/fi";
// import { LuQrCode } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FFF3D6] min-h-[35vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center">
      <div className="max-w-5xl mx-auto px-3 pt-3 pb-0 md:pt-8 md:pb-6">
  {/* Card-like container */}
    <div className="rounded-xl px-2 py-4 md:px-4 md:py-6 text-center">
          {/* Heading */}
          <p className="text-lg md:text-xl text-[#0B2D81]/80 font-medium">
            Reuniting people with their belongings
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-[#0B2D81]">
            Lost Something?
          </h1>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-[#1C4DD8]">
            We&apos;ll Help You Find It
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-slate-600">
            ClaimInn is your trusted platform for reporting lost items, finding what others have lost,
            and protecting your belongings with QR codes.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/report-lost"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC225] px-4 py-3 text-sm font-semibold text-[#0B2D81] shadow-sm hover:bg-[#ffb700] transition"
            >
              {/* <FiSearch className="text-[#0B2D81]" /> */}
              Report Lost Items
            </Link>

            <Link
              to="/generate-qr"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC225] px-4 py-3 text-sm font-semibold text-[#0B2D81] shadow-sm hover:bg-[#ffb700] transition"
            >
              {/* <LuQrCode className="text-[#0B2D81]" /> */}
              Generate QR Code
            </Link>

            <Link
              to="/report-found"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3FAE] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              {/* <FiUpload /> */}
              Report Found Items
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0B2D81]">100+</div>
              <div className="text-xs md:text-sm text-slate-600">Items Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0B2D81]">500+</div>
              <div className="text-xs md:text-sm text-slate-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0B2D81]">98%</div>
              <div className="text-xs md:text-sm text-slate-600">Success Rate</div>
            </div>
          </div>
  </div>
      </div>
    </section>
  );
}
