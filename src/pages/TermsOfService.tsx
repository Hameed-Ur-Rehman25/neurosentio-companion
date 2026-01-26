import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import {
  FileText,
  UserCheck,
  AlertTriangle,
  Scale,
  RefreshCw,
  Mail,
  Shield,
  Smartphone,
  Ban,
  Globe,
} from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: UserCheck,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By downloading, installing, or using NeuroSentio, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.",
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 13 years old to use NeuroSentio. If you are under 18, you should review these terms with a parent or guardian. Parents and caregivers may create accounts on behalf of minors under their care.",
        },
        {
          subtitle: "Account Responsibility",
          text: "If you create an account, you are responsible for maintaining the security of your login credentials and for all activities that occur under your account.",
        },
      ],
    },
    {
      icon: Smartphone,
      title: "Use of the Service",
      content: [
        {
          subtitle: "Personal Use",
          text: "NeuroSentio is provided for your personal, non-commercial use. You may use the app to track your energy levels, manage safety contacts, and access the features provided.",
        },
        {
          subtitle: "Intended Purpose",
          text: "The app is designed as a personal wellness and safety tool for individuals on the autism spectrum. It is not a medical device and should not be used as a substitute for professional medical advice, diagnosis, or treatment.",
        },
        {
          subtitle: "Accurate Information",
          text: "You agree to provide accurate information when setting up your Personal Passport and emergency contacts. Inaccurate information may affect the usefulness of these features in emergency situations.",
        },
      ],
    },
    {
      icon: Ban,
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Acceptable Use",
          text: "You agree not to misuse the service, attempt to access systems without authorization, interfere with other users, or use the app for any unlawful purpose.",
        },
        {
          subtitle: "Prohibited Activities",
          text: "You may not: reverse engineer the app, attempt to extract source code, distribute modified versions, use automated systems to access the service, or impersonate others.",
        },
        {
          subtitle: "Content Responsibility",
          text: "You are solely responsible for the information you enter into the app, including energy logs, notes, passport information, and contact details.",
        },
      ],
    },
    {
      icon: AlertTriangle,
      title: "Service Limitations",
      content: [
        {
          subtitle: "Not a Medical Service",
          text: "NeuroSentio is a personal wellness tool, not a medical device or healthcare service. The app does not provide medical advice, and energy tracking data should not be used for clinical diagnosis.",
        },
        {
          subtitle: "Emergency Services",
          text: "The Panic Button and Safety Contact features are designed to help you communicate with your personal contacts. They are NOT a replacement for emergency services. In a medical emergency, always contact emergency services (911, 999, 112, etc.).",
        },
        {
          subtitle: "No Guaranteed Availability",
          text: "While we strive for high availability, we cannot guarantee the service will be available at all times. The offline-first design helps ensure core features work without internet, but some features require connectivity.",
        },
        {
          subtitle: "Feature Changes",
          text: "We may add, modify, or remove features over time to improve the service. We will notify users of significant changes through the app or email.",
        },
      ],
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Disclaimer of Warranties",
          text: 'NeuroSentio is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the app will be error-free, uninterrupted, or meet your specific requirements.',
        },
        {
          subtitle: "Limitation of Damages",
          text: "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.",
        },
        {
          subtitle: "Maximum Liability",
          text: "Our total liability for any claims related to the service shall not exceed the amount you paid for the service (which is zero, as the app is free).",
        },
        {
          subtitle: "Third-Party Services",
          text: "We are not responsible for the availability, accuracy, or content of any third-party services that may be linked or integrated with the app.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Our Rights",
          text: "NeuroSentio, including its design, features, code, and content, is protected by intellectual property laws. You may not copy, modify, or distribute the app without permission.",
        },
        {
          subtitle: "Your Data",
          text: "You retain ownership of the personal data you enter into the app. We do not claim any ownership rights over your energy logs, notes, or personal information.",
        },
        {
          subtitle: "Feedback",
          text: "If you provide feedback or suggestions about the app, you grant us the right to use that feedback to improve the service without compensation or attribution.",
        },
      ],
    },
    {
      icon: RefreshCw,
      title: "Termination & Changes",
      content: [
        {
          subtitle: "Your Right to Terminate",
          text: "You may stop using NeuroSentio at any time. You can delete your account and all associated data through the app settings.",
        },
        {
          subtitle: "Our Right to Terminate",
          text: "We may suspend or terminate your access to the service if you violate these terms, engage in fraudulent activity, or if required by law.",
        },
        {
          subtitle: "Changes to Terms",
          text: "We may update these Terms of Service from time to time. Significant changes will be communicated through the app or email. Continued use after changes constitutes acceptance.",
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use the app ends. Provisions that should survive termination (such as limitation of liability) will remain in effect.",
        },
      ],
    },
    {
      icon: Globe,
      title: "General Provisions",
      content: [
        {
          subtitle: "Governing Law",
          text: "These terms are governed by applicable laws. Any disputes shall be resolved through appropriate legal channels in the jurisdiction where we operate.",
        },
        {
          subtitle: "Severability",
          text: "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
        },
        {
          subtitle: "Entire Agreement",
          text: "These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and NeuroSentio regarding the use of the service.",
        },
        {
          subtitle: "No Waiver",
          text: "Our failure to enforce any right or provision of these terms does not constitute a waiver of that right or provision.",
        },
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
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Clear and fair terms for using NeuroSentio
            </p>
            <p className="text-primary-foreground/60 mt-4">
              Last updated: January 2026
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Welcome to NeuroSentio
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms of Service govern your use of the NeuroSentio mobile application. We've written them to be as clear and straightforward as possible.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NeuroSentio is designed to help you track your energy levels, manage sensory needs, and stay safe. While we take great care in developing and maintaining the app, please understand that it is a personal wellness tool and not a medical device.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using NeuroSentio, you agree to these terms. Please also review our{" "}
                  <Link to="/privacy" className="text-accent hover:underline font-medium">
                    Privacy Policy
                  </Link>
                  , which explains how we handle your data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 md:p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="font-medium text-foreground mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl border border-accent/30 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      Important Reminder
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      NeuroSentio is a personal wellness and safety tool. It is <strong className="text-foreground">not</strong> a medical device, and the Panic Button feature is <strong className="text-foreground">not</strong> a replacement for emergency services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      In a medical emergency, always contact your local emergency services immediately (911, 999, 112, or your local emergency number).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-6">
              <Mail className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              If you have any questions about these Terms of Service, please reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/support">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
                  <Mail className="w-5 h-5" />
                  Contact Support
                </button>
              </Link>
              <Link to="/privacy">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-border text-foreground font-medium hover:bg-muted transition-colors">
                  View Privacy Policy
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
