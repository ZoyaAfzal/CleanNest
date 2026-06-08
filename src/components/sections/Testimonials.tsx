import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { FadeInView } from "@/components/animations/FadeInView";

export function Testimonials() {
  // duplicate for seamless marquee
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInView>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3 text-center">Loved by clients</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center text-balance">
            What our clients <span className="italic text-primary">actually</span> say.
          </h2>
        </FadeInView>
      </div>

      <div className="mt-16 relative group/marquee">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-[marquee_60s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <article
              key={i}
              className="shrink-0 w-[380px] bg-white border border-border rounded-3xl shadow-xl p-8 flex flex-col"
            >
              <Quote className="size-7 text-primary/30" />
              <p className="mt-4 text-foreground leading-relaxed flex-1">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
