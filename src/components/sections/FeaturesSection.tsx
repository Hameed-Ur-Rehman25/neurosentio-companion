import {
  Battery,
  AlertCircle,
  Users,
  CreditCard,
  Bell,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Battery,
    title: "Energy Tracking",
    description:
      "Monitor your energy levels throughout the day with visual charts and customizable notes to identify patterns and triggers.",
  },
  {
    icon: AlertCircle,
    title: "Panic Button & Safe Mode",
    description:
      "Quick 2-second hold activation starts a 20-minute calming countdown with breathing animations and optional contact notification.",
  },
  {
    icon: Users,
    title: "Safety Contacts",
    description:
      "Store emergency contacts with quick-dial functionality. Import from your device and keep your support network close.",
  },
  {
    icon: CreditCard,
    title: "Personal Passport",
    description:
      "Emergency information card with communication preferences and medical details. Max brightness mode for visibility when needed.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Customizable, timezone-aware check-in notifications. Gentle, non-intrusive alerts that respect your sensory needs.",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description:
      "Offline-first design with end-to-end encryption. No third-party tracking ever. Your data stays completely under your control.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Tools Designed for Your Well-being
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is crafted with care, respecting your needs for privacy, simplicity, and control.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const Icon = feature.icon;
  
  return (
    <article
      className="group bg-card rounded-2xl p-6 lg:p-8 card-elevated hover:scale-[1.02] transition-all"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </article>
  );
};

export default FeaturesSection;
