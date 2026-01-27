import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";

const faqs = [
  {
    question: "What is NeuroSentio and who is it for?",
    answer:
      "NeuroSentio is a mobile app designed specifically for the autism community to track energy levels, manage sensory needs, and stay safe. It's built for autistic individuals, their families, caregivers, and support networks who want a simple, respectful tool for daily well-being.",
  },
  {
    question: "How does the Energy Tracking feature work?",
    answer:
      "Simply log how you're feeling at any moment using our intuitive visual scale. Add notes about triggers, environments, or anything relevant. Over time, the app reveals patterns in your energy levels, helping you and your support network better understand your needs.",
  },
  {
    question: "What is the Panic Button and Safe Mode?",
    answer:
      "The Panic Button activates with a 2-second hold, starting a calming countdown with gentle breathing animations. It can automatically notify your safety contacts and guides you through grounding exercises. Safe Mode creates a distraction-free, calming interface when you need it most.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. NeuroSentio is built with privacy at its core. The app works offline-first, meaning your data stays on your device. All information is encrypted end-to-end, we never track your behavior, and you can export or delete your data anytime. Your information is never shared or sold.",
  },
  {
    question: "Can I share my information with caregivers or medical professionals?",
    answer:
      "Yes! The Personal Passport feature lets you create an emergency info card with your communication preferences, sensory needs, and medical details. You control exactly what to share and with whom. It's designed to help others support you better in any situation.",
  },
  {
    question: "Does the app work without an internet connection?",
    answer:
      "Yes, NeuroSentio is designed offline-first. All core features work without internet access. Your data syncs securely when you choose to connect, but you're never dependent on a connection for the app to function.",
  },
  {
    question: "How do Smart Reminders work?",
    answer:
      "Smart Reminders are customizable, timezone-aware check-in notifications. You can set gentle alerts for energy logging, medication, self-care activities, or anything else. They're designed to be non-intrusive and respect your sensory preferences.",
  },
  {
    question: "Is NeuroSentio free to use?",
    answer:
      "NeuroSentio offers a free version with core features. Premium features like advanced analytics, unlimited safety contacts, and cloud backup are available through an affordable subscription. We believe everyone deserves access to well-being tools.",
  },
];

const FAQSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={containerRef} id="faq" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        {/* Header with parallax */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about NeuroSentio. Can't find what you're looking for? Reach out to our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion with parallax */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5 [&[data-state=open]]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="/support"
              className="text-accent font-medium hover:underline underline-offset-4"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
