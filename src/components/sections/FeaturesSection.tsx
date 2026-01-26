import { motion, useInView } from "framer-motion";
import {
  Battery,
  AlertCircle,
  Users,
  CreditCard,
  Bell,
  Lock,
  LucideIcon,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Battery,
    title: "Energy Tracking",
    description:
      "Monitor your energy levels throughout the day with visual charts and customizable notes to identify patterns.",
    gradient: "from-accent/20 via-accent/10 to-transparent",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: AlertCircle,
    title: "Panic Button & Safe Mode",
    description:
      "Quick 2-second hold activation starts a calming countdown with breathing animations and contact notification.",
    gradient: "from-destructive/15 via-destructive/5 to-transparent",
    iconBg: "bg-destructive/15",
    iconColor: "text-destructive",
  },
  {
    icon: Users,
    title: "Safety Contacts",
    description:
      "Store emergency contacts with quick-dial. Import from your device and keep your support network close.",
    gradient: "from-calm-purple/20 via-calm-purple/10 to-transparent",
    iconBg: "bg-calm-purple/20",
    iconColor: "text-calm-purple",
  },
  {
    icon: CreditCard,
    title: "Personal Passport",
    description:
      "Emergency info card with communication preferences and medical details. Max brightness for visibility.",
    gradient: "from-gentle-green/20 via-gentle-green/10 to-transparent",
    iconBg: "bg-gentle-green/20",
    iconColor: "text-gentle-green",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Customizable, timezone-aware check-in notifications. Gentle alerts that respect your sensory needs.",
    gradient: "from-accent/20 via-calm-purple/10 to-transparent",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description:
      "Offline-first with end-to-end encryption. No third-party tracking. Your data stays under your control.",
    gradient: "from-foreground/10 via-foreground/5 to-transparent",
    iconBg: "bg-foreground/10",
    iconColor: "text-foreground",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-calm-purple/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass border border-accent/20 text-sm font-medium text-accent"
          >
            ✨ Powerful Features
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Features designed for{" "}
            <span className="gradient-text">your well-being</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature is crafted with care, respecting your needs for privacy, simplicity, and control.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
    iconBg: string;
    iconColor: string;
  };
  index: number;
}) => {
  const Icon = feature.icon;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
      className="group relative bg-card rounded-3xl p-8 lg:p-10 border border-border overflow-hidden"
    >
      {/* Gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none`}
      />

      {/* Shine effect on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 0.3 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
        >
          <Icon className={`w-8 h-8 ${feature.iconColor}`} />
        </motion.div>

        {/* Text */}
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>

        {/* Learn more link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-4"
        >
          <span className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.div>
      </div>

      {/* Corner decoration */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
    </motion.article>
  );
};

export default FeaturesSection;
