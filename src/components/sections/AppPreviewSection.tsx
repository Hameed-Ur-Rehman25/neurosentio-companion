import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Battery, AlertCircle, CreditCard, Bell, TrendingUp } from "lucide-react";

// Import screen images
import panicButtonScreen from "@/assets/screens/panic-button.png";
import energyTrackingScreen from "@/assets/screens/energy-tracking.png";
import energyHistoryScreen from "@/assets/screens/energy-history.png";
import passportScreen from "@/assets/screens/passport.png";
import remindersScreen from "@/assets/screens/reminders.png";

const screens = [
  {
    id: "panic",
    title: "Panic Button",
    description: "Quick 2-second hold activation starts a calming countdown with breathing animations and instantly notifies your safety contacts.",
    icon: AlertCircle,
    image: panicButtonScreen,
    color: "from-destructive/20 to-destructive/5",
    iconColor: "text-destructive",
    accentColor: "bg-destructive/20",
  },
  {
    id: "energy",
    title: "Energy Tracking",
    description: "Log your energy levels with a simple tap. Choose between High, Medium, or Low to track how you're feeling throughout the day.",
    icon: Battery,
    image: energyTrackingScreen,
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    accentColor: "bg-accent/20",
  },
  {
    id: "history",
    title: "Energy History",
    description: "View detailed statistics, trends, and patterns in your energy levels over time with beautiful charts and insights.",
    icon: TrendingUp,
    image: energyHistoryScreen,
    color: "from-calm-purple/20 to-calm-purple/5",
    iconColor: "text-calm-purple",
    accentColor: "bg-calm-purple/20",
  },
  {
    id: "reminders",
    title: "Smart Reminders",
    description: "Set customizable check-in times to remind you to log your energy levels throughout the day.",
    icon: Bell,
    image: remindersScreen,
    color: "from-gentle-green/20 to-gentle-green/5",
    iconColor: "text-gentle-green",
    accentColor: "bg-gentle-green/20",
  },
  {
    id: "passport",
    title: "Personal Passport",
    description: "Display your communication preferences in large, clear format. Perfect for showing others how they can best support you.",
    icon: CreditCard,
    image: passportScreen,
    color: "from-accent/20 to-calm-purple/5",
    iconColor: "text-accent",
    accentColor: "bg-accent/20",
  },
];

const AppPreviewSection = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-calm-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-sm font-medium text-accent">
            📱 App Preview
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            See the app in <span className="gradient-text">action</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore the key features designed to help you track energy, stay safe, and communicate your needs.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            {/* Phone frame */}
            <div className="relative">
              {/* Glow effect behind phone */}
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`absolute inset-0 bg-gradient-to-br ${screens[activeScreen].color} blur-3xl scale-110 rounded-[3rem]`}
              />
              
              {/* Phone body */}
              <div className="relative bg-[#161C21] rounded-[3rem] p-3 shadow-2xl border border-white/10">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />
                
                {/* Screen */}
                <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[660px] rounded-[2.5rem] overflow-hidden bg-[#161C21]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeScreen}
                      src={screens[activeScreen].image}
                      alt={screens[activeScreen].title}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
              </div>

              {/* Floating indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-4 md:-right-16 top-20 glass rounded-2xl p-4 border border-border/50"
              >
                <div className={`w-12 h-12 rounded-xl ${screens[activeScreen].accentColor} flex items-center justify-center mb-2`}>
                  {(() => {
                    const Icon = screens[activeScreen].icon;
                    return <Icon className={`w-6 h-6 ${screens[activeScreen].iconColor}`} />;
                  })()}
                </div>
                <p className="text-xs text-muted-foreground">Current</p>
                <p className="text-sm font-semibold text-foreground">{screens[activeScreen].title}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 order-1 lg:order-2"
          >
            {screens.map((screen, index) => {
              const Icon = screen.icon;
              const isActive = activeScreen === index;
              
              return (
                <motion.button
                  key={screen.id}
                  onClick={() => setActiveScreen(index)}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-card border-accent/30 shadow-lg"
                      : "bg-card/50 border-border/50 hover:bg-card hover:border-border"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      className={`w-12 h-12 rounded-xl ${screen.accentColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className={`w-6 h-6 ${screen.iconColor}`} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${isActive ? "text-accent" : "text-foreground"}`}>
                          {screen.title}
                        </h3>
                        {isActive && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-accent"
                          />
                        )}
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            {screen.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Progress bar for active item */}
                  {isActive && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      onAnimationComplete={() => {
                        setActiveScreen((prev) => (prev + 1) % screens.length);
                      }}
                      className="h-0.5 bg-accent/50 mt-4 rounded-full origin-left"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile screen indicators */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveScreen(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeScreen === index ? "w-8 bg-accent" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
