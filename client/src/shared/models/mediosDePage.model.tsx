import { theme } from "../theme/theme";
import { Plus } from "@phosphor-icons/react";
import { Wallet } from "@phosphor-icons/react";

export type MediosType = {
  color: string;
  title: string;
  path: string;
  icon: () => JSX.Element;
};

export const mediosData: MediosType[] = [
  {
    path: "/",
    color: "linear-gradient(98deg, #6CD3DE -10.31%, #53A9E1 118.95%);",
    title: "Recargar Saldo",
    icon: () => <Plus size={20} color={theme.neutralBlack} weight="bold" />,
  },
  {
    path: "/",
    color: theme.darkGrey,
    title: "Tarjetas vinculadas",
    icon: () => <Wallet size={20} color={theme.neutralBlack} weight="bold" />,
  },
];
