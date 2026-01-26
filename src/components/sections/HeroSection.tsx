import { Shield, WifiOff, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 2, 0, -2, 0],
  };

  return (
    <section
      ref={containerRef}
      className="hero-gradient min-h-screen flex items-center pt-24 pb-16 md:pb-24 overflow-hidden relative"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[15%] w-80 h-80 bg-calm-purple/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gentle-green/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div style={{ y, opacity, scale }} className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-sm font-medium text-foreground">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-accent" />
                </motion.span>
                Designed for the autism community
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]"
              >
                Track Your Energy,
                <br />
                <motion.span
                  className="gradient-text inline-block"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Stay Safe
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed"
              >
                An empowering app to manage your energy levels, stay calm during overwhelming moments, and keep your safety network close.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="accent" size="lg" className="text-lg px-8 py-6 accent-glow-lg" asChild>
                  <a href="#download" className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Download Free
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 group glass" asChild>
                  <a href="#features">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              {/* Avatar Stack with glow */}
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ y: -5, zIndex: 10 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-accent/80 border-3 border-background flex items-center justify-center text-sm font-bold text-accent-foreground shadow-lg cursor-pointer"
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-foreground"
                >
                  10k+
                </motion.p>
                <p className="text-sm text-muted-foreground">Happy users worldwide</p>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              <TrustBadge icon={<Shield className="w-5 h-5" />} text="Privacy-first" />
              <TrustBadge icon={<WifiOff className="w-5 h-5" />} text="Works offline" />
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative">
              {/* Decorative background shapes with animation */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-calm-purple/30 to-transparent rounded-full blur-3xl"
              />

              {/* Main phone mockup */}
              <motion.div
                animate={floatingAnimation}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  {/* Glow behind phone */}
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-calm-purple/40 blur-2xl scale-90 rounded-3xl" />
                  <img
                    src={appMockup}
                    alt="NeuroSentio app showing energy tracking dashboard"
                    className="relative w-72 md:w-80 lg:w-96 float-card rounded-3xl"
                  />
                </motion.div>
              </motion.div>

              {/* Floating stat card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="absolute -top-6 -right-6 md:-right-20 glass rounded-2xl p-5 float-card border border-accent/20"
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6 text-accent mb-2" />
                </motion.div>
                <p className="text-xs text-muted-foreground mb-1">Energy Today</p>
                <p className="text-3xl font-bold text-accent">85%</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <span className="text-accent font-bold">↑</span> +12% this week
                </p>
              </motion.div>

              {/* Floating stat card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="absolute -bottom-6 -left-6 md:-left-20 glass rounded-2xl p-5 float-card border border-calm-purple/20"
              >
                <p className="text-xs text-muted-foreground mb-1">Check-ins</p>
                <p className="text-3xl font-bold text-foreground">247</p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      className="w-2 h-4 bg-gradient-to-t from-accent to-calm-purple rounded-full origin-bottom"
                      style={{ height: `${12 + i * 4}px` }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute top-1/2 -left-10 md:-left-24 glass rounded-xl p-3 float-card border border-gentle-green/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gentle-green/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-gentle-green" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Safe Mode Ready</p>
                    <p className="text-[10px] text-muted-foreground">Tap & hold when needed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -3 }}
    className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50"
  >
    <span className="text-accent">{icon}</span>
    <span className="text-sm font-medium text-foreground">{text}</span>
  </motion.div>
);

export default HeroSection;
