import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { QRCodeCanvas } from "qrcode.react";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QRGenerator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    itemName: "",
    ownerName: "",
    phone: "",
    email: "",
    description: ""
  });
  const [showQR, setShowQR] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateQR = () => {
    if (!formData.itemName || !formData.ownerName || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    setShowQR(true);
    toast({
      title: "QR Code Generated!",
      description: "Your QR code is ready. Download and attach it to your item."
    });
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qr-code") as HTMLCanvasElement;
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `${formData.itemName}-qr-code.png`;
      link.href = url;
      link.click();
    }
  };

  const qrData = JSON.stringify({
    item: formData.itemName,
    owner: formData.ownerName,
    phone: formData.phone,
    email: formData.email,
    description: formData.description
  });

  return (
    <section id="generate-qr" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Generate Your QR Code</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create a unique QR code for your valuable items. If lost, anyone can scan it and contact you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-foreground">Item Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="itemName">Item Name *</Label>
                  <Input
                    id="itemName"
                    name="itemName"
                    placeholder="e.g., Laptop, Wallet, Keys"
                    value={formData.itemName}
                    onChange={handleInputChange}
                    className="border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="ownerName">Your Name *</Label>
                  <Input
                    id="ownerName"
                    name="ownerName"
                    placeholder="Your full name"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    className="border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Any additional details about the item"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border-border"
                  />
                </div>
                <Button 
                  onClick={generateQR}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Generate QR Code
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle className="text-foreground">Your QR Code</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6">
                {showQR ? (
                  <>
                    <div className="p-4 bg-white rounded-lg">
                      <QRCodeCanvas
                        id="qr-code"
                        value={qrData}
                        size={250}
                        level="H"
                        includeMargin
                      />
                    </div>
                    <Button 
                      onClick={downloadQR}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download QR Code
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Print this QR code and attach it to your item
                    </p>
                  </>
                ) : (
                  <div className="text-center p-12">
                    <div className="w-48 h-48 border-2 border-dashed border-border rounded-lg flex items-center justify-center mb-4">
                      <span className="text-muted-foreground">QR Code will appear here</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Fill in the details and click generate
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRGenerator;
