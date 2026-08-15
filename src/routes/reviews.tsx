import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTABand";
import { Testimonials } from "@/components/site/Testimonials";

const TITLE = "Customer Reviews — Wholesale Diamond Buyers | A.K. Diamonds";
const DESCRIPTION =
  "TODO: Replace with actual reviews page description for SEO.";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

function ReviewsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Reviews"
        title={
          <>
            Trusted by <span className="text-gold-gradient">buyers, not browsers</span>
          </>
        }
        intro="TODO: Replace with actual reviews page introduction once customer testimonials are supplied."
      />
      <Testimonials />
      <CTABand />
    </Layout>
  );
}
