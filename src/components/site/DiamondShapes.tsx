import shapeGuide from "@/assets/WhatsApp_Image_2026-08-15_at_6.48.35_PM.jpeg";

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

type ImagePosition = `${number}% ${number}%`;

export type ShapeInfo = {
  key: ShapeKey;
  name: string;
  description: string;
  imagePosition: ImagePosition;
};

const TOP_ROW = "34%";
const BOTTOM_ROW = "66%";

export const SHAPES: ShapeInfo[] = [
  {
    key: "round",
    name: "Round",
    description:
      "The classic brilliant cut, engineered for maximum light return and fire.",
    imagePosition: `0% ${TOP_ROW}`,
  },
  {
    key: "princess",
    name: "Princess",
    description: "A square cut with crisp corners and a distinctive crushed-ice sparkle.",
    imagePosition: `4% ${TOP_ROW}`,
  },
  {
    key: "cushion",
    name: "Cushion",
    description: "Softly rounded corners create a romantic silhouette with warm brilliance.",
    imagePosition: `4% ${BOTTOM_ROW}`,
  },
  {
    key: "oval",
    name: "Oval",
    description: "An elongated brilliant that creates elegant spread and finger coverage.",
    imagePosition: `0% ${BOTTOM_ROW}`,
  },
  {
    key: "emerald",
    name: "Emerald",
    description: "A step cut with cropped corners and a clean hall-of-mirrors effect.",
    imagePosition: `8% ${TOP_ROW}`,
  },
  {
    key: "pear",
    name: "Pear",
    description: "A teardrop brilliant combining the character of round and marquise cuts.",
    imagePosition: `8% ${BOTTOM_ROW}`,
  },
  {
    key: "marquise",
    name: "Marquise",
    description: "Two pointed ends create a regal, elongated outline with generous spread.",
    imagePosition: `16% ${TOP_ROW}`,
  },
  {
    key: "asscher",
    name: "Asscher",
    description: "A square step cut with cropped corners and hypnotic concentric facets.",
    imagePosition: `12% ${TOP_ROW}`,
  },
  {
    key: "radiant",
    name: "Radiant",
    description: "A trimmed-corner brilliant combining bold geometry with lively sparkle.",
    imagePosition: `16% ${BOTTOM_ROW}`,
  },
  {
    key: "heart",
    name: "Heart",
    description: "A romantic cleft silhouette that demands exceptional cutting precision.",
    imagePosition: `12% ${BOTTOM_ROW}`,
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
    <div
      className={className}
      role="img"
      aria-label={`${shape.name} cut diamond reference image`}
      style={{
        aspectRatio: "1.18",
        backgroundColor: "#f8f7f2",
        backgroundImage: `url(${shapeGuide})`,
        backgroundPosition: shape.imagePosition,
        backgroundRepeat: "no-repeat",
        backgroundSize: "500% auto",
        boxShadow: active ? "0 0 0 1px rgb(229 205 144 / 55%), 0 18px 40px rgb(0 0 0 / 22%)" : "none",
        transition: "box-shadow 300ms ease",
      }}
    />
  );
}
