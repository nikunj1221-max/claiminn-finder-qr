import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r backdrop-blur-lg shadow-sm border-b border-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="ClaimInn Logo" 
              className="w-8 h-8 rounded-full object-contain"
            />
            <span className="text-2xl font-bold text-foreground ml-2">ClaimInn</span>
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
            className="  border-2 border-primary/60 text-primary bg-amber-200 dark:bg-black hover:bg-green-200 dark:hover:bg-black  px-8 py-4 rounded-lg shadow-lg"
             
          >
            Report Lost Item
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
