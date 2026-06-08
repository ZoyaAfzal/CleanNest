import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Star, Home, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const HERO_IMG = "https://images.pexels.com/photos/5591780/pexels-photo-5591780.jpeg";

const headline = ["We", "Make", "Your", "Home"];
const headline2 = ["Sparkle", "&", "Shine"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-bg-dark text-white grain">
      <motion.div
        style={{ y: bgY, backgroundImage: `url(${HERO_IMG})` }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/50 to-bg-dark/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-32 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex self-start items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-white/90"
        >
          ✦ Trusted by 24,000+ Homes
        </motion.div>

        <h1 className="mt-8 font-display font-bold text-6xl md:text-8xl leading-[0.95] tracking-tight max-w-5xl text-balance">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {headline.map((w, i) => (
              <motion.span
                key={w}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2 text-primary-light italic">
            {headline2.map((w, i) => (
              <motion.span
                key={w}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-xl"
        >
          Professional home cleaning tailored to your schedule. Book in 60 seconds, same-day visits available.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/booking"
            className="group shimmer inline-flex items-center gap-2 rounded-full bg-primary-light text-bg-dark px-7 py-4 font-medium hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(46,204,113,0.4)] transition-all"
          >
            Book a Clean
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-medium text-white hover:bg-white/10 transition"
          >
            View Services
          </Link>
        </motion.div>

        <div className="absolute bottom-12 left-6 right-6 max-w-7xl mx-auto flex flex-wrap gap-3">
          {[
            { icon: Star, label: "4.9/5 Rating" },
            { icon: Home, label: "24K+ Homes Cleaned" },
            { icon: CheckCircle2, label: "100% Satisfaction" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6 + i * 0.15, duration: 0.5 }}
              className="glass rounded-2xl px-4 py-3 flex items-center gap-2.5 text-sm"
            >
              <s.icon className="size-4 text-primary-light" />
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        style={{ opacity: fadeOut }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="size-6 text-white/60" />
      </motion.div>
    </section>
  );
}
