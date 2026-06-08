import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const services = [
  { slug: "house-cleaning", label: "House Cleaning" },
  { slug: "deep-cleaning", label: "Deep Cleaning" },
  { slug: "office-cleaning", label: "Office Cleaning" },
  { slug: "window-cleaning", label: "Window Cleaning" },
  { slug: "carpet-cleaning", label: "Carpet Cleaning" },
  { slug: "move-in-out-cleaning", label: "Move-In/Out Cleaning" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    setHidden(latest > previous && latest > 200);
  });

  const solid = scrolled || !isHome;

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        solid ? "bg-bg-dark/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="grid place-items-center size-9 rounded-xl bg-primary-light text-bg-dark">
            <Sparkles className="size-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">CleanNest Pro</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm text-white/80">
          {navLinks.slice(0, 2).map((l) => (
            <Link key={l.to} to={l.to} className="px-3 py-2 link-underline hover:text-white transition" activeProps={{ className: "text-white" }}>
              {l.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/services" className="px-3 py-2 flex items-center gap-1 link-underline hover:text-white transition">
              Services <ChevronDown className="size-4" />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full pt-2 w-64"
                >
                  <div className="rounded-2xl bg-bg-dark/95 backdrop-blur-xl border border-white/10 p-2 shadow-2xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="block px-3 py-2 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((l) => (
            <Link key={l.to} to={l.to} className="px-3 py-2 link-underline hover:text-white transition" activeProps={{ className: "text-white" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/booking"
            className="hidden sm:inline-flex shimmer items-center gap-2 rounded-full bg-primary-light px-5 py-2.5 text-sm font-medium text-bg-dark hover:scale-[1.03] transition-transform"
          >
            Book Now
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center size-10 rounded-xl text-white hover:bg-white/10"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bg-dark text-white p-8 lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center">
              <span className="font-display text-2xl">Menu</span>
              <button onClick={() => setOpen(false)} className="size-10 grid place-items-center rounded-xl hover:bg-white/10">
                <X className="size-6" />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-2 text-3xl font-display">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 hover:text-primary-light">
                  {l.label}
                </Link>
              ))}
              <Link to="/services" onClick={() => setOpen(false)} className="py-2 hover:text-primary-light">Services</Link>
            </nav>
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-auto block text-center rounded-full bg-primary-light text-bg-dark py-4 font-medium"
            >
              Book a Clean →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
