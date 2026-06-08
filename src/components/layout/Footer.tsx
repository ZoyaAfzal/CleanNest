import { Link } from "@tanstack/react-router";
import { Sparkles, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: [
      { label: "House Cleaning", to: "/services/house-cleaning" },
      { label: "Deep Cleaning", to: "/services/deep-cleaning" },
      { label: "Office Cleaning", to: "/services/office-cleaning" },
      { label: "Window Cleaning", to: "/services/window-cleaning" },
      { label: "Carpet Cleaning", to: "/services/carpet-cleaning" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Team", to: "/team" },
      { label: "Contact", to: "/contact" },
      { label: "Booking", to: "/booking" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "FAQ", to: "/faq" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/" },
      { label: "Terms", to: "/" },
      { label: "Cookies", to: "/" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <span className="grid place-items-center size-10 rounded-xl bg-primary-light text-bg-dark">
                <Sparkles className="size-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-bold">CleanNest Pro</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              Professional home cleaning that gives you back your weekends. Vetted teams, eco-friendly products, and a satisfaction guarantee.
            </p>
            <form className="mt-6 flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary-light"
              />
              <button className="rounded-full bg-primary-light text-bg-dark px-4 py-3 grid place-items-center hover:scale-105 transition">
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">{c.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="inline-block hover:text-primary-light hover:translate-x-0.5 transition-all"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/50">
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-full bg-white/5 hover:bg-primary-light hover:text-bg-dark transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <p>
            Powered by{" "}
            <a 
              href="https://axistechgroup.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-light transition font-medium"
            >
              AxisTechGroup
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
