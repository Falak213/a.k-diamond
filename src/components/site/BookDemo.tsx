import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { format } from "date-fns";
import { CalendarDays, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

export function BookDemo() {
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date || !slot) {
      toast.error("Please pick a date and a time slot.");
      return;
    }
    const form = new FormData(e.currentTarget);
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success("Demo request received", {
        description: `${format(date, "EEEE d MMMM yyyy")} at ${slot} (IST) — we'll confirm with ${String(
          form.get("email"),
        )}.`,
      });
      e.currentTarget?.reset?.();
      setSlot(undefined);
    }, 700);
  };

  return (
    <section id="book-demo" className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Book a Demo"
          title={
            <>
              See the parcels <span className="text-gold-gradient">live on camera</span>
            </>
          }
          subtitle="A 30-minute virtual viewing with an account manager — stones on the tray, grading reports on screen, pricing discussed in your currency."
        />

        <Reveal className="mt-20">
          <form
            onSubmit={onSubmit}
            className="surface-lux grid gap-10 rounded-sm p-8 md:p-12 lg:grid-cols-[auto_minmax(0,1fr)]"
          >
            <div>
              <p className="eyebrow flex items-center gap-2">
                <CalendarDays className="size-3.5 text-primary" /> Select a date
              </p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date() }}
                className={cn("mt-4 rounded-sm border border-border p-3 pointer-events-auto")}
              />
              <p className="eyebrow mt-8 flex items-center gap-2">
                <Clock className="size-3.5 text-primary" /> Time slot (IST)
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {SLOTS.map((s) => (
                  <motion.button
                    key={s}
                    type="button"
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSlot(s)}
                    className={cn(
                      "rounded-sm border px-3 py-2.5 text-xs tracking-[0.12em] transition-colors",
                      slot === s
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                    )}
                  >
                    {s}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid content-start gap-5">
              <Field label="Full name" name="name" placeholder="Your name" required />
              <Field label="Company" name="company" placeholder="Registered business name" required />
              <Field
                label="Business email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
              <Field label="Country" name="country" placeholder="Country of operation" required />
              <div>
                <label
                  htmlFor="interest"
                  className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase"
                >
                  What are you sourcing?
                </label>
                <textarea
                  id="interest"
                  name="interest"
                  rows={4}
                  placeholder="Shapes, sizes, colour/clarity range, monthly volume…"
                  className="mt-3 w-full resize-none rounded-sm border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-3 rounded-sm bg-primary px-8 py-4 text-[0.7rem] tracking-[0.26em] text-primary-foreground uppercase transition-all hover:brightness-110 disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Request Demo"}
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-xs text-muted-foreground">
                  {date && slot
                    ? `${format(date, "d MMM yyyy")} · ${slot} IST`
                    : "Pick a date and slot to continue"}
                </p>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
