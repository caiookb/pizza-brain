import { CartModel } from "../models/CartModel";
import { FlavorOfTheDayModel, MenuModel } from "../models/MenuModels";
import fetchServer from "./Server";

const getRandomItem = (array: []) =>
  array[Math.floor(Math.random() * array.length)];

export const fetchMenu = () => {
  // return fetchServer({
  //   method: "GET",
  //   path: ["menu"],
  // })
  return new Promise<MenuModel>((resolve) => {
    const flavors = setTimeout(() => {
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

export const fetchFlavorOfTheDay = (menu: any) => {
  console.log("Menu on FODD", menu);
  return new Promise<FlavorOfTheDayModel>((resolve) => {
    resolve({
      flavor: getRandomItem(menu.flavor),
      size: getRandomItem(menu.size),
      dough: getRandomItem(menu.dough),
    });
  }).catch((err) => {
    throw err;
  });
};
