import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Trust } from "@/components/site/Trust";
import { CTABand } from "@/components/site/CTABand";

const TITLE = "Certifications & Quality Assurance | A.K. Diamonds";
const DESCRIPTION =
  "TODO: Replace with actual certifications page description for SEO.";

export const Route = createFileRoute("/certifications")({
  component: CertificationsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
});

function CertificationsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Certifications & Trust"
        title={
          <>
            Every parcel <span className="text-gold-gradient">accounted for</span>
          </>
        }
        intro="TODO: Replace with actual certification and compliance details once supplied by the company."
      />
      <Trust />
      <CTABand />
    </Layout>
  );
}
