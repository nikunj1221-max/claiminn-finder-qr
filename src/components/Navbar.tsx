import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="w-6 h-6 text-primary" />
            <span className="text-2xl font-bold text-foreground">ClaimInn</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('found-items')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Found Items
            </button>
            <button 
              onClick={() => scrollToSection('generate-qr')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Generate QR
            </button>
            <button 
              onClick={() => scrollToSection('report-lost')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Report Lost Item
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('report-lost')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Report Lost Item
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
