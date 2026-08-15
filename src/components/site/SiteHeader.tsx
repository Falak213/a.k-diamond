import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { COMPANY, NAV } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[88rem] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt={`${COMPANY.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg tracking-[0.24em]">
              {COMPANY.name.toUpperCase()}
            </span>
            <span className="mt-1.5 text-[0.5rem] tracking-[0.4em] text-muted-foreground uppercase">
              {COMPANY.tagline}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {NAV.map((item) => (
            <li key={item.to} className="group relative">
              <Link
                to={item.to}
                className="flex items-center gap-1 py-6 text-[0.7rem] tracking-[0.18em] text-foreground/70 uppercase transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children ? <ChevronDown className="size-3" /> : null}
              </Link>
              {item.children ? (
                <div className="pointer-events-none absolute top-full left-0 w-60 translate-y-2 border border-border bg-card opacity-0 shadow-[var(--shadow-soft)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block px-5 py-3.5 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:bg-muted hover:text-primary"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/book-demo"
            className="hidden bg-primary px-6 py-3 text-[0.65rem] tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-88 sm:inline-block"
          >
            Book a Demo
          </Link>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="border border-border p-2.5 text-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <ul className="max-h-[70vh] overflow-y-auto px-6 py-4">
              {NAV.flatMap((item) =>
                item.children
                  ? item.children.map((c) => ({ ...c, indent: true }))
                  : [{ ...item, indent: false }],
              ).map((l) => (
                <li key={l.to + l.label}>
                  <Link
                    to={l.to}
                    className={cn(
                      "block border-b border-border/60 py-4 text-xs tracking-[0.2em] text-muted-foreground uppercase",
                      l.indent && "pl-4",
                    )}
                    activeProps={{ className: "text-primary" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/book-demo"
                  className="mt-5 block bg-primary py-4 text-center text-xs tracking-[0.22em] text-primary-foreground uppercase"
                >
                  Book a Demo
                </Link>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
