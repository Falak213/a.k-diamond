import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Consistent editorial page opener used by every inner page. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          {intro ? (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              {intro}
            </motion.p>
          ) : null}
        </div>

        {image ? (
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {/* TODO: Replace with actual product image. */}
            <img
              src={image}
              alt={imageAlt ?? ""}
              width={1600}
              height={1104}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
