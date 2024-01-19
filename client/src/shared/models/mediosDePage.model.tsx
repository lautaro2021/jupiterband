import { PALETTE } from "../theme/theme";
import { Plus } from "@phosphor-icons/react";
import { Cards } from "@phosphor-icons/react";

export type MediosType = {
  color: string;
  title: string;
  path: string;
  icon: () => JSX.Element;
};

export const mediosData: MediosType[] = [
  {
    path: "/recargar-saldo",
    color: "linear-gradient(98deg, #6CD3DE -10.31%, #53A9E1 118.95%);",
    title: "Recargar Saldo",
    icon: () => <Plus size={20} color={PALETTE.neutralBlack} weight="bold" />,
  },
  {
    path: "/tarjetas",
    color: PALETTE.darkGrey,
    title: "Tarjetas vinculadas",
    icon: () => <Cards size={20} color={PALETTE.neutralBlack} weight="bold" />,
  },
];
