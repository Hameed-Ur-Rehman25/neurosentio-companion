import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import {
  Accessibility,
  Eye,
  Keyboard,
  Monitor,
  Volume2,
  MousePointer,
  CheckCircle,
  AlertCircle,
  Heart,
  Mail,
  RefreshCw,
} from "lucide-react";

const AccessibilityStatement = () => {
  const accessibilityFeatures = [
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description:
        "All interactive elements are accessible via keyboard. Use Tab to navigate, Enter or Space to activate, and Escape to close dialogs.",
    },
    {
      icon: Eye,
      title: "Screen Reader Support",
      description:
        "Semantic HTML and ARIA labels ensure compatibility with screen readers like VoiceOver, NVDA, and JAWS.",
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description:
        "The website adapts to all screen sizes and orientations. Text can be resized up to 200% without loss of functionality.",
    },
    {
      icon: MousePointer,
      title: "Focus Indicators",
      description:
        "Clear visual focus indicators help keyboard users track their position on the page.",
    },
    {
      icon: Volume2,
      title: "No Audio Auto-Play",
      description:
        "We never auto-play audio or video content. All media requires user interaction to start.",
    },
    {
      icon: RefreshCw,
      title: "Reduced Motion Support",
      description:
        "Animations respect the 'prefers-reduced-motion' setting for users who are sensitive to motion.",
    },
  ];

  const wcagCriteria = [
    {
      level: "Perceivable",
      items: [
        "Text alternatives for non-text content",
        "Captions and alternatives for multimedia",
        "Content adaptable to different presentations",
        "Sufficient color contrast (minimum 4.5:1 for normal text)",
        "Text resizable up to 200%",
      ],
    },
    {
      level: "Operable",
      items: [
        "All functionality available via keyboard",
        "No keyboard traps",
        "Skip navigation links provided",
        "Page titles describe topic or purpose",
        "Focus order preserves meaning",
        "Link purpose clear from context",
      ],
    },
    {
      level: "Understandable",
      items: [
        "Page language identified in HTML",
        "Consistent navigation across pages",
        "Consistent component identification",
        "Error identification and suggestions",
        "Labels and instructions for inputs",
      ],
    },
    {
      level: "Robust",
      items: [
        "Valid HTML markup",
        "Name, role, and value available for UI components",
        "Status messages available to assistive technologies",
      ],
    },
  ];

  const knownLimitations = [
    {
      area: "Third-Party Content",
      description:
        "Some external content (such as app store widgets) may not meet all accessibility standards. We work with third parties to improve accessibility where possible.",
    },
    {
      area: "PDF Documents",
      description:
        "If we provide any PDF documents, we strive to make them accessible. Alternative formats are available upon request.",
    },
    {
      area: "Legacy Content",
      description:
        "Older content may not fully meet current standards. We are actively reviewing and updating legacy pages.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary to-primary/95">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
              <Accessibility className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Accessibility Statement
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Our commitment to making NeuroSentio accessible to everyone
            </p>
            <p className="text-primary-foreground/60 mt-4">
              Last updated: January 2026
            </p>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      Our Commitment
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      NeuroSentio is committed to ensuring digital accessibility for people of all abilities. We believe everyone deserves equal access to information and functionality, and we continuously work to improve the accessibility of our website and mobile application.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      As an app designed for the autism community, accessibility is not just a compliance requirement—it's central to our mission. We understand that our users may have diverse sensory, cognitive, and motor needs, and we design with these in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conformance Status */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  WCAG 2.1 AA Compliance
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-accent/30 p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Conformance Level: AA
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The NeuroSentio website substantially conforms to WCAG 2.1 Level AA. "Substantially conforms" means that most content meets the guidelines, and we are actively working to address any gaps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {wcagCriteria.map((criteria, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {criteria.level}
                    </h3>
                    <ul className="space-y-2">
                      {criteria.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Accessibility Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key accessibility features implemented across our website and app
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {accessibilityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Known Limitations */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Known Limitations
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Areas where we're still working to improve accessibility
                </p>
              </div>

              <div className="space-y-6">
                {knownLimitations.map((limitation, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {limitation.area}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {limitation.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feedback & Contact */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-6">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Feedback Welcome
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                We welcome your feedback on the accessibility of NeuroSentio. If you encounter any barriers or have suggestions for improvement, please let us know.
              </p>

              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 text-left mb-8">
                <h3 className="font-semibold text-foreground mb-4">
                  How to Report an Issue
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">1.</span>
                    <span>Describe the accessibility barrier you encountered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">2.</span>
                    <span>Tell us which page or feature was affected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">3.</span>
                    <span>Share what assistive technology you were using (if any)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">4.</span>
                    <span>Include your browser and device information if possible</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/support">
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
                    <Mail className="w-5 h-5" />
                    Report an Issue
                  </button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>
          </div>
        </section>

        {/* Continuous Improvement */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      Continuous Improvement
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We are committed to ongoing accessibility improvements. Our efforts include:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span>Regular accessibility audits and testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span>Training our team on accessibility best practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span>Including accessibility in our development process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span>Testing with real users who have disabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span>Promptly addressing reported accessibility issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityStatement;
