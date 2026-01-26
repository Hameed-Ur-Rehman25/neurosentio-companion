import { motion } from "framer-motion";
import { Download, Activity, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download & Setup",
    description: "Get started in just one minute. Download the app and personalize your experience with your preferences.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Activity,
    step: "02",
    title: "Log Your Energy",
    description: "Track how you feel anytime, anywhere. Add notes about triggers, environments, or anything relevant.",
    gradient: "from-calm-purple/20 to-calm-purple/5",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Gain Insights & Stay Safe",
    description: "Discover patterns, use safety tools when needed, and share insights with people you trust.",
    gradient: "from-gentle-green/20 to-gentle-green/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const connectorVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 0.3 },
  },
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Simple to Start, Powerful to Use
          </h2>
          <p className="text-lg text-muted-foreground">
            No complicated setup. No overwhelming options. Just the tools you need, when you need them.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-0.5">
            <div className="max-w-4xl mx-auto px-20 lg:px-32">
              <motion.div 
                variants={connectorVariants}
                className="h-full bg-gradient-to-r from-accent via-calm-purple to-gentle-green origin-left"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
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
  const colors = ["text-accent", "text-calm-purple", "text-gentle-green"];
  const bgColors = ["bg-accent", "bg-calm-purple", "bg-gentle-green"];

  return (
    <motion.div 
      variants={itemVariants}
      className="relative text-center"
    >
      {/* Mobile connector arrow */}
      {!isLast && (
        <div className="md:hidden flex justify-center my-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
          </motion.div>
        </div>
      )}

      {/* Card */}
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="relative bg-card rounded-3xl p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-shadow duration-300"
      >
        {/* Gradient background decoration */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-50`} />
        
        {/* Content */}
        <div className="relative">
          {/* Step number badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
            className={`absolute -top-4 -right-4 w-10 h-10 rounded-full ${bgColors[index]} text-accent-foreground text-sm font-bold flex items-center justify-center shadow-lg`}
          >
            {step.step.replace("0", "")}
          </motion.div>

          {/* Icon container */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6`}
          >
            <Icon className={`w-10 h-10 ${colors[index]}`} />
          </motion.div>

          {/* Text content */}
          <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
          <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">{step.description}</p>
        </div>
      </motion.div>

      {/* Desktop connector dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        className={`hidden md:block absolute top-[4.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${bgColors[index]} ring-4 ring-secondary shadow-lg z-10`}
      />
    </motion.div>
  );
};

export default HowItWorksSection;
