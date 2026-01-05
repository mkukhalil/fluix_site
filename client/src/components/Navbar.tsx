import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="bg-primary p-2 rounded-lg">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <span className={cn(
            "text-xl font-bold font-heading",
            scrolled ? "text-primary" : "text-white md:text-white"
          )}>
            AutoAI Solutions
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-gray-600" : "text-gray-200"
              )}
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25"
            onClick={() => handleNavClick("#contact")}
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-md transition-colors",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-2 px-4 text-gray-800 hover:bg-gray-50 rounded-lg font-medium"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="w-full rounded-full bg-accent hover:bg-accent/90 text-white"
            onClick={() => handleNavClick("#contact")}
          >
            Book Free Demo
          </Button>
        </div>
      )}
    </nav>
  );
}
