import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Battery,
  AlertCircle,
  Users,
  CreditCard,
  Bell,
  Shield,
  WifiOff,
  RefreshCw,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Clock,
  Heart,
  Volume2,
  Sun,
} from "lucide-react";

// Import feature screenshots
import featureEnergyTracking from "@/assets/feature-energy-tracking.png";
import featurePanicButton from "@/assets/feature-panic-button.png";
import featureContacts from "@/assets/feature-contacts.png";
import featurePassport from "@/assets/feature-passport.png";
import featureReminders from "@/assets/feature-reminders.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const Features = () => {
  const mainFeatures = [
    {
      id: "energy-tracking",
      icon: Battery,
      title: "Energy Level Tracking",
      tagline: "Understand your patterns, manage your day",
      description:
        "Track your energy levels throughout the day with a simple 1-5 scale. Over time, you'll discover patterns that help you understand what affects your energy and make better decisions about your activities.",
      image: featureEnergyTracking,
      imageAlt: "NeuroSentio energy tracking interface showing energy level 3",
      benefits: [
        "Quick logging with just one tap",
        "Add optional notes about triggers or context",
        "Visual charts show your energy patterns over time",
        "Identify peak energy times and low points",
        "Share insights with therapists or support workers",
        "All data stored securely and privately",
      ],
      howItWorks: [
        "Open the app and tap your current energy level (1-5)",
        "Optionally add a note about what's happening",
        "View your history to spot patterns",
        "Use insights to plan your day better",
      ],
    },
    {
      id: "panic-button",
      icon: AlertCircle,
      title: "Panic Button & Safe Mode",
      tagline: "Calm support when you need it most",
      description:
        "When you're feeling overwhelmed, the Panic Button activates Safe Mode—a calming experience designed to help you regain composure. It's always there when you need it, activated by a simple 2-second hold.",
      image: featurePanicButton,
      imageAlt: "NeuroSentio panic button interface with hold instruction",
      benefits: [
        "2-second hold prevents accidental activation",
        "20-minute calming countdown timer",
        "Soothing breathing animations guide you",
        "Optional notification to your safety contacts",
        "Logged for your personal records",
        "Works completely offline",
      ],
      howItWorks: [
        "Press and hold the Panic Button for 2 seconds",
        "Safe Mode activates with calming visuals",
        "Follow the breathing animations if helpful",
        "Contacts are notified (if you've set this up)",
        "Timer counts down as you calm down",
        "Exit anytime you feel ready",
      ],
    },
    {
      id: "safety-contacts",
      icon: Users,
      title: "Safety Contacts",
      tagline: "Your trusted people, always within reach",
      description:
        "Store your most important contacts for quick access during difficult moments. Import from your device or add manually. Your safety contacts can be notified when you activate Safe Mode.",
      image: featureContacts,
      imageAlt: "NeuroSentio emergency contacts list interface",
      benefits: [
        "Import contacts directly from your device",
        "Add custom relationship labels",
        "Quick-dial with one tap",
        "Automatic notifications in Safe Mode",
        "Privacy-protected storage",
        "Works offline for calling",
      ],
      howItWorks: [
        "Go to Safety Contacts in the app",
        "Tap 'Add Contact' or 'Import from Device'",
        "Add their relationship (parent, therapist, friend)",
        "Choose notification preferences",
        "Access them anytime from the main screen",
      ],
    },
    {
      id: "personal-passport",
      icon: CreditCard,
      title: "Personal Passport",
      tagline: "Your essential information, ready when needed",
      description:
        "A digital card containing your essential information for emergency situations. Includes communication preferences, sensory needs, medical details, and emergency contacts. Displays at maximum brightness for easy visibility.",
      image: featurePassport,
      imageAlt: "NeuroSentio personal passport ID card interface",
      benefits: [
        "Customizable information fields",
        "Maximum brightness for visibility",
        "Communication preferences clearly shown",
        "Medical and sensory information",
        "Emergency contact details",
        "Quick access from any screen",
      ],
      howItWorks: [
        "Open your Personal Passport from the menu",
        "Fill in information you want to share",
        "Add communication preferences and needs",
        "Include any medical information",
        "Show to helpers during emergencies",
        "Screen brightness maximizes automatically",
      ],
    },
    {
      id: "reminders",
      icon: Bell,
      title: "Smart Reminders",
      tagline: "Gentle check-ins, on your schedule",
      description:
        "Customizable notifications remind you to check in with your energy levels. Set your preferred times and frequency. Designed to be gentle and non-intrusive, respecting your sensory needs.",
      image: featureReminders,
      imageAlt: "NeuroSentio reminder settings interface with toggles",
      benefits: [
        "Fully customizable timing",
        "Set quiet hours when you won't be disturbed",
        "Timezone-aware scheduling",
        "Gentle, non-intrusive alerts",
        "Skip reminders on difficult days",
        "Consistent check-in habit building",
      ],
      howItWorks: [
        "Go to Settings > Reminders",
        "Enable check-in reminders",
        "Choose your preferred times",
        "Set quiet hours if needed",
        "Receive gentle notifications",
        "Tap to log your energy quickly",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: WifiOff,
      title: "Offline-First Design",
      description:
        "All core features work without internet. Your data is stored locally first, ensuring the app is always ready when you need it.",
    },
    {
      icon: RefreshCw,
      title: "Seamless Cloud Sync",
      description:
        "When connected, your data syncs automatically across all your devices. Encrypted and secure, working quietly in the background.",
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description:
        "No tracking, no data selling, no third-party analytics. Your personal information stays personal. Always.",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description:
        "Available on iOS and Android with the same great experience. Built with Flutter for native performance on both platforms.",
    },
    {
      icon: Sun,
      title: "Theme Options",
      description:
        "Choose between light, dark, or deep dark themes. Find the option that's most comfortable for your sensory needs.",
    },
    {
      icon: Volume2,
      title: "Sensory-Friendly",
      description:
        "Designed with the autism community. Calm colors, minimal animations, and clear interfaces that don't overwhelm.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary to-primary/95 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6"
            >
              <Smartphone className="w-8 h-8 text-accent" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
            >
              Features
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8"
            >
              Powerful tools designed with simplicity and accessibility in mind
            </motion.p>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {mainFeatures.map((feature) => (
                <a
                  key={feature.id}
                  href={`#${feature.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  <feature.icon className="w-4 h-4" />
                  {feature.title.split(" ")[0]}
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Features */}
        {mainFeatures.map((feature, index) => (
          <section
            key={feature.id}
            id={feature.id}
            className={`py-16 md:py-24 overflow-hidden ${index % 2 === 1 ? "bg-muted/30" : ""}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {feature.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-accent font-medium mb-4">
                    {feature.tagline}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="mb-8"
                  >
                    <h3 className="font-semibold text-foreground mb-4">
                      Key Benefits
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, bIndex) => (
                        <motion.li
                          key={bIndex}
                          variants={staggerItem}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* How It Works */}
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      How It Works
                    </h3>
                    <ol className="space-y-2">
                      {feature.howItWorks.map((step, sIndex) => (
                        <li
                          key={sIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-sm font-medium flex items-center justify-center">
                            {sIndex + 1}
                          </span>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                  className={`flex justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="relative w-full max-w-[300px] rounded-2xl shadow-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional Features Grid */}
        <section className="py-16 md:py-24 bg-primary overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                And Much More
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Additional features that make NeuroSentio a complete solution
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-primary-foreground/5 backdrop-blur rounded-2xl border border-primary-foreground/10 p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="container mx-auto px-4 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-6">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Take Control?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Download NeuroSentio today and start understanding your energy
              patterns, staying safe, and managing your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#download">
                <Button variant="accent" size="lg">
                  Download Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link to="/support">
                <Button variant="outline" size="lg">
                  Questions? Get Help
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
