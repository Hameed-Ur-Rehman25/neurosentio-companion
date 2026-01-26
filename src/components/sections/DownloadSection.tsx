import { Apple, Smartphone, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "Free forever",
  "No ads",
  "Works offline",
  "Privacy-first",
];

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/20 via-calm-purple/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-[2.5rem] p-10 md:p-16 overflow-hidden"
          >
            {/* Card background with gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-calm-purple to-gentle-green p-[2px] rounded-[2.5rem]">
              <div className="absolute inset-[2px] bg-card rounded-[calc(2.5rem-2px)]" />
            </div>

            {/* Animated shimmer */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
            />

            <div className="relative z-10 text-center space-y-10">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
                Available Now
              </motion.div>

              {/* Header */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance"
                >
                  Ready to Take{" "}
                  <span className="gradient-text">Control</span>?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl text-muted-foreground max-w-xl mx-auto"
                >
                  Download NeuroSentio for free and start your journey to better energy management and personal safety.
                </motion.p>
              </div>

              {/* Download Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="accent"
                    size="xl"
                    className="gap-4 px-8 py-7 text-lg accent-glow-lg rounded-2xl"
                    asChild
                  >
                    <a href="#" aria-label="Download on the App Store">
                      <Apple className="w-7 h-7" />
                      <div className="text-left">
                        <div className="text-xs opacity-80 font-normal">Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    size="xl"
                    className="gap-4 px-8 py-7 text-lg glass rounded-2xl border-2"
                    asChild
                  >
                    <a href="#" aria-label="Get it on Google Play">
                      <Smartphone className="w-7 h-7" />
                      <div className="text-left">
                        <div className="text-xs opacity-60 font-normal">Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-accent" />
                    </motion.div>
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
