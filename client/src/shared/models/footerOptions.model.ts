type Option = {
  path: string;
  title?: string;
  img: string;
};

export const footerOptions: Option[] = [
  {
    path: "/",
    title: "Inicio",
    img: "src/shared/assets/icons/home.png",
  },
  {
    path: "/tarjetas",
    title: "Tarjetas",
    img: "src/shared/assets/icons/cards.png",
  },
  {
    path: "/",
    img: "",
  },
  {
    path: "/dispositivos",
    title: "Dispositivos",
    img: "src/shared/assets/icons/devices.png",
  },
  {
    path: "/perfil",
    title: "Perfil",
    img: "src/shared/assets/icons/profile.png",
  },
];
