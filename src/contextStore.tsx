import { createContext } from "react";

export type CartModel = {
  step: number;
  flavor: string;
  dough: string;
  size: string;
  full_name: string;
  address: string;
};

export const MenuContext = createContext([
  {
    flavors: ["Marguerita", "Portuguesa", "Cogumelos", "Festiva", "Rústica"],
    dough: ["fina", "média", "grossa"],
    size: ["P", "M", "G"],
  },
]);

export const CartContext = createContext({
  step: 0,
  flavor: "",
  dough: "",
  size: "",
  full_name: "",
  address: "",
});
