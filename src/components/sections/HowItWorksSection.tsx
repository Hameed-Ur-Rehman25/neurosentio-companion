import { Download, Activity, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download & Setup",
    description: "Get started in just one minute. Download the app and personalize your experience with your preferences.",
  },
  {
    icon: Activity,
    step: "02",
    title: "Log Your Energy",
    description: "Track how you feel anytime, anywhere. Add notes about triggers, environments, or anything relevant.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Gain Insights & Stay Safe",
    description: "Discover patterns, use safety tools when needed, and share insights with people you trust.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Simple to Start, Powerful to Use
          </h2>
          <p className="text-lg text-muted-foreground">
            No complicated setup. No overwhelming options. Just the tools you need, when you need them.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.step} step={step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({
  step,
  isLast,
}: {
  step: (typeof steps)[0];
  isLast: boolean;
}) => {
  const Icon = step.icon;

  return (
    <div className="relative text-center">
      {/* Connector line (hidden on mobile and last item) */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
      )}

      {/* Icon container */}
      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card shadow-card mb-6">
        <Icon className="w-8 h-8 text-accent" />
        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
          {step.step.replace("0", "")}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
      <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
    </div>
  );
};

export default HowItWorksSection;
