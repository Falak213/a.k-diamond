import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Globe as Globe2 } from "lucide-react";
import heroImage from "@/assets/hero-diamond.jpg";
import { STATS } from "@/content/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brilliant-cut diamond on dark surface"
          width={1408}
          height={1200}
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="eyebrow flex items-center gap-3"
        >
          <Globe2 className="size-3.5 text-primary" />
          Global diamond exporters · Wholesale only
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Precision-cut brilliance,
          <span className="text-gold-gradient block">exported worldwide.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          A.K. Diamonds supplies natural and lab-grown polished diamonds to wholesalers,
          manufacturers and retail groups worldwide — every parcel certified, calibrated
          and shipped for export.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="/book-demo"
            className="group inline-flex items-center gap-3 rounded-sm bg-primary px-8 py-4 text-[0.7rem] tracking-[0.26em] text-primary-foreground uppercase transition-all hover:brightness-110"
          >
            Book a Demo
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/diamonds"
            className="inline-flex items-center gap-3 rounded-sm border border-border px-8 py-4 text-[0.7rem] tracking-[0.26em] text-foreground uppercase transition-colors hover:border-primary/70 hover:text-primary"
          >
            Explore Diamonds
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl text-primary">{s.value}</dt>
              <dd className="mt-1 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
