import { motion } from "motion/react";
import { Gem, Droplets, Palette, Scissors, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import educationImage from "@/assets/WhatsApp_Image_2026-08-15_at_6.48.36_PM.jpeg";

const CS = [
  {
    icon: Gem,
    title: "Carat",
    lead: "Weight, not size",
    body: "One carat equals 0.20 grams. Weight is objective; proportions determine how large a stone looks and how much light it returns.",
    scale: ["0.50 ct", "1.00 ct", "2.00 ct", "3.00 ct"],
  },
  {
    icon: Droplets,
    title: "Clarity",
    lead: "The world within",
    body: "Inclusions and blemishes are assessed under 10x magnification, from internally flawless through included grades.",
    scale: ["IF", "VVS", "VS", "SI"],
  },
  {
    icon: Palette,
    title: "Colour",
    lead: "From D to Z",
    body: "The colour scale moves from colourless to light yellow. Small differences can make a meaningful difference to value.",
    scale: ["D–F", "G–J", "K–M", "N–Z"],
  },
  {
    icon: Scissors,
    title: "Cut",
    lead: "Where fire is made",
    body: "Proportion, symmetry and polish determine how a diamond handles light. Cut is the craft within the stone.",
    scale: ["Ideal", "Excellent", "Very Good", "Good"],
  },
];

export function FourCs() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border py-28 md:py-36">
      <div className="absolute top-0 left-1/2 h-px w-40 -translate-x-1/2 bg-primary/70" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-24">
          <SectionHeading
            align="left"
            eyebrow="Diamond Education"
            title={
              <>
                Learn the language of <span className="text-gold-gradient">value</span>
              </>
            }
            subtitle="The four Cs give every trade buyer a shared vocabulary for comparing stones, parcels and specifications with precision."
          />

          <Reveal delay={0.12} className="relative lg:pb-4">
            <motion.div
              whileHover={{ y: -8, rotate: 1.2 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative mx-auto max-w-[18rem] overflow-hidden border border-primary/25 bg-card p-2 shadow-[var(--shadow-lux)]"
            >
              <img
                src={educationImage}
                alt="Diamond education reference showing shapes, carat, clarity, colour and cut"
                width={736}
                height={1031}
                loading="lazy"
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-2 border border-white/15" />
            </motion.div>
            <p className="mt-4 text-center text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase">
              A shared language for every parcel
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {CS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6, backgroundColor: "oklch(0.205 0.009 72)" }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="group relative h-full bg-card p-7 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center border border-primary/30 text-primary transition-colors group-hover:border-primary/70 group-hover:bg-primary/10">
                    <c.icon className="size-5" strokeWidth={1.2} />
                  </div>
                  <span className="font-display text-4xl text-muted-foreground/20">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-3xl tracking-tight">{c.title}</h3>
                <p className="mt-1 text-[0.65rem] tracking-[0.24em] text-primary uppercase">
                  {c.lead}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
                  {c.scale.map((s) => (
                    <span
                      key={s}
                      className="border border-border px-2.5 py-1 text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors group-hover:border-primary/25 group-hover:text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="absolute right-7 bottom-7 size-4 text-primary/0 transition-all group-hover:right-6 group-hover:text-primary/70" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
