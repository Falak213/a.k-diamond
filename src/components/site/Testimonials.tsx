import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { TESTIMONIALS } from "@/content/site";

export function Testimonials() {
  return (
    <section className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by <span className="text-gold-gradient">buyers, not browsers</span>
            </>
          }
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((r, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <motion.figure
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                className="surface-lux flex h-full flex-col rounded-sm p-8 md:p-10"
              >
                <Quote className="size-7 text-primary/70" strokeWidth={1.2} />
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-foreground/90 md:text-2xl">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-6">
                  <p className="text-sm text-foreground">{r.name}</p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-primary uppercase">
                    {r.role}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.company}</p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
