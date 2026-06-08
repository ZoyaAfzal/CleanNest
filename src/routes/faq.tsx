import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeInView } from "@/components/animations/FadeInView";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — CleanNest Pro" },
      { name: "description", content: "Answers to common questions about booking, pricing, our cleaners and safety practices." },
      { property: "og:title", content: "FAQ — CleanNest Pro" },
      { property: "og:description", content: "Common questions about CleanNest Pro." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

const data = [
  { cat: "General", items: [
    { q: "Which cities do you operate in?", a: "We currently serve New York, Boston, Chicago, Austin, Seattle and Portland — with new cities launching each quarter." },
    { q: "How long has CleanNest Pro been operating?", a: "We've been in business since 2018 and have completed over 24,000 cleans." },
  ]},
  { cat: "Booking", items: [
    { q: "How fast can I book?", a: "Most bookings take less than 60 seconds. Same-day visits available when slots remain." },
    { q: "Can I book recurring service?", a: "Yes — weekly, biweekly and monthly. Recurring plans get 10–20% off every visit." },
    { q: "Can I reschedule?", a: "Reschedule, skip or cancel up to 2 hours before your appointment at no cost." },
  ]},
  { cat: "Pricing", items: [
    { q: "Are taxes included?", a: "Yes. The price quoted at booking is the total price you pay." },
    { q: "Do you offer first-time discounts?", a: "Yes — 15% off your first clean automatically applied at checkout." },
  ]},
  { cat: "Our Cleaners", items: [
    { q: "Are your cleaners background-checked?", a: "Every team member passes a multi-stage background check and 40-hour training program." },
    { q: "Will I get the same team each visit?", a: "Yes. Once matched, your team stays your team." },
  ]},
  { cat: "Safety", items: [
    { q: "Are you insured?", a: "Fully insured and bonded for up to $2M in liability per visit." },
    { q: "Do you use pet-safe products?", a: "All of our products are plant-based, biodegradable and safe for pets and children." },
  ]},
];

function FAQ() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.toLowerCase();
    return data
      .map((c) => ({ ...c, items: c.items.filter((i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  return (
    <>
      <section className="pt-40 pb-12 bg-bg-dark text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light">FAQ</p>
            <h1 className="mt-3 font-display text-6xl md:text-7xl font-bold text-balance">
              Asked and <span className="italic text-primary-light">answered.</span>
            </h1>
            <div className="mt-10 relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                className="pl-11 h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          {filtered.map((c) => (
            <FadeInView key={c.cat}>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{c.cat}</p>
              <Accordion type="single" collapsible>
                {c.items.map((it, i) => (
                  <AccordionItem key={i} value={`${c.cat}-${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg">{it.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInView>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No results — try a different keyword.</p>}
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <FadeInView>
          <h2 className="font-display text-3xl font-bold">Still have questions?</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary-light hover:text-bg-dark transition">
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </FadeInView>
      </section>
    </>
  );
}
