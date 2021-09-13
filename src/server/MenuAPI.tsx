import Module from "module";
import { Images } from "../assets/images";
import { CartModel } from "../models/CartModel";
import {
  FlavorOfTheDayModel,
  ImageModel,
  MenuModel,
  PizzaModel,
} from "../models/MenuModels";
import fetchServer from "./Server";

export const getRandomItem = (array: MenuModel | any) =>
  array[Math.floor(Math.random() * array.length)];

export const fetchMenu = () => {
  // return fetchServer({
  //   method: "GET",
  //   path: ["menu"],
  // })
  return new Promise<any>((resolve) => {
    resolve({
      pizzas: [
        {
          flavor: "Marguerita",
          image: Images[0],
          price: 20,
        },
        {
          flavor: "Portuguesa",
          image: Images[1],
          price: 25,
        },
        {
          flavor: "Cogumelos",
          image: Images[2],
          price: 29,
        },
        {
          flavor: "Festiva",
          image: Images[3],
          price: 30,
        },
        {
          flavor: "Rústica",
          image: Images[4],
          price: 35,
        },
      ],
      size: [
        { size: "P", value: 3 },
        { size: "M", value: 6 },
        { size: "G", value: 10 },
      ],
      dough: [
        {
          dough: "Massa grossa",
          fontWeight: 700,
          borderSize: 5,
          value: "Grossa",
          price: 10,
        },
        {
          dough: "Massa média",
          fontWeight: 500,
          borderSize: 3,
          value: "Média",
          price: 6,
        },
        {
          dough: "Massa fina",
          fontWeight: 300,
          borderSize: 1,
          value: "Fina",
          price: 3,
        },
      ],
      isLoading: false,
    });
  }).catch((err) => {
    throw err;
  });
};

export const fetchFlavorOfTheDay = (menu: MenuModel) => {
  const randomFlavor = getRandomItem(menu.pizzas);
  const randomSize = getRandomItem(menu.size);
  const randomDough = getRandomItem(menu.dough);

  console.log(menu, randomFlavor.flavor, randomSize.size, randomDough.dough);
  return new Promise<FlavorOfTheDayModel>((resolve) => {
    resolve({
      item: {
        flavor: randomFlavor.flavor,
        size: randomSize.size,
        dough: randomDough.value,
      },
      price: {
        flavor: randomFlavor.price,
        size: randomSize.value,
        dough: randomDough.price,
      },
    });
  }).catch((err) => {
    throw err;
  });
};

export const fetchRandomImage = (images: any) => {
  return new Promise<ImageModel>((resolve) => {
    resolve({
      image: getRandomItem(images),
    });
  }).catch((err) => {
    throw err;
  });
};

export const fetchPizzas = () => {
  return new Promise<any>((resolve) => {
    resolve([
      {
        flavor: "Marguerita",
        image: Images[1],
        price: 25,
      },
      {
        flavor: "Portuguesa",
        image: Images[3],
        price: 20,
      },
      {
        flavor: "Cogumelos",
        image: Images[0],
        price: 20,
      },
      {
        flavor: "Festiva",
        image: Images[2],
        price: 20,
      },
      {
        flavor: "Rústica",
        image: Images[4],
        price: 20,
      },
    ]);
  }).catch((err) => {
    throw err;
  });
};

export const finishPayment = (body: CartModel) => {
  //send body to server
  console.log("Body to backend", body);
  return new Promise<any>((resolve) => {
    resolve({
      success: true,
      message: "Pedido realizado com sucesso :)",
      order: body,
    });
  }).catch((err) => {
    return { error: "Aconteceu algum erro :(, tente novamente." };
  });
};
