import { createContext, useContext } from "react";
import { MenuContextType, MenuModel } from "../models/MenuModels";

export const MenuContext = createContext<MenuContextType>({
  menu: {
    flavor: [],
    dough: [],
    size: [],
    isLoading: false,
  },
  setMenu: (menu: MenuModel) => menu,
});

export const useMenu = () => useContext(MenuContext);
