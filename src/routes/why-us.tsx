import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { WhyUs } from "@/components/site/WhyUs";
import { CTABand } from "@/components/site/CTABand";

const TITLE = "Why Choose Us — Wholesale Diamond Expertise | A.K. Diamonds";
const DESCRIPTION =
  "TODO: Replace with actual why choose us page description for SEO.";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
});

function WhyUsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Why Choose Us"
        title={
          <>
            Built for the trade, <span className="text-gold-gradient">not the counter</span>
          </>
        }
        intro="A.K. Diamonds exists to supply businesses. Everything from our minimum lots to our documentation is structured around wholesale export."
      />
      <WhyUs />
      <CTABand />
    </Layout>
  );
}
