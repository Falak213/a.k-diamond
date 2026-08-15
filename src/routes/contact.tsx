import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const TITLE = "Contact — Export Desk | A.K. Diamonds";
const DESCRIPTION =
  "Contact A.K. Diamonds for wholesale diamond enquiries. Trade buyers only — email, phone, WhatsApp and business enquiry form.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success("Enquiry received", {
        description: "We'll respond to your trade enquiry shortly.",
      });
      e.currentTarget?.reset?.();
    }, 700);
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Speak to the <span className="text-gold-gradient">export desk</span>
          </>
        }
        intro="Trade enquiries only. Please include your company name and registration details with any first approach."
      />

      <Contact />

      <section className="border-t border-border py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="eyebrow">Business Enquiry Form</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
              Send us your requirements
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              TODO: This form is a placeholder. Configure an email service or form backend
              to receive submissions.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="surface-lux mt-10 grid gap-5 rounded-sm p-8 md:p-10"
            >
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
                  htmlFor="message"
                  className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase"
                >
                  Your enquiry
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Shapes, sizes, colour/clarity range, monthly volume…"
                  className="mt-3 w-full resize-none rounded-sm border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-3 self-start rounded-sm bg-primary px-8 py-4 text-[0.7rem] tracking-[0.26em] text-primary-foreground uppercase transition-all hover:brightness-110 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send Enquiry"}
                <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </Layout>
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
