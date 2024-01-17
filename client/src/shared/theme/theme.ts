type Palette =
  | "primary"
  | "secondary"
  | "neutral"
  | "darkGrey"
  | "neutralWhite"
  | "neutralBlack"
  | "greyText";

export const PALETTE: Record<Palette, string> = {
  primary: "#6CD3DE",
  secondary: "#68AFDD",
  neutral: "#191919",
  darkGrey: "#2F2C2C",
  neutralWhite: "#FFF",
  neutralBlack: "#000",
  greyText: "#777777",
};

export type Typography = {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  fontStyle: string;
};

export type TypographiesType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "label";

export const TYPOGRAPHIES: Record<TypographiesType, Typography> = {
  h1: {
    fontSize: "55px",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  h2: {
    fontSize: "",
    fontWeight: "",
    lineHeight: "",
    fontStyle: "",
  },
  h3: {
    fontSize: "22px",
    fontWeight: "400",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  h4: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  h5: {
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  h6: {
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  span: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  label: {
    fontSize: "",
    fontWeight: "",
    lineHeight: "",
    fontStyle: "",
  },
};
