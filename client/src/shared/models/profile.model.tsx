import { CaretRight } from "@phosphor-icons/react";
import { SignOut } from "@phosphor-icons/react";
import LogoutButton from "../components/LogoutButton";

export type ProfileOptionType = {
    text: string;
    path?: string;
    Icon?: () => JSX.Element;
    Element?: () => JSX.Element;
    value?: string;
    exit?: boolean;
};

export const profileData: ProfileOptionType[] = [
    {
        text: "Datos personales",
        path: "/perfil/datos-personales",
        Icon: () => <CaretRight size={18} weight="bold" />,
    },
    {
        text: "Seguridad",
        path: "",
        Icon: () => <CaretRight size={18} weight="bold" />,
    },
    {
        text: "Dispositivos vinculados",
        path: "",
        Icon: () => <CaretRight size={18} weight="bold" />,
    },
    {
        text: "Novedades",
        path: "",
        Icon: () => <CaretRight size={18} weight="bold" />,
    },
    {
        text: "Necesito ayuda",
        path: "",
        Icon: () => <CaretRight size={18} weight="bold" />,
    },
    {
        text: "Configuración",
        path: "",
        Icon: () => <CaretRight size={18} weight="bold" />,
    },
    {
        text: "Politicas de privacidad",
        path: "",
        Icon: () => <CaretRight size={18} weight="bold" />,
    },
    {
        text: "Términos y condiciones",
        path: "",
        Icon: () => <CaretRight size={18} weight="bold" />,
    },
    {
        exit: true,
        text: "Cerrar sesión",
        Icon: () => <SignOut size={18} weight="bold" />,
        Element: () => <LogoutButton />,
    },
];
