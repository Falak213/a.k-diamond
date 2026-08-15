import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FourCs } from "@/components/site/FourCs";
import { Products } from "@/components/site/Products";
import { ShapesShowcase } from "@/components/site/ShapesShowcase";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Trust } from "@/components/site/Trust";
import { BookDemo } from "@/components/site/BookDemo";
import { Contact, Footer } from "@/components/site/Contact";

const TITLE = "A.K. Diamonds — Global Wholesale Diamond Exporters";
const DESCRIPTION =
  "Natural and lab-grown polished diamonds supplied wholesale to 38 export markets. GIA, IGI and HRD certified, calibrated parcels, export only. Book a live demo.";

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
          name: "A.K. Diamonds",
          slogan: "Rise · Shine · Eternity",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bharat Diamond Bourse, Tower B, Bandra Kurla Complex",
            addressLocality: "Mumbai",
            postalCode: "400051",
            addressCountry: "IN",
          },
          email: "exports@akdiamonds.com",
          telephone: "+91 22 4000 8800",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Nav />
      <main>
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
      </main>
      <Footer />
    </>
  );
}
