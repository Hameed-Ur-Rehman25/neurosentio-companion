import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Download,
  Shield,
  Smartphone,
  RefreshCw,
  Bell,
  Users,
  Send,
  Mail,
  MessageSquare,
  Wifi,
  WifiOff,
  Battery,
  Lock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 48 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Download,
      questions: [
        {
          q: "How do I download and install NeuroSentio?",
          a: "NeuroSentio is available for free on both iOS and Android. Visit the App Store (for iPhone/iPad) or Google Play Store (for Android devices) and search for 'NeuroSentio'. Tap 'Install' and the app will download automatically. Installation takes less than a minute.",
        },
        {
          q: "What devices are supported?",
          a: "NeuroSentio works on iOS 14.0 or later (iPhone, iPad) and Android 8.0 or later. The app is optimized for both phones and tablets, adapting its layout for the best experience on each device.",
        },
        {
          q: "How do I set up my account?",
          a: "When you first open the app, you'll be guided through a simple setup process. You can create an account with your email address, or use the app offline without an account. Creating an account enables cloud sync across your devices.",
        },
        {
          q: "Do I need to create an account to use the app?",
          a: "No, you can use NeuroSentio completely offline without an account. However, creating a free account enables cloud backup and sync across multiple devices. Your choice!",
        },
      ],
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      questions: [
        {
          q: "Is my data private and secure?",
          a: "Absolutely. Your privacy is our top priority. All data is encrypted both on your device and in the cloud. We never sell or share your data with third parties, and we don't use any tracking or analytics that could identify you.",
        },
        {
          q: "Where is my data stored?",
          a: "Your data is stored locally on your device first (offline-first design). If you have an account, encrypted backups are stored securely in the cloud. You can use the app entirely offline if you prefer.",
        },
        {
          q: "Can I delete all my data?",
          a: "Yes, you can delete your account and all associated data at any time from the app settings. This action is permanent and removes all your information from our servers within 30 days.",
        },
        {
          q: "Who can see my energy logs and personal information?",
          a: "Only you. Your data is encrypted and accessible only to you. We cannot read your energy logs, passport information, or any personal data. You control what you share and with whom.",
        },
      ],
    },
    {
      title: "Features & Usage",
      icon: Smartphone,
      questions: [
        {
          q: "How does energy tracking work?",
          a: "Tap the energy button to log your current energy level (1-5). You can add optional notes about what's affecting your energy. Over time, the app shows you patterns and trends to help you understand your energy better.",
        },
        {
          q: "What is the Panic Button and how do I use it?",
          a: "The Panic Button is activated by holding it for 2 seconds. This starts a 20-minute calming countdown with breathing animations. Your emergency contacts can be notified (if you've set this up). It's designed to help during overwhelming moments.",
        },
        {
          q: "How do I set up my Personal Passport?",
          a: "Go to the Passport section in the app and fill in the information you'd like to share in emergencies. This can include communication preferences, sensory needs, medical information, and emergency contacts. The passport uses maximum brightness for easy visibility.",
        },
        {
          q: "Can I customize the reminder notifications?",
          a: "Yes! Go to Settings > Notifications to customize when and how often you receive check-in reminders. You can set specific times, intervals, and quiet hours. All notifications are designed to be gentle and non-intrusive.",
        },
      ],
    },
    {
      title: "Sync & Offline",
      icon: RefreshCw,
      questions: [
        {
          q: "Does the app work offline?",
          a: "Yes! NeuroSentio is designed to work completely offline. All features function without an internet connection. When you're back online, your data automatically syncs to your account (if you have one).",
        },
        {
          q: "How does cloud sync work?",
          a: "When connected to the internet, your data is automatically encrypted and backed up to the cloud. This happens in the background and doesn't interrupt your use of the app. Syncing ensures your data is safe and accessible on all your devices.",
        },
        {
          q: "What happens if I log data on two devices before syncing?",
          a: "The app intelligently merges data from multiple devices. Each entry is timestamped, so nothing is lost. If there are any conflicts, the most recent version is kept while preserving all your energy logs.",
        },
        {
          q: "Can I use the app on multiple devices?",
          a: "Yes! With an account, your data syncs across all your devices. Log in with the same account on your phone, tablet, or any other supported device to access your information everywhere.",
        },
      ],
    },
    {
      title: "Cost & Availability",
      icon: HelpCircle,
      questions: [
        {
          q: "How much does NeuroSentio cost?",
          a: "NeuroSentio is completely free. There are no subscriptions, no premium features locked behind paywalls, and no in-app purchases. All features are available to everyone.",
        },
        {
          q: "Will there be paid features in the future?",
          a: "We are committed to keeping the core app free and accessible to everyone. If we ever introduce optional premium features, all current functionality will remain free forever.",
        },
        {
          q: "Is the app available in my country?",
          a: "NeuroSentio is available worldwide on both the App Store and Google Play. The app currently supports English, with more languages planned for future updates.",
        },
      ],
    },
  ];

  const troubleshootingItems = [
    {
      icon: WifiOff,
      title: "Sync Not Working",
      solutions: [
        "Check your internet connection",
        "Ensure you're logged into your account",
        "Try pulling down to refresh on the main screen",
        "Go to Settings > Sync and tap 'Force Sync'",
        "If issues persist, log out and back in",
      ],
    },
    {
      icon: Bell,
      title: "Notifications Not Appearing",
      solutions: [
        "Check that notifications are enabled in your device settings",
        "Open NeuroSentio settings and verify notification preferences",
        "Ensure the app isn't in battery saver mode",
        "Try toggling notifications off and on again",
        "Restart the app and your device",
      ],
    },
    {
      icon: Users,
      title: "Contact Import Issues",
      solutions: [
        "Ensure the app has permission to access your contacts",
        "Go to your device settings and enable contact access for NeuroSentio",
        "Try manually adding contacts if import fails",
        "Restart the app after granting permissions",
      ],
    },
    {
      icon: Lock,
      title: "Login Problems",
      solutions: [
        "Double-check your email address for typos",
        "Use the 'Forgot Password' option to reset",
        "Check your spam folder for verification emails",
        "Ensure you have a stable internet connection",
        "Try logging in on a different device to isolate the issue",
      ],
    },
    {
      icon: Battery,
      title: "Battery or Performance Issues",
      solutions: [
        "NeuroSentio is designed to be battery-efficient",
        "Check if background app refresh is causing drain",
        "Ensure your device's operating system is up to date",
        "Try closing and reopening the app",
        "Clear the app cache in Settings > Storage",
      ],
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
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Help & Support
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Find answers to common questions, troubleshoot issues, or reach out to our support team
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#faq" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                FAQ
              </a>
              <span className="text-muted">•</span>
              <a href="#troubleshooting" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                Troubleshooting
              </a>
              <span className="text-muted">•</span>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to the most common questions about NeuroSentio
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${categoryIndex}-${index}`}
                        className="border border-border rounded-xl px-4 data-[state=open]:bg-muted/30"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="text-foreground font-medium pr-4">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section id="troubleshooting" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Troubleshooting
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Solutions to common issues you might encounter
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-6">
              {troubleshootingItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.solutions.map((solution, sIndex) => (
                          <li
                            key={sIndex}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-accent mt-1.5">•</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still having issues? Our support team is here to help.
              </p>
              <a href="#contact">
                <Button variant="accent">Contact Support</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Can't find what you're looking for? Our support team is happy to help. We typically respond within 48 hours.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Email Support
                        </h3>
                        <p className="text-muted-foreground">
                          support@neurosentio.app
                        </p>
                        <p className="text-sm text-muted-foreground/70 mt-1">
                          Response within 48 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Feature Requests
                        </h3>
                        <p className="text-muted-foreground">
                          We love hearing your ideas!
                        </p>
                        <p className="text-sm text-muted-foreground/70 mt-1">
                          Use the form to suggest new features
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Tip:</strong> Before contacting support, check the FAQ and troubleshooting sections above - you might find an instant answer!
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Send us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our{" "}
                      <Link to="/privacy" className="text-accent hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
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

export default Support;
