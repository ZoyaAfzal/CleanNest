import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/site-data";
import { FadeInView, staggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { motion } from "framer-motion";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — CleanNest Pro" },
      { name: "description", content: "Cleaning tips, eco-friendly product guides and habits from professionals who've been into 24,000+ homes." },
      { property: "og:title", content: "Journal — CleanNest Pro" },
      { property: "og:description", content: "Cleaning tips and insights from our team of professionals." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-bg-dark text-white grain relative">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light">Journal</p>
            <h1 className="mt-3 font-display text-6xl md:text-8xl font-bold text-balance max-w-4xl">
              Tips from the <span className="italic text-primary-light">field.</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">
              Eight years of in-home experience, distilled into honest guides on cleaning, products and habits that stick.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <motion.article key={p.slug} variants={staggerItem}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block rounded-3xl bg-white border border-border overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <span className="inline-block font-mono text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">{p.category}</span>
                    <h3 className="mt-4 font-display text-xl font-semibold group-hover:text-primary transition">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    <div className="mt-5 pt-5 border-t border-border flex justify-between text-xs text-muted-foreground">
                      <span>{p.author}</span><span>{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
