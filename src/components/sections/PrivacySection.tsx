import { Shield, Eye, Server, Trash2 } from "lucide-react";

const privacyPoints = [
  {
    icon: Eye,
    title: "No Tracking",
    description: "We never track your behavior or sell your data to third parties. What you do in the app stays with you.",
  },
  {
    icon: Server,
    title: "Encrypted Storage",
    description: "All data is encrypted end-to-end. Even we can't read your personal information.",
  },
  {
    icon: Shield,
    title: "Offline First",
    description: "The app works completely offline. Your data stays on your device until you choose to sync.",
  },
  {
    icon: Trash2,
    title: "Your Control",
    description: "Export or delete your data anytime. You own your information, always.",
  },
];

const PrivacySection = () => {
  return (
    <section id="privacy" className="py-20 md:py-28 hero-gradient">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Your Privacy is Our Priority
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-lg">
                We built NeuroSentio with privacy at its core. Your personal data, energy logs, and safety information are never shared or sold.
              </p>
            </div>

            {/* Privacy points - mobile */}
            <div className="lg:hidden grid gap-6">
              {privacyPoints.map((point) => (
                <PrivacyPoint key={point.title} point={point} />
              ))}
            </div>
          </div>

          {/* Privacy points grid - desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {privacyPoints.map((point) => (
              <PrivacyCard key={point.title} point={point} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PrivacyPoint = ({ point }: { point: (typeof privacyPoints)[0] }) => {
  const Icon = point.icon;
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h3 className="font-semibold text-primary-foreground mb-1">{point.title}</h3>
        <p className="text-sm text-primary-foreground/70">{point.description}</p>
      </div>
    </div>
  );
};

const PrivacyCard = ({ point }: { point: (typeof privacyPoints)[0] }) => {
  const Icon = point.icon;
  return (
    <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <h3 className="font-semibold text-primary-foreground mb-2">{point.title}</h3>
      <p className="text-sm text-primary-foreground/70">{point.description}</p>
    </div>
  );
};

export default PrivacySection;
