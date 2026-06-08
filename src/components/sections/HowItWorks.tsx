import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ClipboardList, CalendarDays, Sparkles, ArrowRight } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";

const steps = [
  { icon: ClipboardList, title: "Choose Your Service", desc: "Pick from our range of cleaning packages built around your home." },
  { icon: CalendarDays, title: "Pick a Date & Time", desc: "Flexible scheduling, including same-day visits when you need us fast." },
  { icon: Sparkles, title: "We Clean, You Relax", desc: "Sit back while our trained team transforms your space, top to bottom." },
];

export function HowItWorks() {
  return (
    <section className="py-28 bg-bg-light">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInView className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">How it works</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-balance max-w-3xl mx-auto">
            Book a clean in <span className="italic text-primary">3 simple steps.</span>
          </h2>
        </FadeInView>

        <div className="mt-20 relative grid md:grid-cols-3 gap-10">
          <svg className="hidden md:block absolute top-12 left-[16%] right-[16%] h-2 pointer-events-none" viewBox="0 0 800 8" preserveAspectRatio="none">
            <motion.path
              d="M 0 4 L 800 4"
              stroke="currentColor"
              className="text-primary/30"
              strokeWidth="2"
              strokeDasharray="6 8"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {steps.map((s, i) => (
            <FadeInView key={s.title} delay={i * 0.15}>
              <div className="text-center relative">
                <div className="mx-auto grid place-items-center size-24 rounded-full bg-white border-2 border-primary text-primary relative z-10">
                  <s.icon className="size-9" />
                  <span className="absolute -top-2 -right-2 size-9 rounded-full bg-accent text-accent-foreground font-display font-bold grid place-items-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.5} className="text-center mt-16">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover:bg-primary-light hover:text-bg-dark transition shimmer"
          >
            Book Now <ArrowRight className="size-4" />
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}
