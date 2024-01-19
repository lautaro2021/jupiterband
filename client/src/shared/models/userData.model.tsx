import { PencilSimple } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react";

export type UserDataType = {
  option: string;
  Icon?: () => JSX.Element;
  value?: string;
  delete?: boolean;
};

export const userDataOptions: UserDataType[] = [
  {
    option: "Usuario",
    value: "JoseStr",
    Icon: () => <PencilSimple size={18} weight="bold" />,
  },
  {
    option: "Email",
    value: "example@email.com",
    Icon: () => <PencilSimple size={18} weight="bold" />,
  },
  {
    option: "Nombre completo",
    value: "Jose Ignacio stratta",
  },
  {
    option: "Numero de documento",
    value: "42121321",
  },
  {
    option: "Eliminar cuenta",
    Icon: () => <Trash size={18} weight="bold" />,
    delete: true,
  },
];
