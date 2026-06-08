import { createFileRoute } from "@tanstack/react-router";
import { FadeInView, staggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { team } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — CleanNest Pro" },
      { name: "description", content: "Meet the trained, vetted professionals who make CleanNest Pro the most consistent cleaning service in the city." },
      { property: "og:title", content: "Team — CleanNest Pro" },
      { property: "og:description", content: "Meet our trained, vetted cleaning professionals." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function Team() {
  return (
    <>
      <section className="pt-40 pb-16 bg-bg-dark text-white grain relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light">Team</p>
            <h1 className="mt-3 font-display text-6xl md:text-8xl font-bold text-balance max-w-4xl">
              Trained. Trusted.<br /> <span className="italic text-primary-light">Yours.</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <motion.div key={m.name} variants={staggerItem} className="group [perspective:1000px]">
                <div className="relative aspect-[3/4] rounded-3xl [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden border border-border">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-bg-dark to-transparent text-white">
                      <p className="font-display text-xl font-semibold">{m.name}</p>
                      <p className="font-mono text-xs uppercase tracking-widest text-white/70">{m.role}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl bg-primary text-primary-foreground p-6 flex flex-col">
                    <p className="font-mono text-xs uppercase tracking-widest text-white/70">{m.role}</p>
                    <p className="mt-3 font-display text-lg italic leading-snug">"{m.quote}"</p>
                    <p className="mt-3 text-sm text-white/80">{m.bio}</p>
                    <div className="mt-auto flex gap-2">
                      {[Linkedin, Twitter, Mail].map((I, i) => (
                        <a key={i} href="#" className="grid place-items-center size-9 rounded-full bg-white/10 hover:bg-white hover:text-primary transition">
                          <I className="size-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
