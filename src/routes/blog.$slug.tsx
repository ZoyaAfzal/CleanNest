import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { getPost, posts } from "@/lib/site-data";
import { FadeInView } from "@/components/animations/FadeInView";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — CleanNest Pro` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: loaderData.image },
          { property: "og:url", content: `/blog/${loaderData.slug}` },
          { property: "og:type", content: "article" },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.slug}` }] : [],
    scripts: loaderData
      ? [{
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            image: loaderData.image,
            datePublished: loaderData.date,
            author: { "@type": "Person", name: loaderData.author },
          }),
        }]
      : [],
  }),
  notFoundComponent: () => <div className="min-h-screen grid place-items-center">Post not found</div>,
  errorComponent: ({ error }) => <div className="min-h-screen grid place-items-center">Error: {error.message}</div>,
  component: BlogDetail,
});

function BlogDetail() {
  const p = Route.useLoaderData();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 text-white w-full">
          <nav className="flex items-center gap-1 text-sm text-white/70 font-mono">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="size-3" />
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight className="size-3" />
            <span className="text-white truncate max-w-xs">{p.title}</span>
          </nav>
          <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full">{p.category}</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl text-balance">{p.title}</h1>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr_220px] gap-12">
          <article>
            <div className="flex items-center gap-4 pb-8 border-b border-border text-sm text-muted-foreground">
              <img src={`https://i.pravatar.cc/80?u=${p.author}`} alt={p.author} className="size-10 rounded-full" />
              <div>
                <p className="text-foreground font-medium">{p.author}</p>
                <p>{p.date} • {p.readTime}</p>
              </div>
              <div className="ml-auto flex gap-2">
                {[Twitter, Facebook, Linkedin, Share2].map((I, i) => (
                  <button key={i} className="grid place-items-center size-9 rounded-full bg-white border border-border hover:bg-primary hover:text-primary-foreground transition">
                    <I className="size-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
              {p.body.map((para: string, i: number) => (
                <FadeInView key={i} delay={i * 0.05}>
                  <p>{para}</p>
                </FadeInView>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-3xl bg-white border border-border flex gap-5 items-center">
              <img src={`https://i.pravatar.cc/120?u=${p.author}`} alt={p.author} className="size-16 rounded-full" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">About the author</p>
                <p className="font-display text-xl font-semibold mt-1">{p.author}</p>
                <p className="text-sm text-muted-foreground mt-1">CleanNest Pro contributor and field-tested cleaning specialist.</p>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">In this article</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                {p.body.slice(0, 5).map((para: string, i: number) => (
                  <li key={i} className="border-l-2 border-border pl-3 hover:border-primary hover:text-primary transition cursor-pointer">
                    {para.split(".")[0].slice(0, 40)}…
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl font-bold">Keep reading</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group block rounded-3xl bg-bg-light border border-border overflow-hidden hover:-translate-y-2 transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
