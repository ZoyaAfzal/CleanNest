import { createFileRoute } from "@tanstack/react-router";
import { FadeInView } from "@/components/animations/FadeInView";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Clean — CleanNest Pro" },
      { name: "description", content: "Book a professional cleaning in 60 seconds. Same-day visits available." },
      { property: "og:title", content: "Book a Clean — CleanNest Pro" },
      { property: "og:description", content: "Book a professional cleaning in 60 seconds." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: Booking,
});

const sizes = ["Studio", "1 BR", "2 BR", "3 BR", "4+ BR"];
const slots = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

function Booking() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ service: "", size: "", date: undefined as Date | undefined, slot: "", name: "", email: "", address: "" });

  const next = () => setStep((s) => Math.min(2, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = () => {
    toast.success("Booking confirmed! Check your inbox for details.");
    setStep(0);
    setData({ service: "", size: "", date: undefined, slot: "", name: "", email: "", address: "" });
  };

  return (
    <>
      <section className="pt-40 pb-12 bg-bg-dark text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInView>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light">Booking</p>
            <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold text-balance">
              60 seconds to a <span className="italic text-primary-light">spotless home.</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-2 mb-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1">
                <div className={cn("h-1.5 rounded-full transition-all duration-500", i <= step ? "bg-primary" : "bg-border")} />
                <p className={cn("mt-2 font-mono text-[10px] uppercase tracking-widest", i <= step ? "text-primary" : "text-muted-foreground")}>
                  {["Service", "Schedule", "Details"][i]}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-border p-8 min-h-[440px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {step === 0 && (
                  <div>
                    <h2 className="font-display text-2xl font-semibold">Choose your service</h2>
                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      {services.map((s) => (
                        <button
                          key={s.slug}
                          onClick={() => setData({ ...data, service: s.slug })}
                          className={cn(
                            "p-4 rounded-2xl border text-left transition",
                            data.service === s.slug ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                          )}
                        >
                          <p className="font-display font-semibold">{s.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{s.price}</p>
                        </button>
                      ))}
                    </div>
                    <h2 className="mt-8 font-display text-2xl font-semibold">Home size</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setData({ ...data, size: s })}
                          className={cn(
                            "px-4 py-2 rounded-full border text-sm transition",
                            data.size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/40"
                          )}
                        >{s}</button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div>
                    <h2 className="font-display text-2xl font-semibold">Pick a date</h2>
                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                      <Calendar mode="single" selected={data.date} onSelect={(d) => setData({ ...data, date: d })} className={cn("p-3 pointer-events-auto rounded-2xl border border-border")} />
                      <div>
                        <h3 className="font-display text-lg font-semibold">Available slots</h3>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {slots.map((s) => (
                            <button
                              key={s}
                              onClick={() => setData({ ...data, slot: s })}
                              className={cn(
                                "px-3 py-2 rounded-xl border text-sm transition",
                                data.slot === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/40"
                              )}
                            >{s}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <h2 className="font-display text-2xl font-semibold">Your details</h2>
                    <div className="mt-5 space-y-4">
                      <Input placeholder="Full name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                      <Input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                      <Input placeholder="Service address" value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
                    </div>
                    <div className="mt-6 p-5 rounded-2xl bg-bg-light text-sm space-y-1.5">
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Summary</p>
                      <p><strong>Service:</strong> {services.find((s) => s.slug === data.service)?.name || "—"}</p>
                      <p><strong>Size:</strong> {data.size || "—"}</p>
                      <p><strong>Date:</strong> {data.date?.toDateString() || "—"} • {data.slot || "—"}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-between">
            <Button variant="ghost" onClick={back} disabled={step === 0}><ArrowLeft className="size-4 mr-2" /> Back</Button>
            {step < 2 ? (
              <Button onClick={next} className="rounded-full bg-primary text-primary-foreground hover:bg-primary-light hover:text-bg-dark">
                Continue <ArrowRight className="size-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={submit} className="rounded-full bg-primary-light text-bg-dark hover:bg-primary hover:text-primary-foreground">
                Confirm Booking <Check className="size-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
