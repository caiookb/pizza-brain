import { createContext, useContext } from "react";
import { MenuContextType, MenuModel } from "../models/MenuModels";

export const MenuContext = createContext<MenuContextType>({
  menu: {
    pizzas: [
      {
        flavor: "",
        price: 0,
        image: undefined,
      },
    ],
  },
  setMenu: (menu: MenuModel) => menu,
});

export const useMenu = () => useContext(MenuContext);
