import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { FadeInView, staggerContainer, staggerItem } from "@/components/animations/FadeInView";

export function Services() {
  return (
    <section className="py-28 bg-bg-light">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInView>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Our Services</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground max-w-2xl text-balance">
                What We Clean,<br />
                <span className="italic text-primary">We Clean Right</span>
              </h2>
            </div>
            <Link to="/services" className="font-mono text-sm uppercase tracking-widest link-underline text-foreground">
              View all →
            </Link>
          </div>
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.slug} variants={staggerItem}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block rounded-3xl bg-white border border-border overflow-hidden hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_rgba(26,107,74,0.25)] transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold">{s.name}</h3>
                    <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-transform" />
                  </div>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.short}</p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-mono text-primary">{s.price}</span>
                    <span className="text-foreground/70 group-hover:text-primary transition">Learn more →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
