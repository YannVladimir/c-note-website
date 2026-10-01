import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — C-Note" },
      { name: "description", content: "Answers to common questions about C-Note's organizing, moving and Bika DMS services." },
      { property: "og:title", content: "C-Note FAQ" },
      { property: "og:description", content: "Common questions about organizing, moving and Bika DMS." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  // ORGANIZING - Office Organizing
  { c: "Office Organizing", q: "What does office organizing include?", a: "Office organizing covers decluttering desks and common areas, setting up filing systems (physical and digital), organizing supply rooms, advising on workflows, and establishing systems to keep the space orderly long-term." },
  { c: "Office Organizing", q: "How long does it take to organize a typical office?", a: "A single workstation usually takes 2–4 hours. A full office with multiple workstations, a conference room, and storage areas can take 1–3 days depending on size and the current level of clutter. We will give you a clear timeline during your free consultation" },
  { c: "Office Organizing", q: "Do I need to be present during the organizing session?", a: "It is helpful to have a decision-maker available at the start to set priorities and at the end to approve the new layout. You do not need to be present the entire time. We will discuss what works best for you." },
  { c: "Office Organizing", q: "Will you discard documents or files on my behalf?", a: "No. We never discard anything without explicit permission. We will sort and flag items for your review; final decisions on disposal are always yours." },
  { c: "Office Organizing", q: "How do you handle confidential business documents?", a: "We treat all documents with strict confidentiality. We can sign an NDA (Non-Disclosure Agreement) before the session and work alongside your staff to ensure sensitive materials are never left unattended." },

  // ORGANIZING - IT for Organizing
  { c: "IT for Organizing", q: "What is IT for organizing?", a: "IT for organizing deals with structuring your digital environment: organizing computer files and folders, removing duplicate files, scanning and storing documents, setting up cloud a centralized cloud storage of all your documents for global access, managing email inboxes, and creating consistent naming conventions and backup routines." },
  { c: "IT for Organizing", q: "How do you organize a cluttered email inbox?", a: "We create a folder or label hierarchy, set up filters and rules to auto-sort incoming mail, unsubscribe from unwanted lists, archive old messages, and implement an inbox-zero methodology tailored to your workflow." },
  { c: "IT for Organizing", q: "Will organizing my files delete anything?", a: "Never without your approval. We identify duplicate or redundant files and present them to you before any deletion. A backup is always recommended (and can be set up as part of the service) before we begin." },
  { c: "IT for Organizing", q: "Do you provide ongoing digital maintenance?", a: "Yes. We offer monthly or quarterly digital maintenance packages to keep your files, inbox, and devices organized as your work evolves." },

  // ORGANIZING - Home Organizing
  { c: "Home Organizing", q: "What areas of the home can you organize?", a: "We organize kitchens, pantries, bedrooms, closets, bathrooms, garages, basements, attics, home offices, playrooms, and storage rooms. We can tackle a single room or the entire home." },
  { c: "Home Organizing", q: "Do I need to buy organizing products before you arrive?", a: "No. We recommend waiting until after the decluttering phase, when we know exactly what you are keeping and the precise measurements needed. We can provide a customized shopping list or handle product sourcing for you." },
  { c: "Home Organizing", q: "How do I prepare for a home organizing session?", a: "Simply be ready to make decisions about what to keep, donate, or discard. You do not need to pre-sort or clean. Wearing comfortable clothes and having water on hand is all you need." },
  { c: "Home Organizing", q: "What happens to items I decide to donate?", a: "We can box and label donations and, for an additional fee, arrange a donation pick-up or drop-off at a local charity of your choice." },
  { c: "Home Organizing", q: "How long will my home stay organized?", a: "Results are long lasting when systems are built around your natural habits. We also provide a personalized maintenance guide and offer follow-up sessions to help you stay on track." },
  { c: "Home Organizing", q: "Can you help with organizing after a move or renovation?", a: "Absolutely. Post-move and post-renovation organizing are some of our most popular services. We help you unpack methodically, optimize your new layout, and get settled quickly." },
  { c: "Home Organizing", q: "How long does a typical project take?", a: "It depends on the scope. A single-room home organizing session typically takes half a day. We will give you a clear timeline during your free consultation." },
  { c: "Home Organizing", q: "Do I need to be present during the organizing?", a: "We recommend you are present — especially in the early stages. We will discuss what works best for you." },
  { c: "Home Organizing", q: "Do you offer ongoing support after the project?", a: "Yes! We offer maintenance sessions and follow-up coaching to help you stay organized for the long term." },

  // ORGANIZING - Individual Organizing
  { c: "Individual Organizing", q: "What is individual organizing?", a: "Individual organizing is one-on-one support tailored to a specific person's habits, needs, and goals. Sessions focus on areas like time management, personal paperwork, personal finances organization, daily routines, and any space or system that feels overwhelming." },
  { c: "Individual Organizing", q: "Is individual organizing the same as life coaching?", a: "They are related but different. Individual organizing focuses on creating tangible systems and environments, whereas life coaching is more focused on mindset and goal-setting. Some clients benefit from both, and we can work alongside a coach." },
  { c: "Individual Organizing", q: "How do you handle sensitive personal situations?", a: "We approach every client with empathy, patience, and zero judgment. All information shared during sessions is kept strictly confidential. Our goal is to empower you, not to evaluate you." },
  { c: "Individual Organizing", q: "Can you help me manage paper clutter and personal documents?", a: "Yes. We help you sort, categorize, and create a filing system for bills, medical records, insurance documents, land and property documents, warranties, tax papers, academic documents, and more — including setting up a digital scanning workflow if preferred." },
  { c: "Individual Organizing", q: "What if I struggle to let go some belongings?", a: "That is completely normal. We use proven, compassionate decision-making frameworks to help you evaluate each item without pressure. We move at your pace and respect your emotional connection to your possessions." },
  { c: "Individual Organizing", q: "How often should I schedule individual organizing sessions?", a: "Frequency depends on your goals. Some clients prefer intensive weekly sessions to tackle a backlog, while others benefit from bi-weekly or monthly check-ins to maintain progress. We create a schedule that works for you." },
  { c: "Individual Organizing", q: "How do I get started?", a: "Simply fill in the contact form, give us a call, or send us an email — and we will set up your free consultation." },

  // MOVING - General
  { c: "General Moving", q: "How far in advance should I book my move?", a: "We recommend booking at least 2–4 weeks in advance. For large office relocations, 4–8 weeks allows us to plan logistics and minimize disruption to your operations." },
  { c: "General Moving", q: "Are my belongings insured during the move?", a: "All moves include basic coverage at no extra cost. We also offer full-value replacement insurance for an additional fee, which covers the repair or replacement of any item damaged during transit." },
  { c: "General Moving", q: "What items you cannot move?", a: "For safety reasons, we cannot transport hazardous materials (flammable liquids, chemicals, and explosives), perishable food, live plants over long distances, or pets. We will provide a full list of restricted items during your consultation." },

  // MOVING - Home Moving
  { c: "Home Moving", q: "Do you provide packing materials and services?", a: "Yes — we offer full packing services where our team handles everything, as well as partial packing if you would prefer to pack some items yourself." },
  { c: "Home Moving", q: "How do I prepare for moving day?", a: "Label all boxes with the destination room, defrost your refrigerator 24 hours ahead, disconnect appliances, and keep essentials (documents, medications, chargers) separate. Our team will send a preparation checklist when you confirm your booking." },

  // MOVING - Office Moving
  { c: "Office Moving", q: "Can you move our office outside of business hours?", a: "Yes. We specialize in after-hours and weekend office moves to minimize downtime and disruption to your team. We will work with your IT department and facilities manager to coordinate the full transition." },
  { c: "Office Moving", q: "Do you handle IT equipment and server rooms?", a: "We collaborate with qualified handlers for computers, monitors, servers, and networking equipment and we can coordinate with your IT team for safe disconnection and reinstallation." },
  { c: "Office Moving", q: "Can you help with office furniture disassembly and reassembly?", a: "Yes. Our team will disassemble modular desks, cubicles, shelving, and storage units and fully reassemble them at your new location. We also handle disposal or donation of any furniture you no longer need." }
];

function FAQPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const cats = useMemo(() => ["All", ...Array.from(new Set(faqs.map((f) => f.c)))], []);
  const filtered = faqs.filter(
    (f) =>
      (cat === "All" || f.c === cat) &&
      (q === "" || (f.q + " " + f.a).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <Layout>
      <section className="gradient-hero grain pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">FAQ</div>
            <h1 className="mt-5 text-5xl md:text-6xl text-balance leading-[1.05]">
              Questions, answered <em className="italic text-gold">calmly</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search questions…"
                  className="w-full rounded-full border border-border bg-card pl-11 pr-5 py-3.5 text-sm outline-none focus:border-gold/60"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {cats.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`rounded-full px-4 py-2 text-xs transition-colors ${
                      cat === c
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border hover:bg-accent"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
              {filtered.map((f, i) => (
                <AccordionItem key={i} value={`i-${i}`} className="px-6">
                  <AccordionTrigger className="text-left py-6 hover:no-underline">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gold">{f.c}</div>
                      <div className="mt-1 text-lg font-display">{f.q}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
              {filtered.length === 0 && (
                <div className="p-10 text-center text-muted-foreground text-sm">No matches. Try another search.</div>
              )}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
