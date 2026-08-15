export type ShapeKey =
  | "round"
  | "princess"
  | "cushion"
  | "oval"
  | "emerald"
  | "pear"
  | "marquise"
  | "asscher"
  | "radiant"
  | "heart";

export type ShapeInfo = {
  key: ShapeKey;
  name: string;
  description: string;
  outline: string;
  facets: string[];
};

export const SHAPES: ShapeInfo[] = [
  {
    key: "round",
    name: "Round",
    description:
      "The classic, most popular circular brilliant cut — engineered for maximum light return and fire.",
    outline: "M50 6 A44 44 0 1 1 49.9 6 Z",
    facets: [
      "M50 6 L74 22 L94 50 L74 78 L50 94 L26 78 L6 50 L26 22 Z",
      "M32 32 L68 32 L68 68 L32 68 Z",
      "M32 32 L68 68 M68 32 L32 68",
    ],
  },
  {
    key: "princess",
    name: "Princess",
    description:
      "A square or rectangular cut with sharp, uncropped corners and a striking crushed-ice brilliance.",
    outline: "M8 8 H92 V92 H8 Z",
    facets: ["M8 8 L92 92 M92 8 L8 92", "M30 30 H70 V70 H30 Z", "M50 8 V92 M8 50 H92"],
  },
  {
    key: "cushion",
    name: "Cushion",
    description:
      "A square or rectangle with softly rounded corners — pillow-like, with warm romantic light.",
    outline: "M28 8 H72 Q92 8 92 28 V72 Q92 92 72 92 H28 Q8 92 8 72 V28 Q8 8 28 8 Z",
    facets: ["M20 20 L80 80 M80 20 L20 80", "M32 32 H68 V68 H32 Z"],
  },
  {
    key: "oval",
    name: "Oval",
    description:
      "An elongated, rounded brilliant that flatters the finger and appears larger per carat.",
    outline: "M50 4 C74 4 88 24 88 50 C88 76 74 96 50 96 C26 96 12 76 12 50 C12 24 26 4 50 4 Z",
    facets: ["M50 4 V96", "M22 30 L78 70 M78 30 L22 70", "M34 34 H66 V66 H34 Z"],
  },
  {
    key: "emerald",
    name: "Emerald",
    description:
      "A rectangular step cut with parallel facets and cropped corners — clarity-forward elegance.",
    outline: "M32 6 H68 L86 24 V76 L68 94 H32 L14 76 V24 Z",
    facets: [
      "M36 16 H64 L78 28 V72 L64 84 H36 L22 72 V28 Z",
      "M41 26 H59 L70 34 V66 L59 74 H41 L30 66 V34 Z",
    ],
  },
  {
    key: "pear",
    name: "Pear",
    description:
      "A teardrop silhouette, pointed at one end — a brilliant hybrid of round and marquise.",
    outline: "M50 4 C62 26 86 42 86 64 C86 82 70 96 50 96 C30 96 14 82 14 64 C14 42 38 26 50 4 Z",
    facets: ["M50 4 V96", "M24 52 L76 52", "M32 44 L68 78 M68 44 L32 78"],
  },
  {
    key: "marquise",
    name: "Marquise",
    description:
      "An elliptical shape with two pointed ends — maximum spread and a regal, elongated look.",
    outline: "M50 4 C70 22 84 38 84 50 C84 62 70 78 50 96 C30 78 16 62 16 50 C16 38 30 22 50 4 Z",
    facets: ["M50 4 V96", "M16 50 H84", "M30 34 L70 66 M70 34 L30 66"],
  },
  {
    key: "asscher",
    name: "Asscher",
    description:
      "A square step cut with cropped corners, deep pavilion and hypnotic concentric hall-of-mirrors.",
    outline: "M28 8 H72 L92 28 V72 L72 92 H28 L8 72 V28 Z",
    facets: [
      "M34 18 H66 L82 34 V66 L66 82 H34 L18 66 V34 Z",
      "M40 28 H60 L72 40 V60 L60 72 H40 L28 60 V40 Z",
      "M28 28 L72 72 M72 28 L28 72",
    ],
  },
  {
    key: "radiant",
    name: "Radiant",
    description:
      "A trimmed-corner rectangular or square brilliant — the sparkle of a round in a bold outline.",
    outline: "M26 8 H74 L92 26 V74 L74 92 H26 L8 74 V26 Z",
    facets: ["M26 8 L74 92 M74 8 L26 92", "M8 50 H92 M50 8 V92", "M34 34 H66 V66 H34 Z"],
  },
  {
    key: "heart",
    name: "Heart",
    description:
      "A unique romantic silhouette — a cleft brilliant demanding exceptional cutting precision.",
    outline:
      "M50 94 C18 70 8 52 8 36 C8 20 20 10 32 10 C41 10 47 15 50 22 C53 15 59 10 68 10 C80 10 92 20 92 36 C92 52 82 70 50 94 Z",
    facets: ["M50 22 V94", "M20 40 L80 40", "M28 30 L72 70 M72 30 L28 70"],
  },
];

export function DiamondGlyph({
  shape,
  active = false,
  className,
}: {
  shape: ShapeInfo;
  active?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`${shape.name} cut diamond`}
    >
      <defs>
        <linearGradient id={`fill-${shape.key}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity={active ? 0.22 : 0.08} />
          <stop offset="100%" stopColor="currentColor" stopOpacity={active ? 0.05 : 0.02} />
        </linearGradient>
      </defs>
      <path
        d={shape.outline}
        fill={`url(#fill-${shape.key})`}
        stroke="currentColor"
        strokeWidth={active ? 2 : 1.4}
        strokeLinejoin="round"
      />
      {shape.facets.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeOpacity={active ? 0.6 : 0.35}
          strokeWidth={0.9}
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
