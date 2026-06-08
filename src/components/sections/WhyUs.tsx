import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, CalendarCheck, Award, ArrowRight } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";

const features = [
  { icon: ShieldCheck, title: "Vetted & Background-Checked", desc: "Every cleaner passes a multi-stage check and 40-hour training program before stepping into a home." },
  { icon: Leaf, title: "Eco-Friendly Products Only", desc: "Plant-based, refillable cleaning solutions that perform — safe for kids, pets and the planet." },
  { icon: CalendarCheck, title: "Flexible Scheduling", desc: "Same-day visits available. Reschedule, skip or pause in two taps. Zero penalties, ever." },
  { icon: Award, title: "100% Satisfaction Guarantee", desc: "Not happy? We come back within 24 hours and re-clean any area, free of charge." },
];

export function WhyUs() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <FadeInView>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1000&q=80"
              alt="Professional cleaner at work"
              className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl"
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-3 border border-border"
            >
              <span className="grid place-items-center size-12 rounded-xl bg-accent text-accent-foreground">🏅</span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Year after year</p>
                <p className="font-display font-bold text-foreground">#1 Rated Cleaning Service</p>
              </div>
            </motion.div>
          </div>
        </FadeInView>

        <div>
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Why CleanNest</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-balance">
              Cleaning, with the<br /> <span className="italic text-primary">details</span> thought through.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-md">
              Eight years and twenty-four thousand homes have taught us where dust hides and how to make it stay gone.
            </p>
          </FadeInView>

          <div className="mt-10 space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 group"
              >
                <span className="grid place-items-center size-12 shrink-0 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <f.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeInView delay={0.4}>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-primary transition"
            >
              Learn About Us <ArrowRight className="size-4" />
            </Link>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
