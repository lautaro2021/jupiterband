import { HouseSimple } from "@phosphor-icons/react";
import { Devices } from "@phosphor-icons/react";
import { User } from "@phosphor-icons/react";
import { Cards } from "@phosphor-icons/react";
import { useGetPath } from "../hooks/usePath";

type Option = {
  path: string;
  title?: string;
  Img?: () => JSX.Element;
};

export const footerOptions: Option[] = [
  {
    path: "/",
    title: "Inicio",
    Img: () => (
      <HouseSimple weight={useGetPath("/") ? "bold" : "light"} size={26} />
    ),
  },
  {
    path: "/tarjetas",
    title: "Tarjetas",
    Img: () => (
      <Cards weight={useGetPath("/tarjetas") ? "bold" : "light"} size={26} />
    ),
  },
  {
    path: "/",
  },
  {
    path: "/dispositivos",
    title: "Dispositivos",
    Img: () => (
      <Devices
        weight={useGetPath("/dispositivos") ? "bold" : "light"}
        size={26}
      />
    ),
  },
  {
    path: "/perfil",
    title: "Perfil",
    Img: () => (
      <User weight={useGetPath("/perfil") ? "bold" : "light"} size={26} />
    ),
  },
];
