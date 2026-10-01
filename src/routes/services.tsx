import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Briefcase, Server, Home as HomeIcon, User, Truck, Building2, Check } from "lucide-react";
import cleanDesk from "@/assets/clean-desk.jpeg";
import archiveKey from "@/assets/archive-key.jpeg";
import organizedShelves from "@/assets/organized-shelves.jpeg";
import teamPacking from "@/assets/team-packing.jpeg";
import officeMoving from "@/assets/office-moving.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Organizing & Moving by C-Note" },
      { name: "description", content: "Office organizing, home organizing, individual coaching, IT for organizing, home moving and office moving — delivered with quiet precision." },
      { property: "og:title", content: "C-Note Services" },
      { property: "og:description", content: "Six services. One promise — peace of mind." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const all = [
  {
    icon: Briefcase,
    title: "Office Organizing",
    img: cleanDesk,
    blurb: "A disorganised office is more than an eyesore — it costs your team time, energy, and focus every single day. Our Office Organising service transforms your workspace into a well-structured, efficient environment where your team can do their best work.",
    bullets: [
      "Full workspace assessment and Organising strategy",
      "Physical decluttering and space planning",
      "Filing systems, storage solutions, and labelling",
      "Team briefing on maintaining the new system"
    ]
  },
  {
    icon: Server,
    title: "IT for Organizing",
    img: archiveKey,
    blurb: "Physical clutter is only half the battle. Digital disorganization — chaotic file structures and inefficient workflows — is just as draining. Our IT for Organizing service puts your digital world in perfect order using our state of the art Bika Document Management System.",
    bullets: [
      "Setting up a centralized cloud storage of all your documents for global access",
      "Organizing computer files and folders",
      "Scanning and storing documents",
      "Creating consistent naming conventions and backup routines",
      "Organizing cluttered email inboxes",
      "Periodic Digital Maintenance",
      "Training on maintaining your digital systems"
    ]
  },
  {
    icon: HomeIcon,
    title: "Home Organizing",
    img: organizedShelves,
    blurb: "Your home should be your sanctuary — a calm, welcoming space where you can relax and recharge. Our Home Organising service tackles every room, from overwhelmed kitchens to chaotic wardrobes, creating spaces that are beautiful, functional, and easy to maintain.",
    bullets: [
      "Room-by-room decluttering and sorting",
      "Custom storage and organisation systems",
      "Wardrobe, pantry, and kitchen optimization",
      "Product recommendations and setup",
      "Guidance on maintaining your organized home"
    ]
  },
  {
    icon: User,
    title: "Individual Organising",
    img: cleanDesk,
    blurb: "Sometimes you do not need your whole office or home transformed — you need personalized help building your own organizational skills and systems. Our Individual Organising service delivers one-on-one coaching and hands-on support tailored entirely to you.",
    bullets: [
      "Personal goals",
      "Habit-building strategies",
      "Time management",
      "Personal paperwork",
      "Personal finances organization",
      "Daily routines",
      "Any space or system that feels overwhelming",
      "Accountability partnership support"
    ]
  },
  {
    icon: Building2,
    title: "Office Moving",
    img: officeMoving,
    blurb: "Moving your business should not mean losing productivity. Our Office Moving service handles every detail of your relocation — from pre-move planning to final setup — so your team is up and running with minimal disruption.",
    bullets: [
      "Pre-move assessment and inventory categorization",
      "Pre-move planning and timeline management",
      "Inventory management and labelling",
      "Moving logistics coordination",
      "New space layout planning",
      "Post-move unpacking and set-up",
      "Post-move support"
    ]
  },
  {
    icon: Truck,
    title: "Home Moving",
    img: teamPacking,
    blurb: "Moving home is one of life's most stressful events. Our Home Moving service takes the overwhelm out of the process by managing the organization and logistics from start to finish, so you can focus on the excitement of your new chapter.",
    bullets: [
      "Pre-move decluttering and sorting",
      "Packing strategy and labelling system",
      "Moving logistics coordination",
      "New home unpacking and room set-up",
      "Organising your new space",
      "Post-move support"
    ]
  }
];

export function ServicesPage() {
  return (
    <Layout>
      <section className="gradient-hero grain pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</div>
            <h1 className="mt-5 text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]">
              Six Ways We Can Help You
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Whether it is your home, office, digital life, or a big move — we have a solution for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {all.map((s, i) => (
            <Reveal key={s.title} delay={0.05}>
              <article className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/15 to-sky/15 blur-2xl" />
                    <div className="relative rounded-3xl overflow-hidden border border-border">
                      <img src={s.img} alt={s.title} loading="lazy" className="w-full h-[420px] object-cover hover:scale-[1.03] transition-transform duration-[1500ms]" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">0{i + 1}</div>
                  </div>
                  <h2 className="mt-5 text-4xl md:text-5xl text-balance">{s.title}</h2>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{s.blurb}</p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="h-4.5 w-4.5 text-sage mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/free-consultation" className="mt-8 inline-flex items-center gap-2 text-sm gold-underline">
                    Request this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
