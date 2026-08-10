import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", label: "Diamond 4C's" },
  { href: "#products", label: "Products" },
  { href: "#shapes", label: "Shapes" },
  { href: "#why-us", label: "Why Us" },
  { href: "#trust", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="A.K. Diamonds logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-sm object-cover"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg tracking-[0.22em] text-foreground">
              A.K. DIAMONDS
            </span>
            <span className="mt-1 text-[0.55rem] tracking-[0.4em] text-primary">
              RISE · SHINE · ETERNITY
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#book-demo"
            className="hidden rounded-sm border border-primary/60 px-5 py-2.5 text-[0.65rem] tracking-[0.22em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            Book a Demo
          </a>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm border border-border p-2 text-foreground lg:hidden"
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {[...LINKS, { href: "#book-demo", label: "Book a Demo" }].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-xs tracking-[0.2em] text-muted-foreground uppercase"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
