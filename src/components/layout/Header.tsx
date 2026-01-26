import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "/features", label: "All Features", isRoute: true },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#privacy", label: "Privacy" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setMobileMenuOpen(false);
    if (!isRoute && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-accent-glow"
          >
            <span className="text-accent-foreground font-bold text-base">N</span>
          </motion.div>
          <span className="font-semibold text-xl tracking-tight group-hover:text-accent transition-colors">
            NeuroSentio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="#privacy">Learn More</a>
          </Button>
          <Button variant="accent" size="sm" className="shadow-accent-glow" asChild>
            <a href="#download" className="flex items-center gap-1">
              Get the App
              <ChevronRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 -mr-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
            aria-label="Mobile navigation"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="container flex flex-col gap-2 py-4"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="flex items-center justify-between text-foreground hover:text-accent transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="flex items-center justify-between text-foreground hover:text-accent transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4 mt-2 border-t border-border"
              >
                <Button variant="accent" className="w-full shadow-accent-glow" asChild>
                  <a href="#download" onClick={() => handleNavClick("#download")}>
                    Get the App
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
