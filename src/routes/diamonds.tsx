import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { FourCs } from "@/components/site/FourCs";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import { Gem } from "lucide-react";
import heroImage from "@/assets/hero-diamond.jpg";

const TITLE = "The 4Cs — Diamond Grading | A.K. Diamonds";
const DESCRIPTION =
  "Understanding the four Cs of diamonds — carat, clarity, colour and cut. The grading criteria used by the world's leading laboratories.";

export const Route = createFileRoute("/diamonds")({
  component: DiamondsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/diamonds" }],
  }),
});

function DiamondsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Diamond Education"
        title={
          <>
            The four C&apos;s that <span className="text-gold-gradient">define value</span>
          </>
        }
        intro="Every stone is graded against the same four criteria the world's laboratories use. Understanding them is how buyers compare parcels accurately."
        image={heroImage}
        imageAlt="Close-up of a brilliant-cut diamond"
      />

      <FourCs />

      <section className="border-t border-border py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="surface-lux rounded-sm p-8 md:p-12">
            <div className="flex items-center gap-4">
              <Gem className="size-8 text-primary" strokeWidth={1.2} />
              <p className="eyebrow">Grading Reports</p>
            </div>
            <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
              TODO: Replace with actual grading and certification details
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              TODO: Replace with information about which laboratories grade the company's
              diamonds, what certifications are available, and how grading reports accompany
              each parcel.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
