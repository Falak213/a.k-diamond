import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SHAPES, DiamondGlyph } from "./DiamondShapes";
import { SectionHeading } from "./Reveal";

export function ShapesShowcase() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset["index"]);
          if (!Number.isNaN(index)) setActive(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const shape = SHAPES[active]!;

  return (
    <section id="shapes" className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Diamond Shapes"
          title={
            <>
              Ten silhouettes, <span className="text-gold-gradient">cut to order</span>
            </>
          }
          subtitle="Scroll through the range — each outline is available across our natural and lab-grown inventory in calibrated sizes."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="surface-lux relative flex aspect-square items-center justify-center rounded-sm p-16">
                <div
                  aria-hidden
                  className="absolute inset-16 rounded-full bg-primary/5 blur-3xl"
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={shape.key}
                    initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.05, rotate: 4 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full"
                    whileHover={{ y: -8, rotate: 2.5, scale: 1.03 }}
                  >
                    <DiamondGlyph shape={shape} active className="h-auto w-full" />
                  </motion.div>
                </AnimatePresence>
                <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] tracking-[0.34em] text-muted-foreground uppercase">
                  {String(active + 1).padStart(2, "0")} / 10 · {shape.name}
                </span>
              </div>
            </div>
          </div>

          <ul className="space-y-3">
            {SHAPES.map((s, i) => {
              const isActive = i === active;
              return (
                <li
                  key={s.key}
                  data-index={i}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  onMouseEnter={() => setActive(i)}
                >
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.45,
                      borderColor: isActive
                        ? "oklch(0.78 0.09 85 / 45%)"
                        : "oklch(0.3 0.015 80 / 35%)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-6 rounded-sm border p-5 md:p-6"
                  >
                    <motion.div
                      className="w-16 shrink-0 md:w-20"
                      whileHover={{ y: -8, rotate: i % 2 === 0 ? -4 : 4, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    >
                      <DiamondGlyph shape={s} active={isActive} className="h-auto w-full" />
                    </motion.div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-2xl tracking-tight">{s.name}</h3>
                        <span className="text-[0.6rem] tracking-[0.24em] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
