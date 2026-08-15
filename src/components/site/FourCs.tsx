import { motion } from "motion/react";
import { Gem, Droplets, Palette, Scissors } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const CS = [
  {
    icon: Gem,
    title: "Carat",
    lead: "Weight, not size",
    body: "One carat equals 0.20 grams. Carat weight is the most objective of the four Cs — larger stones are rarer and command higher per-carat prices.",
    scale: ["0.50 ct", "1.00 ct", "2.00 ct", "3.00 ct"],
  },
  {
    icon: Droplets,
    title: "Clarity",
    lead: "IF to I3",
    body: "Inclusions and blemishes are graded under 10x magnification. Grades range from Flawless (IF) through VVS, VS, SI and Included.",
    scale: ["IF", "VVS", "VS", "SI"],
  },
  {
    icon: Palette,
    title: "Colour",
    lead: "D through Z",
    body: "Diamond colour grading runs from D (colourless) to Z (light yellow). Colourless stones are the most valuable; many buyers prefer near-colourless G–J for value.",
    scale: ["D–F", "G–J", "K–M", "N–Z"],
  },
  {
    icon: Scissors,
    title: "Cut",
    lead: "Where fire is made",
    body: "Proportion, symmetry and polish determine how light interacts with the stone. Cut is the single factor most under human control and the most important for brilliance.",
    scale: ["Ideal", "Excellent", "Very Good", "Good"],
  },
];

export function FourCs() {
  return (
    <section id="about" className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Diamonds"
          title={
            <>
              The four C&apos;s that <span className="text-gold-gradient">define value</span>
            </>
          }
          subtitle="Every stone is graded against the same four criteria the world's laboratories use. Understanding them is how buyers compare parcels accurately."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {CS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="surface-lux group h-full rounded-sm p-8 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-sm border border-primary/25 text-primary transition-colors group-hover:border-primary/60">
                    <c.icon className="size-6" strokeWidth={1.2} />
                  </div>
                  <span className="font-display text-5xl text-muted-foreground/25">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-3xl tracking-tight">{c.title}</h3>
                <p className="mt-1 text-[0.65rem] tracking-[0.24em] text-primary uppercase">
                  {c.lead}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {c.scale.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-border px-3 py-1.5 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
