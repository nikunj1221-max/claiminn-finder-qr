import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FFF3D6] min-h-[35vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center">
      <div className="max-w-5xl mx-auto px-2 pt-3 pb-0 md:px-4 md:pt-8 md:pb-6">
        <div className="rounded-xl px-2 py-4 md:px-4 md:py-6 text-center">
          <p className="text-xl md:text-2xl text-[#0B2D81]/80 font-medium">
            Reuniting people with their belongings
          </p>

          <h1 className="mt-1 text-4xl md:text-5xl font-semibold text-[#0B2D81] leading-tight">
            Lost Something?
          </h1>
          <h2 className="mt-1 text-3xl md:text-4xl font-semibold text-[#1C4DD8] leading-tight">
            We&apos;ll Help You Find It
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-base md:text-lg text-slate-600">
            ClaimInn is your trusted platform for reporting lost items, finding what others have lost,
            and protecting your belongings with QR codes.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/report-lost"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC225] px-4 py-3 text-base font-semibold text-[#0B2D81] shadow-sm hover:bg-[#ffb700] transition"
            >
              Report Lost Items
            </Link>

            <button
              onClick={() => scrollToSection("generate-qr")}
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC225] px-4 py-3 text-base font-semibold text-[#0B2D81] shadow-sm hover:bg-[#ffb700] transition"
            >
              Generate QR Code
            </button>

            <Link
              to="/report-found"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3FAE] px-4 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              Report Found Items
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B2D81]">100+</div>
              <div className="text-sm md:text-base text-slate-600">Items Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B2D81]">500+</div>
              <div className="text-sm md:text-base text-slate-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B2D81]">98%</div>
              <div className="text-sm md:text-base text-slate-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
