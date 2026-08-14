import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Editorial page masthead used at the top of every inner page. */
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
    <section className="relative overflow-hidden pt-[7.5rem] pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-[85rem] px-5 md:px-8">
        <div
          className={cn(
            "grid items-center gap-12",
            image ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" : "",
          )}
        >
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
              className="mt-6 max-w-3xl text-[2.6rem] leading-[1.06] md:text-[4rem]"
            >
              {title}
            </motion.h1>
            {intro ? (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 max-w-xl text-sm leading-[1.95] text-muted-foreground md:text-base"
              >
                {intro}
              </motion.p>
            ) : null}
          </div>

          {image ? (
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[5/4] overflow-hidden"
            >
              {/* TODO: Replace with actual product image supplied by the company. */}
              <img
                src={image}
                alt={imageAlt ?? ""}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
