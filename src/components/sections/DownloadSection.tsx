import { Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Ready to Take Control?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Download NeuroSentio for free and start your journey to better energy management and personal safety.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" className="gap-3" asChild>
              <a href="#" aria-label="Download on the App Store">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
            </Button>
            <Button variant="accent" size="xl" className="gap-3" asChild>
              <a href="#" aria-label="Get it on Google Play">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </Button>
          </div>

          {/* Features reminder */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground pt-4">
            <span>✓ Free forever</span>
            <span>✓ No ads</span>
            <span>✓ Works offline</span>
            <span>✓ Privacy-first</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
