import { Button } from "@/components/ui/button";
import { Search, QrCode } from "lucide-react";
import { useEffect, useState } from "react";
import lostFoundImg from "@/assets/lostfoundimg.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Decorative background image (full-bleed, low opacity) */}
      <img
        src={lostFoundImg}
        alt=""
        aria-hidden="true"
        className="absolute left-0 right-0 top-16 bottom-0 w-full h-[calc(100vh-4rem)] object-cover opacity-20 dark:opacity-20 pointer-events-none select-none"
      />

      <div className="absolute inset-0 bg-[image:radial-gradient(circle_at_50%_120%,hsl(var(--primary-glow)/0.1),transparent_50%)] w-full" />
      
      <div className="w-full px-4 py-32 relative z-10">
        <div className="w-full px-8">
          {/* Text Content */}
          <div className="text-center animate-fade-in max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary ">Reuniting People with Their Belongings</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text  bg-gradient-from-primary to-primary-glow">
              Lost Something?
              <br />
              We'll Help You Find It
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              ClaimInn is your trusted platform for reporting lost items, finding what others have lost, 
              and protecting your belongings with QR codes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => scrollToSection('report')}
                className="w-full sm:w-auto text-center bg-orange-200 hover:bg-primary/100 text-primary-foreground text-lg px-8 py-4 rounded-lg shadow-xl"
              >
                <Search className="w-5 h-5 mr-2" />
                Report Lost Item
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('generate-qr')}
                className="w-full sm:w-auto text-center border-2 border-primary/60 text-primary bg-stone-300 dark:bg-black hover:bg-white dark:hover:bg-black text-lg px-8 py-4 rounded-lg shadow-lg"
              >
                <QrCode className="w-5 h-5 mr-2 bg-slate-50" />
                Generate QR Code
              </Button>
               <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('report')}
                className="w-full sm:w-auto text-center border-2 border-primary/60 text-primary bg-orange-200 dark:bg-black hover:bg-white dark:hover:bg-black text-lg px-8 py-4 rounded-lg shadow-lg"
              >
                <QrCode className="w-5 h-5 mr-2 bg-slate-50" />
                Report found item
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-14">
              <div className="text-center   ml-4 lg:text-left">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Items Recovered</div>
              </div>
              <div className="text-center lg:text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center ">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
