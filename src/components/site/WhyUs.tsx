import { motion } from "motion/react";
import { Ship, Warehouse, ShieldCheck, Scale, Timer, Handshake } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const REASONS = [
  {
    icon: Warehouse,
    title: "Wholesale volumes only",
    body: "Minimum order values built for trade buyers — no retail, no consumer sales, no channel conflict with your storefront.",
  },
  {
    icon: Ship,
    title: "Export-only operation",
    body: "Door-to-door insured logistics to 38 markets, with full customs documentation, invoicing and Kimberley certificates.",
  },
  {
    icon: ShieldCheck,
    title: "Certified at source",
    body: "GIA, IGI and HRD grading available on every stone above 0.30 ct, with laser-inscribed report numbers.",
  },
  {
    icon: Scale,
    title: "Consistent calibration",
    body: "Sieve-matched melee and repeatable make quality, so your production lines never wait on re-sorting.",
  },
  {
    icon: Timer,
    title: "48-hour quotations",
    body: "Dedicated account managers respond to parcel enquiries within two business days, in your timezone.",
  },
  {
    icon: Handshake,
    title: "Long-term supply terms",
    body: "Annual contracts with locked make specifications and priority allocation during tight supply cycles.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Built for the trade, <span className="text-gold-gradient">not the counter</span>
            </>
          }
          subtitle="A.K. Diamonds exists to supply businesses. Everything from our minimum lots to our documentation is structured around wholesale export."
        />

        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: "oklch(0.2 0.008 75)" }}
                className="h-full bg-card p-8 md:p-10"
              >
                <r.icon className="size-6 text-primary" strokeWidth={1.2} />
                <h3 className="mt-6 text-2xl tracking-tight">{r.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
