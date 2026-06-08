import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Check } from "lucide-react";
import { getService, services } from "@/lib/site-data";
import { FadeInView } from "@/components/animations/FadeInView";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — CleanNest Pro` },
          { name: "description", content: loaderData.short },
          { property: "og:title", content: `${loaderData.name} — CleanNest Pro` },
          { property: "og:description", content: loaderData.short },
          { property: "og:image", content: loaderData.image },
          { property: "og:url", content: `/services/${loaderData.slug}` },
          { property: "og:type", content: "product" },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/services/${loaderData.slug}` }] : [],
  }),
  notFoundComponent: () => <div className="min-h-screen grid place-items-center">Service not found</div>,
  errorComponent: ({ error }) => <div className="min-h-screen grid place-items-center">Error: {error.message}</div>,
  component: ServiceDetail,
});

const faqs = [
  { q: "How long does a typical service take?", a: "Most visits run 2–4 hours depending on home size and condition. Deep cleans can take longer; you'll get an accurate estimate at booking." },
  { q: "Do I need to provide cleaning supplies?", a: "No. Our teams arrive fully equipped with eco-friendly, plant-based products and professional-grade equipment." },
  { q: "Is the same team sent every visit?", a: "Yes. Once we match you with a team, they stay your team, so they learn your preferences over time." },
  { q: "What if I'm not happy with the clean?", a: "We come back within 24 hours and re-clean any area for free. Your satisfaction is the only metric that matters." },
  { q: "Can I reschedule or cancel?", a: "Absolutely. Reschedule, skip or cancel any time from your account, no penalties." },
];

function BeforeAfter({ image }: { image: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border select-none cursor-ew-resize"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos(((e.clientX - rect.left) / rect.width) * 100);
      }}
    >
      <img src={image} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={image} alt="Before" className="w-full h-full object-cover grayscale brightness-75" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 grid place-items-center rounded-full bg-white text-bg-dark shadow-xl font-mono text-xs">
          ⇆
        </span>
      </div>
      <span className="absolute top-4 left-4 font-mono text-xs uppercase tracking-widest bg-bg-dark/70 text-white px-3 py-1 rounded-full">Before</span>
      <span className="absolute top-4 right-4 font-mono text-xs uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full">After</span>
    </div>
  );
}

function ServiceDetail() {
  const s = Route.useLoaderData();
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section
        className="relative h-[60vh] min-h-[480px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${s.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-bg-dark/20" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 text-white w-full">
          <nav className="flex items-center gap-1 text-sm text-white/70 font-mono">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="size-3" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="size-3" />
            <span className="text-white">{s.name}</span>
          </nav>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold max-w-3xl">{s.name}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">{s.short}</p>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5 text-foreground/85 leading-relaxed">
            <FadeInView>
              <p className="text-xl">{s.description}</p>
              <p>Our process is built on consistency: same team, same standards, same checklist, every single visit. You shouldn't have to explain your home twice.</p>
              <p>Every booking includes our 24-hour re-clean guarantee. If a corner of your home doesn't feel right after we leave, we come back at no cost.</p>
              <p>All consumables paper, microfiber, refills are included. We arrive with everything we need and leave nothing behind but a spotless space.</p>
            </FadeInView>
          </div>
          <aside className="rounded-3xl bg-white border border-border p-7 h-fit lg:sticky lg:top-24">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Pricing</p>
            <p className="font-display text-4xl font-bold mt-2">{s.price}</p>
            <p className="text-sm text-muted-foreground mt-1">per visit</p>
            <Link to="/booking" className="mt-6 block text-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-medium hover:bg-primary-light hover:text-bg-dark transition shimmer">
              Book This Service
            </Link>
            <p className="mt-4 text-xs text-muted-foreground text-center">15% off your first clean</p>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">What's included</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Every visit. Every time.</h2>
            <ul className="mt-8 space-y-3">
              {s.includes.map((i: string) => (
                <li key={i} className="flex gap-3 text-foreground/85">
                  <span className="grid place-items-center size-6 rounded-full bg-primary/10 text-primary shrink-0">
                    <Check className="size-3.5" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </FadeInView>
          <FadeInView delay={0.2}>
            <BeforeAfter image={s.image} />
            <p className="mt-3 text-xs text-muted-foreground text-center font-mono">Drag to compare</p>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-3xl px-6">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Common questions.</h2>
          </FadeInView>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <h2 className="font-display text-4xl md:text-5xl font-bold">You might also like</h2>
          </FadeInView>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group block rounded-3xl bg-bg-light border border-border overflow-hidden hover:-translate-y-2 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{r.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
