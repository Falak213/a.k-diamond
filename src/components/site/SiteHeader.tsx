import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { NAV, COMPANY } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-[85rem] items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo.url}
            alt={`${COMPANY.name} logo`}
            width={40}
            height={40}
            className="h-9 w-9 object-contain md:h-10 md:w-10"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base tracking-[0.24em] md:text-lg">
              A.K. DIAMONDS
            </span>
            <span className="mt-1 text-[0.5rem] tracking-[0.36em] text-muted-foreground uppercase">
              {COMPANY.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  className="flex items-center gap-1.5 text-[0.7rem] tracking-[0.2em] text-foreground/70 uppercase transition-colors hover:text-foreground"
                  onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                >
                  {item.label}
                  <ChevronDown className="size-3" />
                </button>
                <AnimatePresence>
                  {openGroup === item.label ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5"
                    >
                      <div className="surface-soft rounded-sm p-2 shadow-[0_30px_60px_-40px_oklch(0.3_0.02_70/45%)]">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block rounded-sm px-4 py-3 transition-colors hover:bg-muted"
                          >
                            <span className="block text-sm">{c.label}</span>
                            {c.hint ? (
                              <span className="mt-0.5 block text-xs text-muted-foreground">
                                {c.hint}
                              </span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.to}>
                <Link
                  to={item.to!}
                  className="text-[0.7rem] tracking-[0.2em] text-foreground/70 uppercase transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/book-demo"
            className="hidden bg-ink px-6 py-3 text-[0.65rem] tracking-[0.22em] text-ink-foreground uppercase transition-opacity hover:opacity-85 md:inline-block"
          >
            Book a Demo
          </Link>
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="border border-border p-2.5 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation — full list, generous tap targets */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="max-h-[75vh] overflow-y-auto px-5 py-4">
              {NAV.map((item) => (
                <div key={item.label} className="border-b border-border/70 py-1 last:border-0">
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="block py-3.5 text-sm tracking-[0.14em] uppercase"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="py-3">
                      <p className="text-[0.62rem] tracking-[0.28em] text-primary uppercase">
                        {item.label}
                      </p>
                      <div className="mt-1">
                        {item.children?.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block py-3 text-sm text-foreground/80"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/book-demo"
                className="mt-5 block bg-ink py-4 text-center text-[0.65rem] tracking-[0.22em] text-ink-foreground uppercase"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
