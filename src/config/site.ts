/**
 * SINGLE SOURCE OF TRUTH for company information.
 *
 * Everything a non-developer is likely to change lives in this file:
 * company details, navigation, certifications, testimonials, catalogue
 * downloads and the booking (Calendly) URL.
 */

export const COMPANY = {
  name: "A.K. Diamonds",
  tagline: "Rise · Shine · Eternity",
  // TODO: Replace with the company's official positioning statement.
  positioning:
    "A global wholesale exporter of natural and lab-grown polished diamonds, supplying manufacturers, wholesalers and retail groups worldwide.",
  // TODO: Replace with actual company description / history.
  about:
    "A.K. Diamonds works exclusively with trade buyers. We source, sort and supply polished diamonds in calibrated parcels and single stones, with export documentation handled end to end. This site is not an online store — every enquiry is quoted individually.",
  // TODO: Replace with actual head office address.
  address: ["TODO: Street address", "TODO: City, Postal code", "India"],
  // TODO: Replace with actual company email addresses.
  emails: ["TODO: exports@yourdomain.com"],
  // TODO: Replace with actual telephone / WhatsApp numbers.
  phones: ["TODO: +91 00000 00000"],
  // TODO: Replace with actual trading hours.
  hours: ["Mon – Sat · 10:00 – 19:00 IST", "International calls by appointment"],
} as const;

/**
 * Booking / demo scheduling.
 * TODO: Add actual CEO calendar/booking URL (Calendly, Cal.com, HubSpot…).
 * Leave as an empty string to show the enquiry form fallback instead.
 */
export const BOOKING_URL = ""; // e.g. "https://calendly.com/your-company/30min"

/**
 * Product catalogue downloads.
 * TODO: Add product catalogue PDF — replace the files in /public/downloads/.
 */
export const CATALOGUES = [
  {
    id: "natural",
    title: "Natural Diamonds Catalogue",
    description: "Shapes, sieve sizes, colour and clarity ranges held in standing inventory.",
    file: "/downloads/ak-diamonds-natural-catalogue.pdf",
    // TODO: Replace with actual PDF once supplied by the company.
    placeholder: true,
  },
  {
    id: "lab-grown",
    title: "Lab-Grown Diamonds Catalogue",
    description: "CVD and HPHT production ranges, sizes and standard grading specifications.",
    file: "/downloads/ak-diamonds-lab-grown-catalogue.pdf",
    // TODO: Replace with actual PDF once supplied by the company.
    placeholder: true,
  },
] as const;

/**
 * Certifications and credentials.
 * TODO: Replace with actual certification information. Only list credentials
 * the company genuinely holds — remove any entry that does not apply.
 */
export const CERTIFICATIONS = [
  { abbr: "GIA", name: "Gemological Institute of America", note: "Grading reports on request", confirmed: false },
  { abbr: "IGI", name: "International Gemological Institute", note: "Natural & lab-grown grading", confirmed: false },
  { abbr: "HRD", name: "HRD Antwerp", note: "European grading", confirmed: false },
  { abbr: "KPCS", name: "Kimberley Process", note: "Conflict-free warranty", confirmed: false },
  { abbr: "TODO", name: "TODO: Additional certification", note: "TODO: Replace with actual certification", confirmed: false },
  { abbr: "TODO", name: "TODO: Membership / registration", note: "TODO: Replace with actual credential", confirmed: false },
] as const;

/**
 * Customer testimonials.
 * TODO: Replace with verified customer testimonial. Do not publish until the
 * company has confirmed each quote and attribution.
 */
export const TESTIMONIALS = [
  { quote: "TODO: Replace with verified customer testimonial.", name: "TODO: Client name", role: "TODO: Role", company: "TODO: Company · Country" },
  { quote: "TODO: Replace with verified customer testimonial.", name: "TODO: Client name", role: "TODO: Role", company: "TODO: Company · Country" },
  { quote: "TODO: Replace with verified customer testimonial.", name: "TODO: Client name", role: "TODO: Role", company: "TODO: Company · Country" },
  { quote: "TODO: Replace with verified customer testimonial.", name: "TODO: Client name", role: "TODO: Role", company: "TODO: Company · Country" },
] as const;

/** Primary navigation. Grouped so the page count stays manageable. */
export const NAV: Array<{
  label: string;
  to?: string;
  children?: Array<{ label: string; to: string; hint?: string }>;
}> = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/about" },
  {
    label: "Diamonds",
    children: [
      { label: "The 4C's", to: "/diamonds", hint: "Carat, colour, clarity, cut" },
      { label: "Diamond Shapes", to: "/shapes", hint: "Ten classic silhouettes" },
      { label: "Natural Diamonds", to: "/natural-diamonds", hint: "Mined, certified parcels" },
      { label: "Lab-Grown Diamonds", to: "/lab-grown-diamonds", hint: "CVD & HPHT production" },
    ],
  },
  {
    label: "Trade",
    children: [
      { label: "Why Choose Us", to: "/why-us", hint: "Wholesale & export only" },
      { label: "Certifications", to: "/certifications", hint: "Quality & compliance" },
      { label: "Product Catalogue", to: "/catalogue", hint: "Download PDFs" },
      { label: "Reviews", to: "/reviews", hint: "Trade references" },
    ],
  },
  { label: "Contact", to: "/contact" },
];
