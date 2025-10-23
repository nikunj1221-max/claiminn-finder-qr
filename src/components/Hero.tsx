import { Button } from "@/components/ui/button";
import { Search, QrCode } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[image:radial-gradient(circle_at_50%_120%,hsl(var(--primary-glow)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Reuniting People with Their Belongings</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
            Lost Something?
            <br />
            We'll Help You Find It
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            ClaimInn is your trusted platform for reporting lost items, finding what others have lost, 
            and protecting your belongings with QR codes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('report-lost')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-elegant"
            >
              <Search className="w-5 h-5 mr-2" />
              Report Lost Item
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('generate-qr')}
              className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Generate QR Code
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Items Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
