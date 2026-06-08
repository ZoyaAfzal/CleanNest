import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BG = "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1920&q=80";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }} />
      <div className="absolute inset-0 bg-bg-dark/80" />
      <div className="absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center text-white">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block font-mono text-xs uppercase tracking-widest text-primary-light"
        >
          Limited offer
        </motion.span>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 font-display text-5xl md:text-7xl font-bold text-balance"
        >
          Ready for a <span className="italic text-primary-light">spotless</span> home?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-white/70 max-w-xl mx-auto"
        >
          Book today and get 15% off your first clean. No subscriptions. No commitments.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/booking" className="shimmer inline-flex items-center gap-2 rounded-full bg-primary-light text-bg-dark px-7 py-4 font-medium hover:scale-[1.03] transition">
            Book Now <ArrowRight className="size-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-medium hover:bg-white/10 transition">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
