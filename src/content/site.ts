/**
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH FOR COMPANY INFORMATION
 * ---------------------------------------------------------------------------
 * Edit everything company-specific in this file. Components read from here so
 * no copy is hard-coded inside the UI.
 *
 * IMPORTANT: Do not publish fabricated information. Every TODO below must be
 * replaced with verified company details before going live.
 */

export const COMPANY = {
  name: "A.K. Diamonds",
  tagline: "Rise · Shine · Eternity",
  // TODO: Replace with actual company description.
  shortDescription:
    "TODO: Replace with actual company description — a wholesale diamond exporter supplying natural and lab-grown polished diamonds to international trade buyers.",
  // TODO: Replace with actual head office address.
  address: ["TODO: Street address", "TODO: City, Postal code", "TODO: Country"],
  // TODO: Replace with actual contact email addresses.
  emails: ["TODO: exports@example.com"],
  // TODO: Replace with actual telephone / WhatsApp numbers.
  phones: ["TODO: +00 000 000 0000"],
  // TODO: Replace with actual trading hours.
  hours: ["TODO: Mon – Sat, 10:00 – 19:00 (local time)", "International calls by appointment"],
} as const;

/**
 * Booking integration.
 * TODO: Add actual CEO calendar/booking URL (e.g. https://calendly.com/your-handle/30min).
 * Leave as an empty string to show the built-in enquiry form instead of the
 * embedded scheduler.
 */
export const BOOKING_URL = "";

/** Headline figures shown on the home page. TODO: Replace with verified company figures. */
export const STATS = [
  { value: "TODO", label: "Export markets" },
  { value: "TODO", label: "Years in the trade" },
  { value: "100%", label: "Certified goods" },
];

/**
 * Certifications & credentials.
 * TODO: Replace with actual certification information — remove any the company
 * does not hold. Do not display credentials that have not been supplied.
 */
export const CERTIFICATIONS = [
  { abbr: "TODO", name: "TODO: Certification name", note: "TODO: Scope" },
  { abbr: "TODO", name: "TODO: Certification name", note: "TODO: Scope" },
  { abbr: "TODO", name: "TODO: Certification name", note: "TODO: Scope" },
];

/**
 * Customer testimonials.
 * TODO: Replace with verified customer testimonial. Do not publish reviews that
 * have not been supplied and approved by the customer.
 */
export const TESTIMONIALS = [
  {
    quote: "TODO: Replace with verified customer testimonial.",
    name: "TODO: Customer name",
    role: "TODO: Role",
    company: "TODO: Company · Country",
  },
  {
    quote: "TODO: Replace with verified customer testimonial.",
    name: "TODO: Customer name",
    role: "TODO: Role",
    company: "TODO: Company · Country",
  },
  {
    quote: "TODO: Replace with verified customer testimonial.",
    name: "TODO: Customer name",
    role: "TODO: Role",
    company: "TODO: Company · Country",
  },
];

/**
 * Downloadable catalogues.
 * TODO: Add product catalogue PDF — replace the files in /public/downloads with
 * the company's real catalogues, keeping the same filenames (or update `file`).
 */
export const CATALOGUES = [
  {
    id: "natural",
    title: "Natural Diamond Catalogue",
    description: "TODO: Replace with actual catalogue description.",
    file: "/downloads/ak-diamonds-natural-catalogue.pdf",
  },
  {
    id: "lab-grown",
    title: "Lab-Grown Diamond Catalogue",
    description: "TODO: Replace with actual catalogue description.",
    file: "/downloads/ak-diamonds-lab-grown-catalogue.pdf",
  },
];

/** Primary navigation. Add or remove pages here. */
export const NAV: Array<{
  label: string;
  to: string;
  children?: Array<{ label: string; to: string }>;
}> = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Diamonds",
    to: "/diamonds",
    children: [
      { label: "The 4Cs", to: "/diamonds" },
      { label: "Diamond Shapes", to: "/shapes" },
      { label: "Natural Diamonds", to: "/natural-diamonds" },
      { label: "Lab-Grown Diamonds", to: "/lab-grown-diamonds" },
    ],
  },
  { label: "Why Us", to: "/why-us" },
  { label: "Certifications", to: "/certifications" },
  { label: "Catalogue", to: "/catalogue" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];
