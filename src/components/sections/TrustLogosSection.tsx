import { motion } from "framer-motion";
import { Apple, Smartphone, Code2, Database, Shield } from "lucide-react";

const TrustLogosSection = () => {
  const partners = [
    { name: "App Store", icon: Apple, label: "Available on" },
    { name: "Google Play", icon: Smartphone, label: "Available on" },
    { name: "Flutter", icon: Code2, label: "Built with" },
    { name: "Supabase", icon: Database, label: "Powered by" },
    { name: "WCAG 2.1", icon: Shield, label: "Certified" },
  ];

  return (
    <section className="py-16 md:py-20 border-y border-border bg-secondary/50 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mb-10 tracking-wide uppercase font-medium"
          >
            Trusted technology & platforms
          </motion.p>

          {/* Infinite scroll effect */}
          <div className="relative">
            <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-20 flex-wrap">
              {partners.map((partner, index) => {
                const Icon = partner.icon;
                return (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                    }}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-accent/30 group-hover:shadow-lg transition-all"
                    >
                      <Icon className="w-7 h-7 group-hover:text-accent transition-colors" />
                    </motion.div>
                    <div className="text-center">
                      <span className="text-xs text-muted-foreground/70 block">
                        {partner.label}
                      </span>
                      <span className="text-sm font-semibold tracking-tight">
                        {partner.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLogosSection;
