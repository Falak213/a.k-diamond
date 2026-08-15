import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.asset.json";
import { COMPANY, NAV } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="mx-auto max-w-[88rem] px-6 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt={COMPANY.name}
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-lg tracking-[0.24em]">
                {COMPANY.name.toUpperCase()}
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/65">
              {/* TODO: Replace with company description. */}
              {COMPANY.shortDescription}
            </p>
            <p className="mt-8 text-[0.65rem] tracking-[0.28em] text-champagne uppercase">
              Wholesale &amp; export only · Not a retail store
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.28em] text-ink-foreground/50 uppercase">
              Navigate
            </p>
            <ul className="mt-6 space-y-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ink-foreground/70 transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.28em] text-ink-foreground/50 uppercase">
              Contact
            </p>
            {/* TODO: Replace with actual company contact details in src/content/site.ts */}
            <ul className="mt-6 space-y-2 text-sm text-ink-foreground/70">
              {COMPANY.address.map((l) => (
                <li key={l}>{l}</li>
              ))}
              {COMPANY.emails.map((l) => (
                <li key={l}>{l}</li>
              ))}
              {COMPANY.phones.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <Link
              to="/book-demo"
              className="mt-8 inline-block border border-champagne/50 px-6 py-3 text-[0.65rem] tracking-[0.22em] text-champagne uppercase transition-colors hover:bg-champagne hover:text-ink"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-foreground/12 pt-8 text-xs text-ink-foreground/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="tracking-[0.2em] uppercase">{COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
