import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact C-Note" },
      { name: "description", content: "Call, email or WhatsApp C-Note. We respond within one business day, always." },
      { property: "og:title", content: "Contact C-Note" },
      { property: "og:description", content: "Reach our team — by form, phone, email or WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("Not Sure");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/contact@c-note.rw", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, service, message })
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
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact us</div>
            <h1 className="mt-5 text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]">
              Let's start with a <em className="italic text-gold">conversation</em>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Do you have a question or ready to experience the difference organization can make? We would love to hear from you. Reach out and we will get back to you within 24 hours latest.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { i: Phone, t: "Telephone", d: "+250 726 868 905 / +250 788 856 862" },
                { i: Mail, t: "Email", d: "contact@c-note.rw" },
                { i: MessageCircle, t: "WhatsApp", d: "+250 726 868 905" },
                { i: MapPin, t: "Address", d: "Kigali - Rwanda" },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 hover:border-gold/40 transition-colors shadow-sm">
                  <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center"><c.i className="h-5 w-5 text-primary" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="mt-1 font-display text-base text-foreground leading-normal">{c.d}</div>
                  </div>
                </div>
              ))}
              <div className="rounded-3xl overflow-hidden border border-border">
                <iframe
                  title="map"
                  className="w-full h-64 grayscale"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=30.0,-1.97,30.13,-1.93&layer=mapnik"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            {sent ? (
              <div className="rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-md flex flex-col items-center justify-center min-h-[450px]">
                <div className="h-16 w-16 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                  <Check className="h-8 w-8 text-sage" />
                </div>
                <h3 className="font-display text-2xl mb-4 text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Thank you! We have received your message and will be in touch within 24 hours latest. We look forward to helping you become more organised!
                </p>
                <button
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                    setService("Not Sure");
                    setSent(false);
                  }}
                  className="mt-8 rounded-full border border-border px-6 py-2.5 text-xs hover:bg-accent transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm space-y-6"
              >
                <div>
                  <h3 className="font-display text-2xl">Send us a message</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Fields marked with * are required.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <label className="relative block">
                    <input
                      required
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-3 text-sm outline-none focus:border-gold/60"
                    />
                    <span className={`pointer-events-none absolute left-4 transition-all ${name.length > 0 ? "top-1.5 text-[10px] uppercase tracking-widest text-muted-foreground" : "top-4 text-sm text-muted-foreground"} peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest`}>
                      Full Name *
                    </span>
                  </label>

                  <label className="relative block">
                    <input
                      required
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-3 text-sm outline-none focus:border-gold/60"
                    />
                    <span className={`pointer-events-none absolute left-4 transition-all ${email.length > 0 ? "top-1.5 text-[10px] uppercase tracking-widest text-muted-foreground" : "top-4 text-sm text-muted-foreground"} peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest`}>
                      Email Address *
                    </span>
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <label className="relative block">
                    <input
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-3 text-sm outline-none focus:border-gold/60"
                    />
                    <span className={`pointer-events-none absolute left-4 transition-all ${phone.length > 0 ? "top-1.5 text-[10px] uppercase tracking-widest text-muted-foreground" : "top-4 text-sm text-muted-foreground"} peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest`}>
                      Phone Number
                    </span>
                  </label>

                  <div className="relative">
                    <select
                      id="serviceInterest"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-4 text-sm text-foreground outline-none focus:border-gold/60 appearance-none"
                    >
                      <option value="Office Organising">Office Organising</option>
                      <option value="IT for Organising">IT for Organising</option>
                      <option value="Home Organising">Home Organising</option>
                      <option value="Individual Organising">Individual Organising</option>
                      <option value="Office Moving">Office Moving</option>
                      <option value="Home Moving">Home Moving</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</div>
                    <label htmlFor="serviceInterest" className="absolute left-4 -top-2.5 bg-card px-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                      Service of Interest
                    </label>
                  </div>
                </div>

                <div>
                  <label className="relative block">
                    <textarea
                      required
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-3 text-sm outline-none focus:border-gold/60 resize-none"
                    />
                    <span className={`pointer-events-none absolute left-4 transition-all ${message.length > 0 ? "top-1.5 text-[10px] uppercase tracking-widest text-muted-foreground" : "top-4 text-sm text-muted-foreground"} peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest`}>
                      Message *
                    </span>
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-4 px-8 text-primary-foreground font-semibold text-sm hover:bg-ink transition-all hover:shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : <>Send My Message <Send className="h-4 w-4" /></>}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
