import { motion } from "motion/react";
import { Download, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const CATEGORIES = [
  {
    tag: "Natural",
    title: "Natural Polished Diamonds",
    body: "Kimberley Process compliant, conflict-free rough sourced through sightholder channels and polished in-house in Surat.",
    points: [
      "0.30 – 5.00 ct singles, all shapes",
      "D–J colour, IF–SI2 clarity",
      "Calibrated melee parcels from 0.005 ct",
      "GIA / IGI / HRD certification on request",
    ],
    pdf: "/downloads/ak-diamonds-natural-catalogue.pdf",
  },
  {
    tag: "Lab-Grown",
    title: "CVD & HPHT Lab-Grown",
    body: "Type IIa laboratory-grown diamonds, chemically identical to mined stones, produced at volumes that hold to your delivery schedule.",
    points: [
      "0.30 – 10.00 ct, fancy and round",
      "D–F colour, VVS–VS clarity standard",
      "Fancy pink, blue and yellow HPHT",
      "IGI certified with laser inscription",
    ],
    pdf: "/downloads/ak-diamonds-lab-grown-catalogue.pdf",
  },
];

export function Products() {
  return (
    <section id="products" className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Products"
          title={
            <>
              Two inventories. <span className="text-gold-gradient">One standard.</span>
            </>
          }
          subtitle="Download the current wholesale specification sheets for either category — pricing is quoted per carat, ex-works, against your enquiry."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="surface-lux flex h-full flex-col rounded-sm p-8 md:p-12"
              >
                <span className="w-fit rounded-sm border border-primary/40 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-primary uppercase">
                  {c.tag}
                </span>
                <h3 className="mt-8 text-3xl leading-tight tracking-tight md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <ul className="mt-8 space-y-3 border-t border-border pt-8">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={c.pdf}
                  download
                  className="group mt-10 inline-flex items-center gap-3 self-start rounded-sm border border-primary/60 px-6 py-3.5 text-[0.65rem] tracking-[0.24em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                  Download PDF
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
