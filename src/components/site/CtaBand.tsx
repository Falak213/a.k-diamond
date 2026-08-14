import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

/** Recurring "Book a Demo" call to action placed at the end of most pages. */
export function CtaBand({
  title = "Let's look at stones together.",
  body = "Book a 30-minute virtual viewing with our export desk — parcels on the tray, grading reports on screen, pricing discussed in your currency.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-ink">
      <div className="mx-auto max-w-[85rem] px-5 py-24 md:px-8 md:py-32">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <p className="text-[0.68rem] tracking-[0.32em] text-primary uppercase">Book a Demo</p>
            <h2 className="mt-6 max-w-xl text-[2.1rem] leading-[1.12] text-ink-foreground md:text-5xl">
              {title}
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-[1.9] text-ink-foreground/65">{body}</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              to="/book-demo"
              className="group inline-flex items-center gap-3 bg-ink-foreground px-8 py-4 text-[0.65rem] tracking-[0.24em] text-ink uppercase transition-opacity hover:opacity-88"
            >
              Book a Demo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-ink-foreground/25 px-8 py-4 text-[0.65rem] tracking-[0.24em] text-ink-foreground uppercase transition-colors hover:border-ink-foreground/60"
            >
              Contact Desk
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
