import { motion } from "motion/react";
import { BadgeCheck, FileCheck2, Globe, Lock } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const CREDENTIALS = [
  { abbr: "GIA", name: "Gemological Institute of America", note: "Grading reports" },
  { abbr: "IGI", name: "International Gemological Institute", note: "Natural & lab-grown" },
  { abbr: "HRD", name: "HRD Antwerp", note: "European grading" },
  { abbr: "KPCS", name: "Kimberley Process", note: "Conflict-free warranty" },
  { abbr: "GJEPC", name: "Gem & Jewellery Export Council", note: "Registered exporter" },
  { abbr: "RJC", name: "Responsible Jewellery Council", note: "Ethical practice" },
];

const ASSURANCES = [
  { icon: BadgeCheck, text: "Laser-inscribed report numbers on certified stones" },
  { icon: FileCheck2, text: "Full invoice, packing list and origin documentation" },
  { icon: Globe, text: "Insured door-to-door courier via Malca-Amit / Brink's" },
  { icon: Lock, text: "Vault-secured handling and sealed tamper-evident parcels" },
];

export function Trust() {
  return (
    <section id="trust" className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Trust & Certifications"
          title={
            <>
              Every parcel <span className="text-gold-gradient">accounted for</span>
            </>
          }
          subtitle="Grading, provenance and compliance credentials that let your own buyers verify what they are receiving."
        />

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CREDENTIALS.map((c, i) => (
            <Reveal key={c.abbr} delay={(i % 3) * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                className="surface-lux flex items-center gap-5 rounded-sm p-6"
              >
                <span className="font-display text-3xl tracking-[0.08em] text-primary">
                  {c.abbr}
                </span>
                <span className="h-10 w-px bg-border" />
                <span>
                  <span className="block text-sm text-foreground">{c.name}</span>
                  <span className="mt-1 block text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {c.note}
                  </span>
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-border pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {ASSURANCES.map((a, i) => (
            <Reveal key={a.text} delay={i * 0.06}>
              <div className="flex gap-4">
                <a.icon className="size-5 shrink-0 text-primary" strokeWidth={1.3} />
                <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
