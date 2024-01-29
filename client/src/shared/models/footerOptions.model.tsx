import { HouseSimple } from "@phosphor-icons/react";
import { Devices } from "@phosphor-icons/react";
import { User } from "@phosphor-icons/react";
import { Cards } from "@phosphor-icons/react";
import { useGetPath } from "../hooks/usePath";

type Option = {
  path: string;
  title?: string;
  Img: () => JSX.Element;
};

const Icon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Frame 12">
      <rect width="55" height="55" rx="27.5" fill="#38D7C0" />
      <g id="Group 10">
        <path
          id="Vector"
          d="M26.944 21.2722L27.2931 22.6768C27.7659 24.5656 29.1979 26.049 31.0367 26.55L32.4797 26.9441L31.3143 27.1946C29.2886 27.6309 27.6944 29.2353 27.2354 31.3014L26.944 32.6131L26.4053 30.7863C25.8858 29.027 24.4896 27.6844 22.7415 27.2622L21.4056 26.9413L22.9064 26.5247C24.7507 26.0152 26.1772 24.5149 26.6252 22.6121L26.9413 21.2722L26.944 21.2722Z"
          fill="black"
        />
        <path
          id="Vector_2"
          d="M33.9446 13H20.0554C16.1594 13 13 16.1594 13 20.0554V33.9446C13 37.8419 16.1594 41 20.0554 41H33.9446C37.8419 41 41 37.8419 41 33.9446V20.0554C41 16.1594 37.8419 13 33.9446 13ZM33.3149 33.0841C27.511 39.0961 20.0113 41.2695 16.5637 37.942C13.1174 34.6131 15.028 27.0414 20.8319 21.0307C26.6371 15.02 34.1368 12.8452 37.5831 16.1741C41.0307 19.5017 39.1187 27.0734 33.3149 33.0841Z"
          fill="black"
        />
      </g>
    </g>
  </svg>
);

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
    Img: () => <Icon />,
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
