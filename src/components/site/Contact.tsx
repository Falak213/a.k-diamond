import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { COMPANY } from "@/content/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const DETAILS = [
    {
      icon: MapPin,
      label: "Head office",
      lines: COMPANY.address,
    },
    { icon: Mail, label: "Email", lines: COMPANY.emails },
    { icon: Phone, label: "Telephone", lines: COMPANY.phones },
    { icon: Clock3, label: "Trading hours", lines: COMPANY.hours },
  ];

  return (
    <section id="contact" className="relative border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Speak to the <span className="text-gold-gradient">export desk</span>
            </>
          }
          subtitle="Trade enquiries only. Please include your company name and registration details with any first approach."
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.07}>
              <div className="surface-lux h-full rounded-sm p-8">
                <d.icon className="size-5 text-primary" strokeWidth={1.3} />
                <p className="mt-6 text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {d.label}
                </p>
                {d.lines.map((l) => (
                  <p key={l} className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {l}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="A.K. Diamonds"
            width={40}
            height={40}
            loading="lazy"
            className="h-10 w-10 rounded-sm object-cover"
          />
          <span className="font-display text-sm tracking-[0.22em]">A.K. DIAMONDS</span>
        </div>
        <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
          Wholesale export only · No retail sales
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} A.K. Diamonds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
