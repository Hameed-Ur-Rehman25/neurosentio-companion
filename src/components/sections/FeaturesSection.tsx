import { motion } from "framer-motion";
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
      "Monitor your energy levels throughout the day with visual charts and customizable notes to identify patterns.",
  },
  {
    icon: AlertCircle,
    title: "Panic Button & Safe Mode",
    description:
      "Quick 2-second hold activation starts a calming countdown with breathing animations and contact notification.",
  },
  {
    icon: Users,
    title: "Safety Contacts",
    description:
      "Store emergency contacts with quick-dial. Import from your device and keep your support network close.",
  },
  {
    icon: CreditCard,
    title: "Personal Passport",
    description:
      "Emergency info card with communication preferences and medical details. Max brightness for visibility.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Customizable, timezone-aware check-in notifications. Gentle alerts that respect your sensory needs.",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description:
      "Offline-first with end-to-end encryption. No third-party tracking. Your data stays under your control.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Features designed for{" "}
            <span className="text-accent">your well-being</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is crafted with care, respecting your needs for privacy, simplicity, and control.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  feature,
}: {
  feature: (typeof features)[0];
}) => {
  const Icon = feature.icon;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-7 h-7 text-accent" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </motion.article>
  );
};

export default FeaturesSection;
