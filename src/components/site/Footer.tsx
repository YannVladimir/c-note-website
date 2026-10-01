import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-ink text-primary-foreground overflow-hidden">
      {/* Decorative background grid/ambient light */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-sky/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="font-display text-xl tracking-tight">C-Note Ltd</span>
          </div>
          <p className="mt-5 text-primary-foreground/70 max-w-md font-sans text-sm leading-relaxed">
            We bring order to your world — carefully, completely, and on time.
            Professional organizing, moving, and document management in Rwanda.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-gold shrink-0" />
              Kigali - Rwanda
            </span>
            <span className="inline-flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-gold shrink-0" />
              +250 726 868 905 / +250 788 856 862
            </span>
            <span className="inline-flex items-center gap-2.5">
              <MessageSquare className="h-4 w-4 text-gold shrink-0" />
              WhatsApp: +250 726 868 905
            </span>
            <span className="inline-flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-gold shrink-0" />
              contact@c-note.rw
            </span>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-ink transition-all text-primary-foreground"
              title="LinkedIn: C-Note Ltd"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-ink transition-all text-primary-foreground"
              title="X: @info_cnote"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-ink transition-all text-primary-foreground"
              title="IG: @info.cnote"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-ink transition-all text-primary-foreground font-bold text-xs"
              title="TikTok: info_cnote"
            >
              𝅘𝅥𝅮
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-base text-gold mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/bika-dms" className="hover:text-gold transition-colors">Bika DMS</Link></li>
            <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base text-gold mb-4">Get started</h4>
          <Link
            to="/free-consultation"
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm text-ink font-medium hover:opacity-90 transition-all hover:scale-[1.02]"
          >
            Free Consultation
          </Link>
          <p className="mt-6 text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} C-Note Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
