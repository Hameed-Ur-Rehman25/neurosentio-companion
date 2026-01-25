import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Eye, Server, Trash2, Lock, Mail, FileText, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              <p className="text-lg text-primary-foreground/80">
                Your privacy is our priority. We believe you have the right to know exactly what data we collect and how we protect it.
              </p>
              <p className="text-sm text-primary-foreground/60">
                Last updated: January 25, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Promise */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-accent" />
                  Our Privacy Promise
                </h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>We will <strong>never</strong> sell or share your personal data with third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>We use <strong>no</strong> third-party tracking, analytics, or advertising</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Your data is <strong>encrypted</strong> both on your device and in transit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>You have <strong>full control</strong> to export or delete your data at any time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-12">
              {/* What We Collect */}
              <PolicySection
                icon={<Eye className="w-6 h-6" />}
                title="What Information We Collect"
              >
                <p className="mb-4">
                  We collect only the minimum information necessary to provide you with a functional and helpful experience. Here's exactly what we store:
                </p>
                
                <h4 className="font-semibold text-lg mb-2">Account Information</h4>
                <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                  <li><strong>Email address</strong> – Used solely for authentication and account recovery</li>
                  <li><strong>Password</strong> – Stored as a secure hash (we never see your actual password)</li>
                </ul>

                <h4 className="font-semibold text-lg mb-2">App Data (Stored Locally & Encrypted in Cloud)</h4>
                <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                  <li><strong>Energy logs</strong> – Your energy level entries, timestamps, and notes</li>
                  <li><strong>Safety contacts</strong> – Names and phone numbers you choose to add</li>
                  <li><strong>Personal passport info</strong> – Emergency information you create</li>
                  <li><strong>App preferences</strong> – Theme, notification settings, timezone</li>
                </ul>

                <h4 className="font-semibold text-lg mb-2">What We DON'T Collect</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Location data</li>
                  <li>Device identifiers or fingerprints</li>
                  <li>Usage analytics or behavior tracking</li>
                  <li>Contacts beyond what you explicitly add</li>
                  <li>Health data from other apps</li>
                  <li>Browsing history or app usage patterns</li>
                </ul>
              </PolicySection>

              {/* How We Protect */}
              <PolicySection
                icon={<Server className="w-6 h-6" />}
                title="How We Protect Your Data"
              >
                <p className="mb-4">
                  Security is built into every layer of NeuroSentio:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">End-to-End Encryption</h4>
                    <p className="text-muted-foreground">
                      All your personal data is encrypted before it leaves your device. Even if someone intercepted the data in transit, they couldn't read it. We use industry-standard AES-256 encryption.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Secure Cloud Storage</h4>
                    <p className="text-muted-foreground">
                      When you choose to sync, your encrypted data is stored securely using Supabase, which provides enterprise-grade security with SOC 2 Type II compliance, automatic backups, and geographic redundancy.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Offline-First Architecture</h4>
                    <p className="text-muted-foreground">
                      The app works completely offline. Your data stays on your device by default and only syncs when you're connected and have enabled cloud backup. You're always in control.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Secure Authentication</h4>
                    <p className="text-muted-foreground">
                      We use secure token-based authentication. Your password is never stored in plain text – only a cryptographic hash. Sessions are managed securely with automatic expiration.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">HTTPS Everywhere</h4>
                    <p className="text-muted-foreground">
                      All communications between the app and our servers use HTTPS with TLS 1.3, ensuring your data is protected in transit.
                    </p>
                  </div>
                </div>
              </PolicySection>

              {/* Your Rights */}
              <PolicySection
                icon={<UserCheck className="w-6 h-6" />}
                title="Your Rights"
              >
                <p className="mb-4">
                  You have complete control over your data. Here's what you can do:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Access Your Data</h4>
                    <p className="text-muted-foreground">
                      View all your data anytime within the app. Every piece of information you've entered is accessible to you.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Export Your Data</h4>
                    <p className="text-muted-foreground">
                      Download a complete copy of your data in a standard format (JSON/CSV) at any time. Your data belongs to you.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Delete Your Data</h4>
                    <p className="text-muted-foreground">
                      Request complete deletion of your account and all associated data. Once deleted, your data is permanently removed from our servers within 30 days.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Opt Out of Cloud Sync</h4>
                    <p className="text-muted-foreground">
                      Use the app entirely offline without ever syncing to our servers. Your data stays only on your device.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Correct Your Information</h4>
                    <p className="text-muted-foreground">
                      Update or correct any of your personal information at any time through the app settings.
                    </p>
                  </div>
                </div>
              </PolicySection>

              {/* Data Retention */}
              <PolicySection
                icon={<Trash2 className="w-6 h-6" />}
                title="Data Retention"
              >
                <p className="mb-4">
                  We keep your data only as long as you need it:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Active accounts:</strong> Data is retained as long as your account is active</li>
                  <li><strong>Deleted accounts:</strong> All data is permanently deleted within 30 days</li>
                  <li><strong>Local data:</strong> Stored on your device until you delete it or uninstall the app</li>
                  <li><strong>Backups:</strong> Encrypted backups are retained for 90 days for recovery purposes</li>
                </ul>
              </PolicySection>

              {/* Third Parties */}
              <PolicySection
                icon={<FileText className="w-6 h-6" />}
                title="Third-Party Services"
              >
                <p className="mb-4">
                  We use a minimal set of trusted services to operate NeuroSentio:
                </p>

                <div className="space-y-4">
                  <div className="bg-secondary rounded-xl p-4">
                    <h4 className="font-semibold mb-1">Supabase</h4>
                    <p className="text-sm text-muted-foreground">
                      Provides secure cloud storage, authentication, and database services. SOC 2 Type II compliant. <a href="https://supabase.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">View their privacy policy</a>
                    </p>
                  </div>

                  <div className="bg-secondary rounded-xl p-4">
                    <h4 className="font-semibold mb-1">Apple App Store / Google Play Store</h4>
                    <p className="text-sm text-muted-foreground">
                      Used for app distribution. They may collect their own analytics about downloads. We don't receive personally identifiable information from these stores.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground">
                  We do <strong>not</strong> use: Google Analytics, Facebook SDK, advertising networks, or any other tracking services.
                </p>
              </PolicySection>

              {/* Children's Privacy */}
              <PolicySection
                icon={<Shield className="w-6 h-6" />}
                title="Children's Privacy"
              >
                <p className="text-muted-foreground">
                  NeuroSentio is designed for users of all ages, including minors with parental consent. We do not knowingly collect personal information from children under 13 without parental consent. If you believe a child under 13 has provided us with personal information without consent, please contact us immediately.
                </p>
              </PolicySection>

              {/* Contact */}
              <PolicySection
                icon={<Mail className="w-6 h-6" />}
                title="Contact Us"
              >
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, your data, or your rights, please contact us:
                </p>
                <div className="bg-secondary rounded-xl p-6">
                  <p className="font-medium">NeuroSentio Privacy Team</p>
                  <p className="text-muted-foreground">Email: privacy@neurosentio.app</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We aim to respond to all privacy inquiries within 48 hours.
                  </p>
                </div>
              </PolicySection>

              {/* Changes */}
              <PolicySection
                icon={<FileText className="w-6 h-6" />}
                title="Changes to This Policy"
              >
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the app and update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
                </p>
              </PolicySection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const PolicySection = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
      <span className="text-accent">{icon}</span>
      {title}
    </h3>
    <div className="prose prose-lg max-w-none">{children}</div>
  </section>
);

export default PrivacyPolicy;
