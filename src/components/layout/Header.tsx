"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["hero", "why-talent", "about", "talents", "benefits", "assessment", "faq", "register"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md",
        isScrolled
          ? "shadow-sm border-b border-slate-100 py-3"
          : "border-b border-transparent py-4 md:py-5"
      )}
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-white shadow-subtle group-hover:bg-brand-blue transition-colors">
            <Sparkles className="w-5 h-5 text-accent-yellow" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-navy-900">
              Kenali<span className="text-brand-blue">Bakat</span>
            </span>
            <span className="text-[10px] text-text-secondary font-medium tracking-wide uppercase">
              Talents Mapping
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems
            .filter((item) => !item.isCta)
            .map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-blue relative py-1",
                    isActive
                      ? "text-brand-blue font-semibold"
                      : "text-text-primary"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full" />
                  )}
                </a>
              );
            })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              const el = document.getElementById("register");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Mulai Kenali Bakat
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl px-6 py-6 transition-all duration-300 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navItems
              .filter((item) => !item.isCta)
              .map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={cn(
                      "py-3 px-4 rounded-xl text-base font-medium transition-colors",
                      isActive
                        ? "bg-blue-50 text-brand-blue font-semibold"
                        : "text-text-primary hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            <div className="pt-3">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById("register");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Mulai Kenali Bakat
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
