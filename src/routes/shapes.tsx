import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { ShapesShowcase } from "@/components/site/ShapesShowcase";
import { CTABand } from "@/components/site/CTABand";

const TITLE = "Diamond Shapes — Ten Silhouettes | A.K. Diamonds";
const DESCRIPTION =
  "Explore ten diamond shapes available in our natural and lab-grown inventory — round, princess, cushion, emerald, oval, pear, marquise, radiant, asscher and heart.";

export const Route = createFileRoute("/shapes")({
  component: ShapesPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/shapes" }],
  }),
});

function ShapesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Diamond Shapes"
        title={
          <>
            Ten silhouettes, <span className="text-gold-gradient">cut to order</span>
          </>
        }
        intro="Explore the range — each outline is available across our natural and lab-grown inventory in calibrated sizes."
      />
      <ShapesShowcase />
      <CTABand />
    </Layout>
  );
}
