import { useState } from "react";
import { AlertCircle, Package } from "lucide-react";
import ReportLostItem from "./ReportLostItem";
import ReportFoundItem from "./ReportFoundItem";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ReportType = "lost" | "found";

const ReportItemSelector = () => {
  const [reportType, setReportType] = useState<ReportType>("lost");

  return (
    <section id="report" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-accent/10 border border-accent/20">
            {reportType === "lost" ? (
              <AlertCircle className="w-4 h-4 text-accent" />
            ) : (
              <Package className="w-4 h-4 text-accent" />
            )}
            <span className="text-sm font-medium text-accent">Report an Item</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {reportType === "lost" ? "Lost Something?" : "Found Something?"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {reportType === "lost"
              ? "Report your lost item and increase your chances of getting it back"
              : "Help reunite found items with their rightful owners"}
          </p>

          {/* Animated Dropdown Selector */}
          <div className="max-w-md mx-auto mb-8">
            <Select value={reportType} onValueChange={(value) => setReportType(value as ReportType)}>
              <SelectTrigger className="w-full h-12 text-lg border-2 border-accent/20 hover:border-accent/40 transition-all bg-card">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="lost" className="text-lg py-3 cursor-pointer hover:bg-accent/10">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    <span>I Lost an Item</span>
                  </div>
                </SelectItem>
                <SelectItem value="found" className="text-lg py-3 cursor-pointer hover:bg-accent/10">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-accent" />
                    <span>I Found an Item</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Animated Form Container */}
        <div className="max-w-3xl mx-auto">
          <div key={reportType} className="animate-scale-in">
            {reportType === "lost" ? <ReportLostItem /> : <ReportFoundItem />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportItemSelector;
