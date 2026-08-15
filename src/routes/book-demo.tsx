import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { BookDemo } from "@/components/site/BookDemo";
import { BOOKING_URL } from "@/content/site";

const TITLE = "Book a Demo — Live Virtual Viewing | A.K. Diamonds";
const DESCRIPTION =
  "Book a live virtual viewing with our export desk. See certified diamond parcels on camera, discuss wholesale terms, and request pricing.";

export const Route = createFileRoute("/book-demo")({
  component: BookDemoPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/book-demo" }],
  }),
});

function BookDemoPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Book a Demo"
        title={
          <>
            See the parcels <span className="text-gold-gradient">live on camera</span>
          </>
        }
        intro="A 30-minute virtual viewing with an account manager — stones on the tray, grading reports on screen, wholesale terms discussed directly."
      />
      <BookDemo />
      {BOOKING_URL ? (
        <section className="border-t border-border py-28 md:py-36">
          <div className="mx-auto max-w-4xl px-6">
            <iframe
              src={BOOKING_URL}
              title="Book a meeting"
              className="h-[700px] w-full border-0"
              loading="lazy"
            />
          </div>
        </section>
      ) : null}
    </Layout>
  );
}
