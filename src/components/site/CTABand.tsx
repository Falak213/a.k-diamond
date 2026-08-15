import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

/** Recurring "Book a Demo" call to action, used at the foot of every page. */
export function CTABand({
  title = "Let us show you the goods",
  body = "Book a live virtual viewing with our export desk — stones on the tray, grading reports on screen, wholesale terms discussed directly.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="surface-ink">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-10 px-6 py-24 md:py-28 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-champagne">Book a Demo</p>
          <h2 className="mt-5 text-4xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-foreground/70">{body}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-demo"
              className="group inline-flex items-center gap-3 bg-champagne px-8 py-4 text-[0.68rem] tracking-[0.24em] text-ink uppercase transition-opacity hover:opacity-90"
            >
              Book a Demo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-3 border border-ink-foreground/25 px-8 py-4 text-[0.68rem] tracking-[0.24em] text-ink-foreground uppercase transition-colors hover:border-champagne hover:text-champagne"
            >
              Product Catalogue
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
