import { createFileRoute } from "@tanstack/react-router";
import { FadeInView } from "@/components/animations/FadeInView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CleanNest Pro" },
      { name: "description", content: "Get in touch with CleanNest Pro. Same-day responses Mon–Sat." },
      { property: "og:title", content: "Contact — CleanNest Pro" },
      { property: "og:description", content: "Get in touch — same-day responses Mon–Sat." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="pt-40 pb-16 bg-bg-dark text-white">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light">Contact</p>
            <h1 className="mt-3 font-display text-6xl md:text-8xl font-bold text-balance max-w-3xl">
              Say <span className="italic text-primary-light">hello.</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12">
          <form
            className="lg:col-span-3 bg-white rounded-3xl border border-border p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                toast.success("Message sent! We'll get back to you within 24 hours.");
                (e.target as HTMLFormElement).reset();
              }, 800);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <Input required className="mt-1.5" placeholder="Your name" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                <Input type="tel" className="mt-1.5" placeholder="(555) 555-5555" />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <Input required type="email" className="mt-1.5" placeholder="you@email.com" />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Service Type</label>
              <Select>
                <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>
                  {services.map((s) => <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <Textarea required rows={5} className="mt-1.5" placeholder="Tell us about your space…" />
            </div>
            <Button type="submit" disabled={loading} className="w-full rounded-full h-12 bg-primary text-primary-foreground hover:bg-primary-light hover:text-bg-dark">
              {loading ? "Sending…" : "Send message"}
            </Button>
          </form>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl bg-bg-dark text-white p-8 space-y-5">
              {[
                { icon: MapPin, label: "Office", value: "412 Atlantic Ave, Brooklyn NY 11217" },
                { icon: Phone, label: "Phone", value: "(212) 555-0142" },
                { icon: Mail, label: "Email", value: "hello@cleannestpro.com" },
                { icon: Clock, label: "Hours", value: "Mon–Sat 7am – 8pm" },
              ].map((i) => (
                <div key={i.label} className="flex gap-4">
                  <span className="grid place-items-center size-10 rounded-xl bg-primary-light text-bg-dark shrink-0"><i.icon className="size-4" /></span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">{i.label}</p>
                    <p className="mt-0.5">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <iframe
              title="Map"
              className="w-full h-64 rounded-3xl border border-border"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.99%2C40.68%2C-73.97%2C40.69&layer=mapnik"
            />
          </aside>
        </div>
      </section>
    </>
  );
}
