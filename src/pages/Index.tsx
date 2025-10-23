import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RecentlyFoundItems from "@/components/RecentlyFoundItems";
import QRGenerator from "@/components/QRGenerator";
import ReportLostItem from "@/components/ReportLostItem";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <RecentlyFoundItems />
      <QRGenerator />
      <ReportLostItem />
      <Footer />
    </div>
  );
};

export default Index;
