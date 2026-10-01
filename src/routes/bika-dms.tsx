import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, ShieldCheck, Lock, Cloud, Search, Workflow, FileCheck2, Check } from "lucide-react";
import archiveKey from "@/assets/archive-key.jpeg";

export const Route = createFileRoute("/bika-dms")({
  head: () => ({
    meta: [
      { title: "Bika DMS — Secure document management for serious organizations" },
      { name: "description", content: "Bika is a secure, cloud-native document management system: military-grade encryption, granular access, instant search, and compliance-ready audit trails." },
      { property: "og:title", content: "Bika DMS by C-Note" },
      { property: "og:description", content: "Every document. Found in seconds. Built for organizations that can't afford to lose a file — or a minute." },
      { property: "og:url", content: "/bika-dms" },
    ],
    links: [{ rel: "canonical", href: "/bika-dms" }],
  }),
  component: BikaPage,
});

const features = [
  { icon: Lock, t: "Military-grade encryption", d: "AES-256 at rest, TLS 1.3 in transit. Keys you control." },
  { icon: ShieldCheck, t: "Granular access", d: "Roles, groups, and per-folder permissions with full audit trails." },
  { icon: Search, t: "Instant search", d: "Full-text search across millions of documents in milliseconds." },
  { icon: Cloud, t: "Cloud-native", d: "99.99% uptime, regional data residency and automatic backups." },
  { icon: Workflow, t: "Workflows", d: "Route approvals, reviews and signatures — automatically." },
  { icon: FileCheck2, t: "Compliance ready", d: "Retention, legal holds and regulator-friendly exports built in." },
];

function BikaPage() {
  return (
    <Layout>
      <section className="relative gradient-hero grain pt-40 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
                <Lock className="h-3.5 w-3.5" /> Bika DMS — by C-Note
              </div>
              <h1 className="mt-7 text-5xl md:text-7xl text-balance leading-[1.05]">
                Every document.<br />
                <em className="italic text-gold">Found in seconds.</em>
              </h1>
              <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
                A secure, cloud-native document management system designed for
                organizations who treat information like the asset it is.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/free-consultation" className="rounded-full bg-primary px-6 py-3.5 text-primary-foreground text-sm hover:bg-ink inline-flex items-center gap-2">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="rounded-full border border-foreground/20 px-6 py-3.5 text-sm hover:bg-foreground/5">
                  Talk to sales
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-gold/25 via-sky/15 to-sage/15 blur-3xl" />
              <div className="relative rounded-3xl bg-ink text-primary-foreground p-6 shadow-2xl">
                <div className="flex items-center justify-between text-xs opacity-70">
                  <span>bika.c-note.rw / contracts</span>
                  <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-sage" /> All systems normal</span>
                </div>
                <div className="mt-5 rounded-xl bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-xs opacity-70">
                    <Search className="h-3.5 w-3.5" /> Search
                  </div>
                  <div className="mt-2 text-sm">contract <span className="text-gold">murenzi</span> 2025</div>
                  <div className="mt-1 text-[11px] opacity-50">3 results · 0.18s</div>
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { n: "Supplier agreement — Murenzi.docx", t: "v3 · signed" },
                    { n: "NDA — Murenzi Logistics.pdf", t: "v1 · approved" },
                    { n: "SLA — Murenzi 2025.pdf", t: "v2 · pending" },
                  ].map((r) => (
                    <div key={r.n} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 text-xs">
                      <span className="truncate">{r.n}</span>
                      <span className="opacity-60">{r.t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { k: "2.4M", l: "Documents" },
                    { k: "0.18s", l: "Avg search" },
                    { k: "99.99%", l: "Uptime" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-lg bg-white/5 p-3">
                      <div className="font-display text-lg">{s.k}</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-60">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Features</div>
              <h2 className="mt-4 text-4xl md:text-5xl text-balance">Enterprise-grade. Quietly so.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 hover:border-gold/40 transition-all hover:-translate-y-1">
                  <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mt-5 font-display text-xl">{f.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/30 to-sky/20 blur-2xl pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden border border-border">
                <img src={archiveKey} alt="Archive" className="w-full h-[440px] object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Solutions & Scope</div>
              <h2 className="mt-4 text-4xl md:text-5xl text-balance">
                Six ways Bika works for you.
              </h2>
              <ul className="mt-8 space-y-3.5 text-sm">
                {[
                  "It serves as a secure, reliable and centralized cloud storage of all your documents",
                  "It allows users to access and retrieve documents seamlessly anytime anywhere.",
                  "It helps locate physical documents instantly (2-5minutes).",
                  "It enables to track sales and expenses through customized reports generation",
                  "It keeps documents in a more organized way,",
                  "And most importantly, it increases readiness for regulatory compliance (audits)"
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-sage mt-0.5 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-ink text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-destructive/10 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs text-gold">
              <ShieldCheck className="h-3.5 w-3.5" /> High Security Integrity
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-medium">Is Bika secure enough? YES.</h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              The system has a military graded encryption. It secures data with latest security features and algorithms. It complies with data sovereignty protocols.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Get Started</div>
              <h2 className="mt-4 text-4xl font-display font-medium text-foreground">Register to Bika</h2>
              <p className="mt-3 text-muted-foreground">Register your organization below to request access to the Bika DMS platform.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your Bika organization registration has been submitted successfully. Our engineering team will contact you within 24 hours.");
              }} 
              className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="orgName" className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">Organization Name *</label>
                  <input required id="orgName" type="text" placeholder="e.g. Symposia Consult" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-all" />
                </div>
                <div>
                  <label htmlFor="orgTin" className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">Tax Identification Number (TIN) *</label>
                  <input required id="orgTin" type="text" placeholder="e.g. 102938475" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="orgEmail" className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">Organization Email *</label>
                  <input required id="orgEmail" type="email" placeholder="e.g. office@symposia.rw" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-all" />
                </div>
                <div>
                  <label htmlFor="orgPhone" className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">Organization Telephone *</label>
                  <input required id="orgPhone" type="tel" placeholder="e.g. +250 788 856 862" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="orgCountry" className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">Country *</label>
                  <input required id="orgCountry" type="text" defaultValue="Rwanda" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-all" />
                </div>
                <div>
                  <label htmlFor="orgCity" className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">City *</label>
                  <input required id="orgCity" type="text" defaultValue="Kigali" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-all" />
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-4 px-8 text-primary-foreground font-semibold text-sm hover:bg-ink transition-all hover:shadow-lg">
                  Register Organization
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
