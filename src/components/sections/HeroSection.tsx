import { Shield, WifiOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Track Your Energy,
                <br />
                <span className="text-accent">Stay Safe</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
              >
                An empowering app designed for the autism community. Manage your energy levels, stay calm during overwhelming moments, and keep your safety network close.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="accent" size="lg" asChild>
                <a href="#download">
                  Download Free
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <a href="#features">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 pt-4"
            >
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent/60 border-2 border-background flex items-center justify-center text-xs font-medium text-accent-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">10k+</p>
                <p className="text-sm text-muted-foreground">Happy users worldwide</p>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              <TrustBadge icon={<Shield className="w-4 h-4" />} text="Privacy-first" />
              <TrustBadge icon={<WifiOff className="w-4 h-4" />} text="Works offline" />
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background shapes */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Main phone mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={appMockup}
                  alt="NeuroSentio app showing energy tracking dashboard"
                  className="w-64 md:w-72 lg:w-80 float-card rounded-3xl"
                />
              </motion.div>

              {/* Floating stat card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -right-8 md:-right-16 bg-card rounded-2xl p-4 float-card border border-border"
              >
                <p className="text-xs text-muted-foreground mb-1">Energy Today</p>
                <p className="text-2xl font-bold text-accent">85%</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="text-accent">↑</span> +12% this week
                </p>
              </motion.div>

              {/* Floating stat card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -bottom-4 -left-8 md:-left-16 bg-card rounded-2xl p-4 float-card border border-border"
              >
                <p className="text-xs text-muted-foreground mb-1">Check-ins</p>
                <p className="text-2xl font-bold text-foreground">247</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-muted-foreground">
    <span className="text-accent">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default HeroSection;
