import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import { Download, Check } from "lucide-react";
import labGrownImage from "@/assets/lab-grown-diamonds.jpg";
import { CATALOGUES } from "@/content/site";

const TITLE = "Lab-Grown Diamonds — CVD & HPHT Wholesale | A.K. Diamonds";
const DESCRIPTION =
  "TODO: Replace with actual lab-grown diamond page description for SEO.";

export const Route = createFileRoute("/lab-grown-diamonds")({
  component: LabGrownDiamondsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/lab-grown-diamonds" }],
  }),
});

const labGrownCatalogue = CATALOGUES.find((c) => c.id === "lab-grown");

function LabGrownDiamondsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Lab-Grown Diamonds"
        title={
          <>
            Lab-grown diamonds, <span className="text-gold-gradient">built for volume</span>
          </>
        }
        intro="TODO: Replace with actual lab-grown diamond description — CVD and HPHT processes, quality, and wholesale positioning."
        image={labGrownImage}
        imageAlt="TODO: Replace with actual lab-grown diamond image description"
      />

      <section className="border-t border-border py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <p className="eyebrow">Product Overview</p>
              <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
                TODO: Replace with actual lab-grown diamond details
              </h2>
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <p>
                  TODO: Replace with actual information about CVD and HPHT lab-grown diamond
                  production, Type IIa quality, and chemical identity to mined stones.
                </p>
                <p>
                  TODO: Replace with available shapes, sizes, colour and clarity ranges.
                </p>
                <p>
                  TODO: Replace with information about certification, grading reports,
                  and laser inscription.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="surface-lux rounded-sm p-8 md:p-10">
                <p className="eyebrow">Specifications</p>
                <ul className="mt-8 space-y-4">
                  {[
                    "TODO: Replace with available sizes and carat range",
                    "TODO: Replace with available colour grades",
                    "TODO: Replace with available clarity grades",
                    "TODO: Replace with available shapes and cuts",
                    "TODO: Replace with certification details",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                      {p}
                    </li>
                  ))}
                </ul>
                {labGrownCatalogue ? (
                  <a
                    href={labGrownCatalogue.file}
                    download
                    className="group mt-10 inline-flex items-center gap-3 self-start rounded-sm border border-primary/60 px-6 py-3.5 text-[0.65rem] tracking-[0.24em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                    Download Catalogue
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
