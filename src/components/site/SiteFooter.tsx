import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.asset.json";
import { COMPANY, NAV } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="section-ink">
      <div className="mx-auto max-w-[85rem] px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt={COMPANY.name}
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-lg tracking-[0.24em] text-ink-foreground">
                A.K. DIAMONDS
              </span>
            </div>
            <p className="mt-7 max-w-sm text-sm leading-[1.9] text-ink-foreground/60">
              {COMPANY.positioning}
            </p>
            <p className="mt-7 text-[0.62rem] tracking-[0.28em] text-ink-foreground/45 uppercase">
              Wholesale &amp; export only · No retail sales
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {NAV.filter((n) => n.children).map((group) => (
              <div key={group.label}>
                <p className="text-[0.62rem] tracking-[0.28em] text-ink-foreground/45 uppercase">
                  {group.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {group.children!.map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to}
                        className="text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-[0.62rem] tracking-[0.28em] text-ink-foreground/45 uppercase">
                Company
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  { label: "About", to: "/about" },
                  { label: "Book a Demo", to: "/book-demo" },
                  { label: "Contact", to: "/contact" },
                ].map((c) => (
                  <li key={c.to}>
                    <Link
                      to={c.to}
                      className="text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* TODO: Replace with actual company contact details (src/config/site.ts). */}
              <p className="mt-6 text-sm text-ink-foreground/60">{COMPANY.emails[0]}</p>
              <p className="text-sm text-ink-foreground/60">{COMPANY.phones[0]}</p>
            </div>
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
