import { Heart, MessageCircle, Sparkles, Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  { icon: Heart, text: "Respect", color: "text-destructive" },
  { icon: MessageCircle, text: "Understanding", color: "text-accent" },
  { icon: Sparkles, text: "Empowerment", color: "text-calm-purple" },
];

const testimonials = [
  {
    quote: "This app has genuinely changed how I understand my own energy patterns. I finally feel in control.",
    author: "Alex M.",
    role: "Using for 8 months",
    rating: 5,
  },
  {
    quote: "The panic button feature has been a lifesaver. Knowing I can reach my safety contacts instantly gives me so much peace of mind.",
    author: "Jordan K.",
    role: "Using for 1 year",
    rating: 5,
  },
  {
    quote: "Finally an app that respects my privacy and actually works offline. The Personal Passport is brilliant.",
    author: "Sam R.",
    role: "Using for 6 months",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-calm-purple/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-4"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-10 h-10 text-accent fill-accent" />
            </motion.div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Built with{" "}
            <span className="gradient-text">love</span>{" "}
            for the autism community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NeuroSentio was created in collaboration with autistic individuals to ensure it truly meets the needs of the community.
          </p>

          {/* Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.text}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-16 h-16 rounded-2xl glass border border-border/50 flex items-center justify-center shadow-lg"
                  >
                    <Icon className={`w-7 h-7 ${value.color}`} />
                  </motion.div>
                  <span className="text-sm font-semibold text-foreground">
                    {value.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-card rounded-3xl p-8 border border-border overflow-hidden group"
            >
              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0.1 }}
                whileHover={{ opacity: 0.2, scale: 1.1 }}
                className="absolute -top-4 -right-4"
              >
                <Quote className="w-24 h-24 text-accent" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-accent fill-accent" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-calm-purple/30 flex items-center justify-center font-bold text-foreground">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-calm-purple/5 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
