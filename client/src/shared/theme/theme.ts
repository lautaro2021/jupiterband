type Theme =
  | "primary"
  | "secondary"
  | "neutral"
  | "darkGrey"
  | "neutralWhite"
  | "neutralBlack";

export const theme: Record<Theme, string> = {
  primary: "#6CD3DE",
  secondary: "#68AFDD",
  neutral: "#191919",
  darkGrey: "#2F2C2C",
  neutralWhite: "#FFF",
  neutralBlack: "#000",
};
