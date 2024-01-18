import { useLocation } from "react-router-dom";

const paths: Record<string, string> = {
  "/": "/",
  "/tarjetas": "/tarjetas",
  "/dispositivos": "/dispositivo",
  "/perfil": "/perfil",
};

export const useGetPath = (path: string) => {
  const { pathname } = useLocation();

  return paths[pathname] === path;
};
