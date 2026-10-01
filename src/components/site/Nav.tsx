import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cnoteLogo from "@/assets/logo-cnote.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/bika-dms", label: "Bika DMS" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "glass px-4 py-2 shadow-[0_8px_40px_-12px_rgba(20,30,60,0.12)]"
              : "px-2 py-2"
          }`}
        >
          <Link to="/" className="flex items-center pl-2">
            <img 
              src={cnoteLogo} 
              alt="C-Note Logo" 
              className="h-14 w-auto object-contain transition-all hover:scale-[1.02]" 
              style={{ mixBlendMode: "multiply" }} 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "text-primary bg-primary/10 shadow-[inset_0_0_0_1px_rgba(var(--color-primary)/0.25)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/free-consultation"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-ink transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-full hover:bg-accent"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-5 mt-2 rounded-2xl glass p-4 shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => {
                const active = path === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? "bg-primary/10 text-primary border-l-2 border-gold pl-3.5"
                        : "hover:bg-accent text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                to="/free-consultation"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
