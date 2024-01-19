import { useLocation } from "react-router-dom";

const paths: Record<string, string> = {
  "/": "/",
  tarjetas: "tarjetas",
  dispositivos: "dispositivos",
  perfil: "perfil",
};

export const useGetPath = (path: string) => {
  const { pathname } = useLocation();

  const parsedPath = path === "/" ? path : path.split("/")[1];
  const parsedActualPath = pathname === "/" ? pathname : pathname.split("/")[1];

  return paths[parsedActualPath] === parsedPath;
};
