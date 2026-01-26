import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustLogosSection from "@/components/sections/TrustLogosSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PrivacySection from "@/components/sections/PrivacySection";
import CommunitySection from "@/components/sections/CommunitySection";
import DownloadSection from "@/components/sections/DownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustLogosSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CommunitySection />
        <PrivacySection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
