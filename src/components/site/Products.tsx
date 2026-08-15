import { motion } from "motion/react";
import { Download, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { CATALOGUES } from "@/content/site";

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
          subtitle="Download the current wholesale specification sheets for either category — pricing is quoted per carat against your enquiry."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {CATALOGUES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="surface-lux flex h-full flex-col rounded-sm p-8 md:p-12"
              >
                <span className="w-fit rounded-sm border border-primary/40 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-primary uppercase">
                  {c.id === "natural" ? "Natural" : "Lab-Grown"}
                </span>
                <h3 className="mt-8 text-3xl leading-tight tracking-tight md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
                <ul className="mt-8 space-y-3 border-t border-border pt-8">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                    TODO: Replace with actual product specifications.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                    TODO: Replace with available shapes and sizes.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                    TODO: Replace with certification details.
                  </li>
                </ul>
                <a
                  href={c.file}
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
