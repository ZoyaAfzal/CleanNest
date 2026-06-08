import { CountUp } from "@/components/animations/CountUp";
import { FadeInView } from "@/components/animations/FadeInView";

const stats = [
  { value: 24000, suffix: "+", label: "Homes Cleaned" },
  { value: 49, suffix: "", label: "Avg. Rating", display: "4.9/5", raw: 49 },
  { value: 8, suffix: "", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Satisfied Clients" },
];

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <FadeInView key={s.label} delay={i * 0.1}>
            <div className="text-center">
              <div className="font-display text-5xl md:text-7xl font-bold tracking-tight">
                {s.display ? (
                  <span>4.<CountUp to={9} />/5</span>
                ) : (
                  <CountUp to={s.value} suffix={s.suffix} />
                )}
              </div>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/70">{s.label}</p>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
