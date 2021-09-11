import { MenuModel } from "../models/menuModels";
import fetchServer from "./Server";

export const fetchMenu = () => {
  // return fetchServer({
  //   method: "GET",
  //   path: ["menu"],
  // })
  return new Promise<MenuModel>((resolve) => {
    setTimeout(() => {
      resolve({
        flavor: ["Marguerita", "Portuguesa", "Cogumelos", "Festiva", "Rústica"],
        size: ["P", "M", "G"],
        dough: ["fina", "média", "grossa"],
        isLoading: false,
      });
    }, 2000);
  }).catch((err) => {
    throw err;
  });
};
