type Palette =
  | "primary"
  | "secondary"
  | "neutral"
  | "darkGrey"
  | "neutralWhite"
  | "neutralBlack"
  | "greyText"
  | "aquamarine"
  | "lightGrey"
  | "confirm"
  | "cancel";

export const PALETTE: Record<Palette, string> = {
  primary: "#6CD3DE",
  secondary: "#68AFDD",
  neutral: "#191919",
  darkGrey: "#2F2C2C",
  neutralWhite: "#FFF",
  neutralBlack: "#000",
  greyText: "#777777",
  aquamarine: "#38D7C0",
  lightGrey: "#494949",
  confirm: "#38D7C0",
  cancel: "#FF4545",
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
  | "label"
  | "button"
  | "setterButton"
  | "balanceInput";

export const TYPOGRAPHIES: Record<TypographiesType, Typography> = {
  h1: {
    fontSize: "55px",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  h2: {
    fontSize: "35px",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
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
  button: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  setterButton: {
    fontSize: "17px",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  label: {
    fontSize: "",
    fontWeight: "",
    lineHeight: "",
    fontStyle: "",
  },
  balanceInput: {
    fontSize: "40px",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
  },
};
