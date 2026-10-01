import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Quote } from "lucide-react";
import founder from "@/assets/founder.jpeg";
import organizedShelves from "@/assets/organized-shelves.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About C-Note — A practice built on order" },
      { name: "description", content: "C-Note Ltd is a Rwandan organizing, moving and document management practice founded on the belief that order is the quietest form of luxury." },
      { property: "og:title", content: "About C-Note" },
      { property: "og:description", content: "A Rwandan practice built on the belief that order is the quietest form of luxury." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="gradient-hero grain pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About us</div>
            <h1 className="mt-5 text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]">
              Our Story
            </h1>
            <p className="mt-8 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are on a mission to help people live better lives by becoming more organised.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-6">
            <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Origin</h2>
            <div className="mt-6 font-sans text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                C-Note Ltd was born from a simple belief: that an organized life is a better life. We have seen first-hand how clutter, chaos, and disorganization drain energy, stifle productivity, and cause unnecessary stress — and we decided to do something about it.
              </p>
              <p>
                Our work spans offices, homes, digital systems, and everything in between. If you need to become more organized, increase productivity and restore peace of mind in your workplace and home, look no further, C-Note is the solution.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 bg-secondary/30 p-8 md:p-10 rounded-[2.5rem] border border-border">
            <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Our Mission</h2>
            <blockquote className="mt-6 text-2xl font-display text-gold italic leading-snug">
              "To help people live better lives by becoming more organised."
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              This mission guides everything we do. We measure our success not in boxes packed or files sorted, but in the hours you get back, the stress you shed, and the confidence you gain when everything is finally in its place.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-28 md:py-36 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Our Values</div>
              <h2 className="mt-4 text-4xl md:text-5xl text-balance">
                What guides our practice.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: "People First",
                d: "Every client is unique. We listen before we act, and we design every solution around your specific life, work, and goals."
              },
              {
                t: "Integrity",
                d: "We are honest, transparent, and reliable. You will always know what to expect from us — and we will always deliver."
              },
              {
                t: "Excellence",
                d: "We do not settle for 'good enough.' From the first consultation to the final walk-through, we bring our best to every detail."
              },
              {
                t: "Lasting Impact",
                d: "Our goal is not just to organize your space once — it is to equip you with systems and habits that stick for the long term."
              }
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-card border border-border p-8 hover:border-gold/40 hover:-translate-y-1 transition-all shadow-sm">
                  <div className="font-display text-2xl text-foreground font-medium">{v.t}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A word from the MD */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/30 to-sky/20 blur-2xl pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden border border-border">
                <img src={founder} alt="Christophe Nkunzimana portrait" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card border border-border px-5 py-4 shadow-xl max-w-xs text-center flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center mb-2">
                  <span className="text-gold text-xs font-bold">IAPO</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Certified Member</div>
                <div className="font-display text-xs font-medium text-foreground mt-1">International Association of Professional Organizers</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">A word from the MD</div>
            <Quote className="mt-6 h-10 w-10 text-gold" />
            <h3 className="mt-4 text-3xl font-display text-foreground font-medium">
              Peace of mind is priceless!
            </h3>
            
            <div className="mt-6 font-sans text-muted-foreground leading-relaxed space-y-4 text-base">
              <p className="font-medium text-foreground text-lg">
                We are C-Note, we add VALUE. We are a professional organizing and moving company dedicated to helping people live better lives by becoming more organised. We help individuals, businesses and organizations reclaim their time, productivity, and peace of mind.
              </p>
              <p>
                Whether your challenge is a cluttered home, a chaotic office, a disorganized digital life, or an overwhelming move — we have a solution designed for you.
              </p>
              <p>
                We look forward to bringing more clarity, order and peace of mind to your workspace and home.
              </p>
              <p className="font-display text-gold text-lg font-semibold italic">
                "Choose C-Note, to live a more organized life!"
              </p>
            </div>

            <div className="mt-10 border-t border-border pt-6 flex flex-col">
              <span className="font-display text-xl text-foreground font-semibold">Christophe Nkunzimana</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Managing Director & Professional Organizer</span>
              <span className="text-xs text-gold/90 mt-0.5">Member of International Association of Professional Organizers</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h3 className="text-3xl md:text-4xl text-balance">
              Want to feel what we do, before you commit?
            </h3>
            <Link to="/free-consultation" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground text-sm font-medium hover:bg-ink transition-all hover:scale-[1.02]">
              Book a free consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
