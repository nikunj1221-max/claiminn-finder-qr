import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ReportFoundItem = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    location: "",
    date: "",
    description: "",
    contactName: "",
    contactPhone: "",
    contactEmail: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.itemName || !formData.location || !formData.contactPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Found Item Reported Successfully!",
      description: "Thank you for helping reunite items with their owners."
    });

    // Reset form
    setFormData({
      itemName: "",
      category: "",
      location: "",
      date: "",
      description: "",
      contactName: "",
      contactPhone: "",
      contactEmail: ""
    });
  };

  return (
    <Card className="border-border shadow-elegant animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Item Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="itemName">Item Name *</Label>
              <Input
                id="itemName"
                name="itemName"
                placeholder="e.g., Laptop, Phone, Wallet"
                value={formData.itemName}
                onChange={handleInputChange}
                required
                className="border-border"
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select category</option>
                <option value="electronics">Electronics</option>
                <option value="accessories">Accessories</option>
                <option value="documents">Documents</option>
                <option value="clothing">Clothing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Found Location *</Label>
              <Input
                id="location"
                name="location"
                placeholder="e.g., Central Park, NYC"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="border-border"
              />
            </div>
            <div>
              <Label htmlFor="date">Date Found</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border-border"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Provide detailed description including color, brand, distinctive features..."
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="border-border"
            />
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Your Contact Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="contactName">Your Name *</Label>
                <Input
                  id="contactName"
                  name="contactName"
                  placeholder="Full name"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="border-border"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactPhone">Phone Number *</Label>
                  <Input
                    id="contactPhone"
                    name="contactPhone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="border-border"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full bg-amber-200 hover:bg-green-400 text-accent-foreground text-lg py-6"
          >
            Submit Found Item
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReportFoundItem;
