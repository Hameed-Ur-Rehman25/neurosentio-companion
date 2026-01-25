import { Shield, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 pb-16 md:pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                Track Your Energy.
                <br />
                <span className="text-accent">Manage Your World.</span>
                <br />
                Stay Safe.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
                An empowering app designed for the autism community. Take control of your well-being with energy tracking, panic support, and personal safety tools.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#download">
                  Download for iOS
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <TrustBadge icon={<Shield className="w-5 h-5" />} text="Privacy-first" />
              <TrustBadge icon={<WifiOff className="w-5 h-5" />} text="Works offline" />
              <TrustBadge icon={<Wifi className="w-5 h-5" />} text="Syncs securely" />
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up delay-200">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />
              
              {/* Phone mockup */}
              <img
                src={appMockup}
                alt="NeuroSentio app showing energy tracking dashboard with a 75% energy level indicator"
                className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-primary-foreground/70">
    <span className="text-accent">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default HeroSection;
