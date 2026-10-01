import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, ArrowUpRight, Briefcase, Home as HomeIcon, Server,
  User, Truck, Building2, ShieldCheck, Sparkles, Quote, Check
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import teamPacking from "@/assets/team-packing.jpeg";
import organizedShelves from "@/assets/organized-shelves.jpeg";
import officeMoving from "@/assets/office-moving.jpeg";
import cleanDesk from "@/assets/clean-desk.jpeg";
import archiveKey from "@/assets/archive-key.jpeg";
import florafricaLogo from "@/assets/florafirica-ltd-logo.png";
import tekafrikaLogo from "@/assets/tekafrika-logo.webp";
import symposiaLogo from "@/assets/symposia-consult-logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C-Note — Order, restored. Calm, delivered." },
      { name: "description", content: "Professional organizing, moving and document management in Rwanda. We help individuals, businesses and organizations reclaim time, productivity and peace of mind." },
      { property: "og:title", content: "C-Note — Order, restored." },
      { property: "og:description", content: "Premium organizing, moving and Bika DMS for individuals, businesses and organizations in Rwanda." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Briefcase, title: "Office Organizing", blurb: "Workstations, archives and shared spaces designed for clarity and flow.", img: cleanDesk },
  { icon: Server, title: "IT for Organizing", blurb: "Cables, devices and digital systems quietly engineered to disappear.", img: archiveKey },
  { icon: HomeIcon, title: "Home Organizing", blurb: "Kitchens, closets and quiet corners — turned into spaces you exhale into.", img: organizedShelves },
  { icon: User, title: "Individual Organizing", blurb: "One-to-one sessions to reset routines, paperwork and digital life.", img: cleanDesk },
  { icon: Truck, title: "Home Moving", blurb: "White-glove packing and relocation. Nothing rushed. Nothing broken.", img: teamPacking },
  { icon: Building2, title: "Office Moving", blurb: "Move teams without missing a beat — planned, packed, restored.", img: officeMoving },
];

const testimonials = [
  { name: "Aline M.", role: "Operations Director, Kigali", quote: "C-Note moved our entire HQ over a weekend. Monday morning, every workstation was ready. Unreal." },
  { name: "Patrick N.", role: "Homeowner", quote: "I came home to a house that finally felt like mine. They didn't just organize — they listened." },
  { name: "Yann Vladimir", role: "Founder, Tekafrika", quote: "Bika DMS gave us our afternoons back. We stopped hunting for files and started actually working." },
];

const heroAnimations = [
  { initial: { opacity: 0, x: 100, y: -100, rotate: 15, scale: 0.8 }, animate: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }, exit: { opacity: 0, x: -100, y: 100, rotate: -15, scale: 0.8 } },
  { initial: { opacity: 0, scale: 0.6, rotate: -5 }, animate: { opacity: 1, scale: 1, rotate: 0 }, exit: { opacity: 0, scale: 1.1, rotate: 5 } },
  { initial: { opacity: 0, y: 100, scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -100, scale: 0.9 } },
  { initial: { opacity: 0, x: 100, y: 100, rotate: -15, scale: 0.8 }, animate: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }, exit: { opacity: 0, x: -100, y: -100, rotate: 15, scale: 0.8 } },
  { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -80 } }
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const heroImages = [teamPacking, organizedShelves, officeMoving, cleanDesk, archiveKey];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section ref={heroRef} className="relative gradient-hero grain overflow-hidden pt-36 pb-28 md:pt-44 md:pb-40">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-gold/30 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-32 -left-24 h-[460px] w-[460px] rounded-full bg-sky/25 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Text */}
            <motion.div style={{ opacity }} className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wide text-foreground/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
                Become More Organized! Save Time | Elevate Productivity | Restore Peace of Mind
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance"
              >
                We bring <em className="italic font-display text-gold">order</em><br />
                to your world —<br />
                carefully, completely,<br />
                and on time.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed"
              >
                We are a professional organizing and moving company dedicated to helping people live better lives by becoming more organized. We help individuals, businesses and organizations reclaim their time, productivity, and peace of mind.
              </motion.p>
            </motion.div>

            {/* Right: Images and Buttons */}
            <motion.div 
              style={{ opacity }}
              className="lg:col-span-5 flex flex-col gap-6 lg:pl-10"
            >
              {/* Animated Image Frame */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-full aspect-[4/3] z-10"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIndex}
                    src={heroImages[imgIndex]}
                    initial={heroAnimations[imgIndex].initial}
                    animate={heroAnimations[imgIndex].animate}
                    exit={heroAnimations[imgIndex].exit}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl ring-1 ring-border/20"
                  />
                </AnimatePresence>
              </motion.div>

              {/* Buttons on the right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row lg:flex-col gap-3"
              >
                <Link
                  to="/free-consultation"
                  className="group inline-flex justify-center items-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground text-sm tracking-wide hover:bg-ink transition-all hover:shadow-[0_20px_50px_-15px_rgba(20,30,60,0.5)] font-medium w-full"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex justify-center items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm hover:bg-foreground/5 transition-colors font-medium text-foreground w-full"
                >
                  Explore All Services
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Full width Services Glance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 md:mt-24 w-full rounded-3xl glass p-6 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-sky"></div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold" /> A glance at our Services
            </div>
            
            <div className="grid md:grid-cols-12 gap-10 md:gap-6">
              <div className="md:col-span-8">
                <h3 className="font-display text-2xl mb-4 text-foreground flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" /> Organizing Services
                </h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {["Office Organizing", "IT for Organizing", "Home Organizing", "Individual Organizing"].map(s => (
                    <span key={s} className="bg-background/60 border border-border px-5 py-2 rounded-full text-foreground/90 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl mb-4 text-foreground flex items-center gap-2">
                  <Truck className="h-6 w-6 text-primary" /> Moving Services
                </h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {["Office Moving", "Home Moving"].map(s => (
                    <span key={s} className="bg-background/60 border border-border px-5 py-2 rounded-full text-foreground/90 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY: Chaos → Calm */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The C-Note way</div>
              <h2 className="mt-4 text-4xl md:text-5xl text-balance">
                From quiet chaos to quiet clarity.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Disorder is rarely about objects. It's about decisions. We sit with you,
                map what matters, and rebuild your spaces and systems with intention.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Listen", d: "We start by understanding how you live, work, and what 'done' looks like." },
              { n: "02", t: "Design", d: "A plan tailored to your space, your habits, and your rhythm." },
              { n: "03", t: "Transform", d: "Discreet, careful execution by a team trained in our standards." },
              { n: "04", t: "Sustain", d: "Systems and tools so the calm stays, long after we leave." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 hover:border-gold/50 transition-all hover:-translate-y-1">
                  <div className="font-display text-gold text-lg">{s.n}</div>
                  <div className="mt-4 text-xl font-display">{s.t}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-28 md:py-36 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</div>
                <h2 className="mt-4 text-4xl md:text-5xl text-balance">
                  Six services. One promise — <em className="italic text-gold">peace of mind</em>.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all">
                See all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-gold/40 transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(20,30,60,0.3)]">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center">
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-display">{s.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                    <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm text-foreground group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BIKA DMS preview */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Bika Document Management System</div>
              <h2 className="mt-4 text-4xl md:text-5xl text-balance">
                Every document. <em className="italic text-gold">Found in seconds.</em>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Bika Document Management System is a web-based software that revolutionizes filing management. It bridges the gap between digital and physical files, offering a hybrid filing solution.
              </p>
              
              <div className="mt-8">
                <h3 className="font-display text-xl mb-4">Benefits for using Bika:</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "Time saved",
                    "Productivity elevated",
                    "Peace of mind restored"
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-sage/20 grid place-items-center shrink-0">
                        <Check className="h-3 w-3 text-sage" />
                      </div>
                      <span className="font-medium text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/bika-dms"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-primary-foreground text-sm hover:bg-ink transition-colors shadow-md hover:shadow-lg"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-gold/15 to-sky/15 blur-2xl" />
              <div className="relative rounded-3xl glass border border-border p-8 md:p-10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="font-display text-2xl mb-5 relative z-10">Why Bika?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground relative z-10">
                  {[
                    "Centralized, secure cloud document storage.",
                    "Locate physical files in under 5 minutes.",
                    "Seamless anytime, anywhere digital access.",
                    "Custom reports & audit compliance ready."
                  ].map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-primary/10 grid place-items-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-background/50 border border-border p-4 relative z-10 flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">Military-Grade Security</div>
                    <div className="text-xs text-muted-foreground mt-1">AES-256 encryption & data sovereignty compliant.</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 md:py-36 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Clients</div>
              <h2 className="mt-4 text-4xl md:text-5xl text-balance">
                The quiet kind of <em className="italic text-gold">word of mouth</em>.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-3xl bg-card border border-border p-8 hover:border-gold/40 transition-colors">
                  <Quote className="h-6 w-6 text-gold" />
                  <blockquote className="mt-5 text-lg leading-relaxed text-pretty">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <div className="font-medium">{t.name}</div>
                    <div className="text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS */}
      <section className="relative py-20 border-t border-border bg-background/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Trusted by Industry Leaders</div>
              <h2 className="mt-4 text-3xl font-display">Our Clients</h2>
            </div>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {/* Symposia Consult */}
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center justify-between p-8 bg-card border border-border rounded-3xl w-64 h-52 text-center hover:border-gold/40 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md">
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={symposiaLogo}
                    alt="Symposia Consult"
                    className="max-h-24 max-w-[160px] w-auto object-contain"
                  />
                </div>
                <div className="mt-4 border-t border-border/60 pt-3 w-full">
                  <div className="font-display text-sm font-semibold tracking-wide text-foreground">SYMPOSIA CONSULT</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Consultancy &amp; Advisory</div>
                </div>
              </div>
            </Reveal>
            {/* Florafrica Ltd */}
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center justify-between p-8 bg-card border border-border rounded-3xl w-64 h-52 text-center hover:border-gold/40 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md">
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={florafricaLogo}
                    alt="Florafrica Ltd"
                    className="max-h-24 max-w-[160px] w-auto object-contain"
                  />
                </div>
                <div className="mt-4 border-t border-border/60 pt-3 w-full">
                  <div className="font-display text-sm font-semibold tracking-wide text-foreground">FLORAFRICA LTD</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Agricultural &amp; Import</div>
                </div>
              </div>
            </Reveal>
            {/* Tekafrika Ltd */}
            <Reveal delay={0.3}>
              <div className="flex flex-col items-center justify-between p-8 bg-card border border-border rounded-3xl w-64 h-52 text-center hover:border-gold/40 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md">
                <div className="flex-1 flex items-center justify-center w-full bg-ink rounded-2xl px-4 py-2">
                  <img
                    src={tekafrikaLogo}
                    alt="Tekafrika Ltd"
                    className="max-h-20 max-w-[150px] w-auto object-contain"
                  />
                </div>
                <div className="mt-4 border-t border-border/60 pt-3 w-full">
                  <div className="font-display text-sm font-semibold tracking-wide text-foreground">TEKAFRIKA LTD</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">IT Consultancy</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] gradient-ink text-primary-foreground p-12 md:p-20">
              <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky/20 blur-3xl" />
              <div className="relative max-w-2xl">
                <h3 className="text-4xl md:text-5xl text-balance">
                  Book a Free Consultation
                </h3>
                <p className="mt-6 text-lg opacity-80 leading-relaxed">
                  Not sure which service is right for you? Book a free 30-minute consultation and we will help you map out the best path forward.
                </p>
                <Link
                  to="/free-consultation"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-ink font-medium text-sm hover:opacity-90 transition-opacity shadow-lg"
                >
                  Book Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
