import { Button } from "./ui/Button";
import { Stethoscope, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 transition-all duration-300">
      <div className={cn("max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300", isScrolled ? "glass shadow-md" : "glass bg-white/40")}>
        <a href="#" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-full pr-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-sm">
            <Stethoscope size={20} aria-hidden="true" />
          </div>
          <span className="font-heading font-semibold text-xl text-slate-900 tracking-tight">Dr. Elena</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm px-1">About</a>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm px-1">Services</a>
          <a href="#booking" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm px-1">Book Visit</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm px-1">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="dark" size="sm" className="hidden md:inline-flex">
            Patient Portal
          </Button>
          <button 
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden pt-28 px-6 pb-6 flex flex-col h-[100dvh]">
          <nav className="flex flex-col gap-6 text-center" aria-label="Mobile Navigation">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-heading font-medium text-slate-900 hover:text-brand-600 transition-colors">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-heading font-medium text-slate-900 hover:text-brand-600 transition-colors">Services</a>
            <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-heading font-medium text-slate-900 hover:text-brand-600 transition-colors">Book Visit</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-heading font-medium text-slate-900 hover:text-brand-600 transition-colors">FAQ</a>
          </nav>
          <div className="mt-auto pb-8 flex flex-col gap-4 w-full max-w-sm mx-auto">
             <Button variant="dark" size="lg" className="w-full">
              Patient Portal
             </Button>
             <Button variant="outline" size="lg" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Close Menu
             </Button>
          </div>
        </div>
      )}
    </header>
  );
}
