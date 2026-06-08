import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { posts } from "@/lib/site-data";
import { FadeInView, staggerContainer, staggerItem } from "@/components/animations/FadeInView";

export function BlogPreview() {
  return (
    <section className="py-28 bg-bg-light">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInView>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Journal</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-balance max-w-2xl">
                Cleaning tips & <span className="italic text-primary">insights.</span>
              </h2>
            </div>
            <Link to="/blog" className="font-mono text-sm uppercase tracking-widest link-underline">
              All articles →
            </Link>
          </div>
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {posts.map((p) => (
            <motion.article key={p.slug} variants={staggerItem}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-3xl overflow-hidden bg-white border border-border hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <span className="inline-block font-mono text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-tight line-clamp-2 group-hover:text-primary transition">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.author}</span>
                    <span>{p.date}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
