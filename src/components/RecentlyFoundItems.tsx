import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentlyFoundItems = () => {
  const foundItems = [
    {
      id: 1,
      name: "Apple MacBook Pro",
      location: "Central Park, NYC",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      description: "15-inch laptop with stickers on the back"
    },
    {
      id: 2,
      name: "Black Leather Wallet",
      location: "Times Square Station",
      date: "1 day ago",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop",
      description: "Contains ID and credit cards"
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      location: "Brooklyn Bridge",
      date: "3 hours ago",
      image: "https://images.unsplash.com/photo-1592286927505-c7c365bf83b4?w=400&h=300&fit=crop",
      description: "Blue color with cracked screen protector"
    },
    {
      id: 4,
      name: "Car Keys with Remote",
      location: "Madison Square Garden",
      date: "5 hours ago",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400&h=300&fit=crop",
      description: "Honda keys with sports team keychain"
    },
    {
      id: 5,
      name: "Blue Backpack",
      location: "Grand Central Terminal",
      date: "1 day ago",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      description: "Contains books and a water bottle"
    },
    {
      id: 6,
      name: "Gold Watch",
      location: "Bryant Park",
      date: "4 days ago",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=300&fit=crop",
      description: "Vintage Rolex with leather strap"
    }
  ];

  return (
    <section id="found-items" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Recently Found Items</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse items that have been found and reported by our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group border-border">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Found
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{item.date}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Claim This Item
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/10">
            View All Found Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyFoundItems;
