import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import { CATALOGUES } from "@/content/site";

const TITLE = "Product Catalogue — Download PDFs | A.K. Diamonds";
const DESCRIPTION =
  "Download wholesale diamond product catalogues — natural and lab-grown specification sheets.";

export const Route = createFileRoute("/catalogue")({
  component: CataloguePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/catalogue" }],
  }),
});

function CataloguePage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Product Catalogue"
        title={
          <>
            Download wholesale <span className="text-gold-gradient">specification sheets</span>
          </>
        }
        intro="TODO: Replace with actual catalogue introduction. Download current wholesale specification sheets for natural and lab-grown diamonds."
      />

      <section className="border-t border-border py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {CATALOGUES.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.1}>
                <div className="surface-lux flex h-full flex-col rounded-sm p-8 md:p-10">
                  <span className="w-fit rounded-sm border border-primary/40 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-primary uppercase">
                    {c.id === "natural" ? "Natural" : "Lab-Grown"}
                  </span>
                  <h3 className="mt-8 text-2xl tracking-tight md:text-3xl">{c.title}</h3>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <a
                    href={c.file}
                    download
                    className="group mt-8 inline-flex items-center gap-3 self-start rounded-sm border border-primary/60 px-6 py-3.5 text-[0.65rem] tracking-[0.24em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                    Download PDF
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 text-center text-xs tracking-[0.16em] text-muted-foreground uppercase">
              TODO: Replace PDF files in /public/downloads with actual catalogues
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
