import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Eye, Server, Trash2 } from "lucide-react";
import { useRef } from "react";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const PrivacySection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftContentX = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]);
  const rightContentX = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={containerRef} id="privacy" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ scale: backgroundScale }}
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/5 pointer-events-none"
      />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content with parallax */}
          <motion.div 
            style={{ x: leftContentX }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium">
                Privacy First
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary-foreground">
                Your Privacy is Our Priority
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-lg">
                We built NeuroSentio with privacy at its core. Your personal data, energy logs, and safety information are never shared or sold.
              </p>
            </div>

            {/* Privacy points - mobile */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:hidden grid gap-6"
            >
              {privacyPoints.map((point) => (
                <PrivacyPoint key={point.title} point={point} />
              ))}
            </motion.div>
          </motion.div>

          {/* Privacy points grid - desktop with parallax */}
          <motion.div 
            style={{ x: rightContentX }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {privacyPoints.map((point) => (
              <PrivacyCard key={point.title} point={point} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PrivacyPoint = ({ point }: { point: (typeof privacyPoints)[0] }) => {
  const Icon = point.icon;
  return (
    <motion.div variants={itemVariants} className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div>
        <h3 className="font-semibold text-primary-foreground mb-1">{point.title}</h3>
        <p className="text-sm text-primary-foreground/70">{point.description}</p>
      </div>
    </motion.div>
  );
};

const PrivacyCard = ({ point }: { point: (typeof privacyPoints)[0] }) => {
  const Icon = point.icon;
  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="font-semibold text-primary-foreground mb-2">{point.title}</h3>
      <p className="text-sm text-primary-foreground/80 leading-relaxed">{point.description}</p>
    </motion.div>
  );
};

export default PrivacySection;
