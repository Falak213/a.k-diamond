import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import atelierImage from "@/assets/atelier.jpg";
import { COMPANY, STATS } from "@/content/site";

const TITLE = "About — A.K. Diamonds";
const DESCRIPTION =
  "TODO: Replace with actual company description for the About page.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            A wholesale diamond house <span className="text-gold-gradient">built for export</span>
          </>
        }
        intro="TODO: Replace with actual company description — history, mission, and positioning as a wholesale diamond exporter."
        image={atelierImage}
        imageAlt="TODO: Replace with actual company or atelier image"
      />

      <section className="border-t border-border py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            <Reveal>
              <p className="eyebrow">Our Story</p>
              <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
                TODO: Replace with actual company history
              </h2>
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <p>
                  TODO: Replace with actual company history — founding, heritage, milestones,
                  and growth as a diamond export business.
                </p>
                <p>
                  TODO: Replace with details about the company's expertise, manufacturing
                  capabilities, and commitment to quality.
                </p>
                <p>
                  TODO: Replace with information about the company's position in the global
                  diamond trade and relationships with international buyers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="surface-lux rounded-sm p-8 md:p-10">
                <p className="eyebrow">At a Glance</p>
                <dl className="mt-8 space-y-8">
                  {STATS.map((s) => (
                    <div key={s.label} className="border-b border-border pb-6 last:border-0">
                      <dt className="font-display text-4xl text-primary">{s.value}</dt>
                      <dd className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
