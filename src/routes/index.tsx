import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { FourCs } from "@/components/site/FourCs";
import { Products } from "@/components/site/Products";
import { ShapesShowcase } from "@/components/site/ShapesShowcase";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Trust } from "@/components/site/Trust";
import { BookDemo } from "@/components/site/BookDemo";
import { Contact } from "@/components/site/Contact";
import { COMPANY } from "@/content/site";

const TITLE = "A.K. Diamonds — Global Wholesale Diamond Exporters";
const DESCRIPTION =
  "Wholesale natural and lab-grown diamond exporters. Certified, calibrated parcels shipped worldwide. Book a live demo.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: COMPANY.name,
          slogan: COMPANY.tagline,
          description: DESCRIPTION,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <Layout>
      <h1 className="sr-only">
        A.K. Diamonds — global wholesale exporters of natural and lab-grown diamonds
      </h1>
      <Hero />
      <FourCs />
      <Products />
      <ShapesShowcase />
      <WhyUs />
      <Testimonials />
      <Trust />
      <BookDemo />
      <Contact />
    </Layout>
  );
}
