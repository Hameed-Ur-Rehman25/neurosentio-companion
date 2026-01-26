import { motion } from "framer-motion";

const TrustLogosSection = () => {
  // Using text-based logos for simplicity - in production these would be SVG logos
  const partners = [
    { name: "Apple", label: "App Store" },
    { name: "Google Play", label: "Android" },
    { name: "Flutter", label: "Built with" },
    { name: "Supabase", label: "Powered by" },
    { name: "WCAG 2.1", label: "Accessible" },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted technology & platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold tracking-tight">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLogosSection;
