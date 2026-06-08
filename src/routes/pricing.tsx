import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeInView } from "@/components/animations/FadeInView";
import { tiers } from "@/components/sections/PricingTeaser";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — CleanNest Pro" },
      { name: "description", content: "Simple, transparent pricing for every kind of home. No hidden fees. Cancel anytime." },
      { property: "og:title", content: "Pricing — CleanNest Pro" },
      { property: "og:description", content: "Simple, transparent cleaning pricing." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const features = [
  { name: "Living spaces & kitchen", basic: true, standard: true, premium: true },
  { name: "All bedrooms", basic: false, standard: true, premium: true },
  { name: "All bathrooms", basic: false, standard: true, premium: true },
  { name: "Inside microwave & sink", basic: false, standard: true, premium: true },
  { name: "Inside oven & fridge", basic: false, standard: false, premium: true },
  { name: "Interior windows", basic: false, standard: false, premium: true },
  { name: "Carpet refresh", basic: false, standard: false, premium: true },
  { name: "Eco-friendly products", basic: true, standard: true, premium: true },
  { name: "Priority same-day booking", basic: false, standard: false, premium: true },
];

const faqs = [
  { q: "Are taxes included?", a: "Yes, all listed prices include local taxes. The price you see at booking is the price you pay." },
  { q: "Do you charge cancellation fees?", a: "Never. Reschedule or cancel up to 2 hours before your visit at no cost." },
  { q: "What if my home is larger than standard?", a: "Pricing scales with bedrooms. You'll see an exact quote during booking — no surprises after." },
  { q: "Do recurring visits cost less?", a: "Yes. Weekly visits save 20%, biweekly saves 15%, monthly saves 10%." },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="pt-40 pb-12 bg-bg-dark text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light">Pricing</p>
            <h1 className="mt-3 font-display text-6xl md:text-7xl font-bold text-balance">
              No surprises. <span className="italic text-primary-light">Ever.</span>
            </h1>
            <div className="mt-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full">
              <span className={cn("text-sm font-mono", !annual && "text-white")}>One-time</span>
              <Switch checked={annual} onCheckedChange={setAnnual} />
              <span className={cn("text-sm font-mono", annual && "text-white")}>Recurring <span className="text-accent">(save 20%)</span></span>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 bg-bg-light -mt-12">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const price = annual ? Math.round(t.price * 0.8) : t.price;
            return (
              <motion.div
                key={t.name}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                  "relative rounded-3xl p-8 border",
                  t.popular ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/30 scale-[1.02]" : "bg-white border-border hover:shadow-xl"
                )}
              >
                {t.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Most popular</span>}
                <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
                <motion.div layout className="mt-4 flex items-baseline gap-1">
                  <motion.span key={price} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-5xl font-bold">${price}</motion.span>
                  <span className={cn("text-sm", t.popular ? "text-white/70" : "text-muted-foreground")}>/visit</span>
                </motion.div>
                <ul className={cn("mt-6 space-y-2.5 text-sm", t.popular ? "text-white/90" : "text-foreground/80")}>
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check className={cn("size-4 mt-0.5 shrink-0", t.popular ? "text-accent" : "text-primary")} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={cn("mt-8 block text-center rounded-full px-5 py-3 font-medium transition", t.popular ? "bg-white text-primary hover:bg-accent hover:text-accent-foreground" : "bg-foreground text-background hover:bg-primary")}>
                  Book {t.name}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <FadeInView className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Compare plans</h2>
          </FadeInView>
          <div className="mt-10 rounded-3xl border border-border overflow-hidden bg-bg-light">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-mono text-xs uppercase tracking-widest">Feature</TableHead>
                  <TableHead className="text-center font-display text-lg">Basic</TableHead>
                  <TableHead className="text-center font-display text-lg text-primary">Standard</TableHead>
                  <TableHead className="text-center font-display text-lg">Premium</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((f) => (
                  <TableRow key={f.name}>
                    <TableCell className="font-medium">{f.name}</TableCell>
                    {[f.basic, f.standard, f.premium].map((v, i) => (
                      <TableCell key={i} className="text-center">
                        {v ? <Check className="size-5 mx-auto text-primary" /> : <X className="size-5 mx-auto text-muted-foreground/40" />}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-3xl px-6">
          <FadeInView><h2 className="font-display text-4xl md:text-5xl font-bold">Pricing FAQ</h2></FadeInView>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTA />
    </>
  );
}
