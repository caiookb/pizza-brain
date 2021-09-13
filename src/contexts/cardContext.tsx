import { createContext, useContext } from "react";
import { CartContextType, CartModel } from "../models/CartModel";

export const CartContext = createContext<CartContextType>({
  cart: {
    step: 0,
    flavor: "",
    dough: "",
    size: "",
    full_name: "",
    address: "",
    price: 0,
  },
  setCart: (cart: CartModel) => cart,
});

export const useCart = () => useContext(CartContext);
