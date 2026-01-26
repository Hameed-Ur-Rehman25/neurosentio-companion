import { motion, useInView } from "framer-motion";
import { Download, Activity, TrendingUp, ArrowDown, Zap } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download & Setup",
    description: "Get started in just one minute. Download the app and personalize your experience with your preferences.",
    gradient: "from-accent to-accent/50",
    bgGradient: "from-accent/20 to-accent/5",
    color: "text-accent",
  },
  {
    icon: Activity,
    step: "02",
    title: "Log Your Energy",
    description: "Track how you feel anytime, anywhere. Add notes about triggers, environments, or anything relevant.",
    gradient: "from-calm-purple to-calm-purple/50",
    bgGradient: "from-calm-purple/20 to-calm-purple/5",
    color: "text-calm-purple",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Gain Insights & Stay Safe",
    description: "Discover patterns, use safety tools when needed, and share insights with people you trust.",
    gradient: "from-gentle-green to-gentle-green/50",
    bgGradient: "from-gentle-green/20 to-gentle-green/5",
    color: "text-gentle-green",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container relative" ref={ref}>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-sm font-medium text-accent"
          >
            <Zap className="w-4 h-4" />
            Simple Process
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Simple to Start,{" "}
            <span className="gradient-text">Powerful</span> to Use
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No complicated setup. No overwhelming options. Just the tools you need, when you need them.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0">
            <div className="max-w-4xl mx-auto px-24">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="h-1 bg-gradient-to-r from-accent via-calm-purple to-gentle-green origin-left rounded-full"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <StepCard
                key={step.step}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) => {
  const Icon = step.icon;
  const bgColors = ["bg-accent", "bg-calm-purple", "bg-gentle-green"];

  return (
    <motion.div
      variants={itemVariants}
      className="relative text-center"
    >
      {/* Mobile connector arrow */}
      {!isLast && (
        <div className="lg:hidden flex justify-center my-8">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className={`w-8 h-8 ${step.color}`} />
          </motion.div>
        </div>
      )}

      {/* Card */}
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-card rounded-3xl p-10 lg:p-12 border border-border overflow-hidden group"
      >
        {/* Gradient background decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} pointer-events-none`}
        />

        {/* Shine effect */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "200%", opacity: 0.3 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Step number badge */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className={`absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} text-accent-foreground text-lg font-bold flex items-center justify-center shadow-lg`}
          >
            {step.step.replace("0", "")}
          </motion.div>

          {/* Icon container */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${step.bgGradient} mb-8 border border-border/50`}
          >
            <Icon className={`w-12 h-12 ${step.color}`} />
          </motion.div>

          {/* Text content */}
          <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
            {step.title}
          </h3>
          <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed text-lg">
            {step.description}
          </p>
        </div>
      </motion.div>

      {/* Desktop connector dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 300 }}
        className={`hidden lg:flex absolute top-32 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${bgColors[index]} items-center justify-center ring-4 ring-secondary shadow-xl z-10`}
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default HowItWorksSection;
