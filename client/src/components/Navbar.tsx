import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHomeLink, setShowHomeLink] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      const heroHeight = document.getElementById("home")?.offsetHeight || window.innerHeight;
      setShowHomeLink(!isHome || scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { name: "Home", href: "#home", show: showHomeLink },
    { name: "Services", href: "#services", show: true },
    { name: "About", href: "#about", show: true },
    { name: "Testimonials", href: "#testimonials", show: true },
  ];

  const handleNavClick = async (href: string) => {
    setIsOpen(false);
    if (!isHome) {
      await router.push("/" + href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = async () => {
    if (!isHome) {
      await router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isHome
          ? scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-transparent py-5"
          : "bg-white shadow-sm border-b border-gray-100 py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={handleLogoClick} className="flex items-center gap-3 focus:outline-none">
          <Image src="/logo.webp" alt="Fluix Logo" width={40} height={40} priority className="object-contain" />
          <span
            className={cn(
              "text-xl font-bold font-heading transition-colors",
              isHome && !scrolled ? "text-white" : "text-primary"
            )}
          >
            Fluix
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <AnimatePresence>
            {navLinks
              .filter((link) => link.show)
              .map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isHome && !scrolled ? "text-gray-200 hover:text-white" : "text-gray-600 hover:text-primary"
                  )}
                >
                  {link.name}
                </motion.button>
              ))}
          </AnimatePresence>

          <Button
            onClick={() => handleNavClick("#contact")}
            className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25"
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className={cn(
            "md:hidden p-2 rounded-md transition-colors",
            isHome && !scrolled ? "text-white" : "text-primary"
          )}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks
                .filter((link) => link.show)
                .map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-2 px-4 rounded-lg font-medium text-gray-800 hover:bg-gray-50 transition-all"
                  >
                    {link.name}
                  </button>
                ))}

              <Button
                onClick={() => handleNavClick("#contact")}
                className="w-full rounded-full bg-accent hover:bg-accent/90 text-white"
              >
                Book Free Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
