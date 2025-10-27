import { Search, KeyIcon , CheckCircle, Bell } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Report Lost Item",
      description: "Fill in details about your lost item including location, description, and contact info."
    },
    {
      icon: KeyIcon,
      title: "Database Matching",
      description: "we will look through reported found items to find potential matches for your lost item."
    },
    {
      icon: Bell,
      title: "Get Notified",
      description: "Receive instant notifications when someone finds and reports your item."
    },
    {
      icon: CheckCircle,
      title: "Reunite",
      description: "Connect with the finder and get your belongings back safely."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to recover your lost items or help others find theirs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-elegant transition-all duration-300 border border-border h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
