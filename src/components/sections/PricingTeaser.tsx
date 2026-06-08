import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { FadeInView, staggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const tiers = [
  { name: "Basic", price: 79, popular: false, features: ["Living room", "Kitchen", "1 Bathroom", "Up to 2 hours", "Eco products"] },
  { name: "Standard", price: 129, popular: true, features: ["Full home, all rooms", "Up to 4 hours", "All bathrooms", "Inside microwave", "Bed making", "Recurring discount"] },
  { name: "Premium", price: 199, popular: false, features: ["Everything in Standard", "Deep clean treatment", "Interior windows", "Carpet refresh", "Inside oven & fridge", "Priority booking"] },
];

export function PricingTeaser() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInView className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Pricing</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-balance">
            Simple, <span className="italic text-primary">transparent</span> pricing.
          </h2>
          <p className="mt-4 text-muted-foreground">No hidden fees. Cancel any time. Your price is locked at booking.</p>
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={cn(
                "relative rounded-3xl p-8 border transition",
                t.popular
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/30 scale-[1.02]"
                  : "bg-white border-border hover:shadow-xl"
              )}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">${t.price}</span>
                <span className={cn("text-sm", t.popular ? "text-white/70" : "text-muted-foreground")}>/visit</span>
              </div>
              <ul className={cn("mt-6 space-y-2.5 text-sm", t.popular ? "text-white/90" : "text-foreground/80")}>
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className={cn("size-4 mt-0.5 shrink-0", t.popular ? "text-accent" : "text-primary")} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/booking"
                className={cn(
                  "mt-8 block text-center rounded-full px-5 py-3 font-medium transition",
                  t.popular
                    ? "bg-white text-primary hover:bg-accent hover:text-accent-foreground"
                    : "bg-foreground text-background hover:bg-primary"
                )}
              >
                Book {t.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link to="/pricing" className="font-mono text-sm uppercase tracking-widest link-underline">
            See full pricing →
          </Link>
        </div>
      </div>
    </section>
  );
}
