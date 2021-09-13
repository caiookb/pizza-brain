import { createContext, useContext } from "react";
import { FlavorOfTheDayModel } from "../models/MenuModels";

export const FlavorContext = createContext<any>({
  flavor: {
    flavor: "",
    dough: "",
    size: "",
    price: 0,
  },
  setFlavor: (flavor: FlavorOfTheDayModel) => flavor,
});

export const useFlavorOfTheDay = () => useContext(FlavorContext);
