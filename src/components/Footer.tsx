import { Mail, MapPin, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { MdPhone, MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  // Newsletter Logic
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast({
        title: "Subscription Successful",
        description: "You have been subscribed to our newsletter.",
        className:
          "bg-white text-[#14276b] border border-gray-200 shadow-lg font-medium",
      });
      setEmail("");
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        className:
          "bg-white text-[#14276b] border border-gray-200 shadow-lg font-medium",
      });
    }
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white font-poppins">
      {/* Newsletter Section */}
      <div className="bg-[#14276b] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-md tracking-wider uppercase text-gray-200">
              Subscribe to our
            </p>
            <h3 className="text-2xl font-semibold tracking-wide">NEWSLETTER</h3>
          </div>

          {/* Email Input Section */}
          <form
            onSubmit={handleSubscribe}
            className="bg-[#14276b] sm:bg-white md:bg-white rounded-full flex flex-col sm:flex-row items-center w-[80%] sm:w-[65%] p-1 pr-1 md:mr-10"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full bg-white text-gray-700 placeholder-gray-500 px-6 py-2 rounded-full focus:outline-none mb-2 sm:mb-0"
            />
            <Button
              type="submit"
              className="bg-[#f7a30a] hover:bg-[#f58d00] text-white font-medium px-6 py-2 rounded-full transition-all w-full sm:w-auto"
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-[#1c348a] py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">ClaimInn</h2>
            <p className="text-sm text-gray-200 leading-relaxed mb-4">
              Reuniting people with their belongings through trust and innovation.
            </p>
            <div className="space-y-2 text-sm text-gray-200">
              <p className="flex items-center gap-2">
                <MdPhone className="text-lg" /> +91 9800978900
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-lg" /> support@claiminn.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-16">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              {[
                { label: "Home", id: "home" },
                { label: "How it works", id: "how-it-works" },
                { label: "About", id: "about" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="relative group inline-block hover:text-white transition-colors"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#fff] transition-all group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:pl-16">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              {["Help Centres", "FAQs", "Privacy Policy", "Terms & Conditions"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="relative group inline-block hover:text-white transition-colors"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#fff] transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Community */}
          <div className="md:pl-16">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              {["Become a Volunteer", "Partner with Us"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative group inline-block hover:text-white transition-colors"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#fff] transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Socials + Copyright */}
      <div className="bg-[#1c348a] border-t border-[#253f9b] py-6 flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center gap-6">
          <FaXTwitter className="text-xl text-white hover:text-[#f7a30a] hover:scale-125 transition-all cursor-pointer" />
          <FaInstagram className="text-xl text-white hover:text-[#f7a30a] hover:scale-125 transition-all cursor-pointer" />
          <FaLinkedin className="text-xl text-white hover:text-[#f7a30a] hover:scale-125 transition-all cursor-pointer" />
          <FaYoutube className="text-xl text-white hover:text-[#f7a30a] hover:scale-125 transition-all cursor-pointer" />
        </div>
        <p className="text-gray-200 text-sm text-center">
          © 2025 ClaimInn. All rights reserved.{" "}
          <span className="font-semibold">Every item matters</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;