import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { FadeInView, staggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { motion } from "framer-motion";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — CleanNest Pro" },
      { name: "description", content: "Explore our full range of professional cleaning services — from recurring house cleans to deep cleans, carpets, windows and move-out specials." },
      { property: "og:title", content: "Services — CleanNest Pro" },
      { property: "og:description", content: "Professional home, office, deep, carpet, window and move-in/out cleaning services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-bg-dark text-white grain relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light">Services</p>
            <h1 className="mt-3 font-display text-6xl md:text-8xl font-bold text-balance max-w-4xl">
              Every space deserves <span className="italic text-primary-light">a reset.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">
              Choose the level of care your home, office or studio needs. Every clean is delivered by the same trained team — never a stranger.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.slug} variants={staggerItem}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block rounded-3xl bg-white border border-border overflow-hidden hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-2xl font-semibold">{s.name}</h3>
                      <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition" />
                    </div>
                    <p className="mt-2 text-muted-foreground text-sm">{s.short}</p>
                    <p className="mt-4 font-mono text-sm text-primary">{s.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
