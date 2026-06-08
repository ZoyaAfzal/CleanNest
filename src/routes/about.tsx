import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeInView } from "@/components/animations/FadeInView";
import { Stats } from "@/components/sections/Stats";
import { team } from "@/lib/site-data";
import { Heart, Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CleanNest Pro" },
      { name: "description", content: "Founded in 2018, CleanNest Pro is a team of trained professional cleaners obsessed with the details most people never notice." },
      { property: "og:title", content: "About — CleanNest Pro" },
      { property: "og:description", content: "Our story, our values, and the team behind 24,000+ spotless homes." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Care first", desc: "We treat every home like it belongs to someone we love because it does, to someone." },
  { icon: Leaf, title: "Planet-aware", desc: "Refillable, plant-based products only. We measure waste like we measure squares." },
  { icon: ShieldCheck, title: "Trust earned", desc: "Background-checked, insured, trained. Same team every visit, never a stranger in your home." },
];

function About() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-end bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1600&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-bg-dark/30" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 text-white w-full">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light">About</p>
            <h1 className="mt-3 font-display text-6xl md:text-8xl font-bold max-w-4xl text-balance">
              The team behind <span className="italic text-primary-light">every spotless room.</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Our story</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">A cleaning company built by cleaners.</h2>
            <div className="mt-6 space-y-4 text-foreground/85">
              <p>CleanNest Pro started in a Brooklyn walk-up in 2018 with two people, a vacuum and a stubborn belief that home cleaning was broken. Booking took days. Teams changed every visit. Products smelled like a hospital.</p>
              <p>Eight years later, we've cleaned 24,000+ homes across six cities, kept the same training program, and never sent a stranger to your front door twice. The model is simple: hire well, train deeply, treat every home like it belongs to family.</p>
              <p>We're not the cheapest. We are, by every measure that matters to us, the most consistent. That's the only thing we want to be.</p>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&q=80" alt="Cleaning in action" className="rounded-3xl shadow-2xl aspect-[4/5] object-cover w-full" />
          </FadeInView>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Values</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">What we stand on.</h2>
          </FadeInView>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeInView key={v.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white border border-border h-full">
                  <span className="grid place-items-center size-14 rounded-2xl bg-primary/10 text-primary"><v.icon className="size-6" /></span>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex justify-between items-end mb-12">
            <FadeInView>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Team</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">A few of the faces.</h2>
            </FadeInView>
            <Link to="/team" className="font-mono text-sm uppercase tracking-widest link-underline">Meet the full team →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.slice(0, 4).map((m) => (
              <FadeInView key={m.name}>
                <img src={m.image} alt={m.name} className="aspect-square w-full rounded-3xl object-cover" />
                <p className="mt-3 font-display text-lg font-semibold">{m.name}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{m.role}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-24 bg-bg-light">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInView>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Want to work with us?</h2>
            <p className="mt-4 text-muted-foreground">We hire slowly and train deeply. If you take pride in your craft, we want to meet you.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:bg-primary-light hover:text-bg-dark transition">
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </FadeInView>
        </div>
      </section>

      <CTA />
    </>
  );
}
