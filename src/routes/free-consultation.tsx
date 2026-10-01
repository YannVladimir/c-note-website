import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { ArrowRight, Check, Calendar, Clock, Shield } from "lucide-react";

export const Route = createFileRoute("/free-consultation")({
  head: () => ({
    meta: [
      { title: "Book a free consultation — C-Note" },
      { name: "description", content: "Tell us about your space, your team, or your archive. We'll listen, look, and quote — at no cost." },
      { property: "og:title", content: "Free Consultation — C-Note" },
      { property: "og:description", content: "A free, no-pressure conversation about your organizing, moving or Bika DMS needs." },
      { property: "og:url", content: "/free-consultation" },
    ],
    links: [{ rel: "canonical", href: "/free-consultation" }],
  }),
  component: ConsultPage,
});

const services = ["Office Organizing", "Home Organizing", "Individual Organizing", "IT for Organizing", "Home Moving", "Office Moving", "Bika DMS"];

function ConsultPage() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.services = picked.join(", ");
    
    try {
      await fetch("https://formsubmit.co/ajax/contact@c-note.rw", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
    setSent(true);
  };

  return (
    <Layout>
      <section className="gradient-hero grain pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-end">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Free consultation</div>
              <h1 className="mt-5 text-5xl md:text-6xl text-balance leading-[1.05]">
                A free <em className="italic text-gold">conversation</em> — no pressure, no obligation.
              </h1>
              <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Tell us a little about what's on your plate. We'll come look, listen,
                and quote — at no cost.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { i: Calendar, t: "30 minutes", d: "On-site or virtual" },
                { i: Clock, t: "Within 48h", d: "We respond quickly" },
                { i: Shield, t: "Confidential", d: "Always" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
                  <c.i className="h-5 w-5 text-gold" />
                  <div className="mt-3 font-display">{c.t}</div>
                  <div className="text-xs text-muted-foreground">{c.d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 md:p-12"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Step 1</div>
              <div className="font-display text-2xl mt-2">What can we help with?</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {services.map((s) => {
                  const on = picked.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggle(s)}
                      className={`rounded-full px-4 py-2.5 text-xs transition-all border ${
                        on ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-gold/50"
                      }`}
                    >
                      {on && <Check className="inline h-3 w-3 mr-1" />}
                      {s}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 text-xs uppercase tracking-widest text-muted-foreground">Step 2</div>
              <div className="font-display text-2xl mt-2">Tell us about you</div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {[
                  { l: "Full name", n: "name" },
                  { l: "Email", n: "email", type: "email" },
                  { l: "Phone / WhatsApp", n: "phone" },
                  { l: "Company (optional)", n: "company" },
                ].map((f) => (
                  <input key={f.n} name={f.n} required={f.n !== "company"} type={f.type ?? "text"} placeholder={f.l}
                    className="rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none focus:border-gold/60" />
                ))}
              </div>

              <div className="mt-6">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Anything we should know? Size of the space, timeline, preferred dates…"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none focus:border-gold/60 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground text-sm hover:bg-ink disabled:opacity-70"
              >
                {sent ? <><Check className="h-4 w-4" /> Thank you — we'll be in touch shortly</> : isSubmitting ? <>Sending...</> : <>Request my free consultation <ArrowRight className="h-4 w-4" /></>}
              </button>

              <p className="mt-4 text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your request.
                We never share your details.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 text-center text-sm text-muted-foreground">
              Prefer to talk now? <Link to="/contact" className="gold-underline text-foreground">Reach us directly →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
