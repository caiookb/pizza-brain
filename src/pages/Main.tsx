import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/cardContext";
import { useMenu } from "../contexts/menuContext";
import { CartModel } from "../models/CartModel";
import { FlavorOfTheDayModel, MenuModel } from "../models/MenuModels";
import { fetchMenu, fetchFlavorOfTheDay } from "../server/MenuAPI";
import { Option } from "./Main.styles";

function Main() {
  const { cart, setCart } = useCart();
  const { menu, setMenu } = useMenu();

  const [flavorOfTheDay, setFlavorOfTheDay] =
    useState<FlavorOfTheDayModel | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(0);

  const updateCartSteps = (key: string, change: string, step: number) => {
    const updatedPizza: CartModel = {
      ...cart,
      [key]: change,
    };

    setCurrentStep(step);
    setCart(updatedPizza);
  };

  useEffect(() => {
    fetchMenu().then(async (menu: MenuModel) => {
      setMenu(menu);
      setFlavorOfTheDay(await fetchFlavorOfTheDay(menu));
    });
  }, []);

  const options = [
    { option: "Sabor", key: "flavor", step: 0 },
    { option: "Massa", key: "dough", step: 1 },
    { option: "Tamanho", key: "size", step: 2 },
    { option: "Dados", key: "info", step: 3 },
  ];

  return (
    <div>
      <div className="App">
        <div>{JSON.stringify(cart)}</div>
        <div>{JSON.stringify(menu)}</div>
        <div>{JSON.stringify(flavorOfTheDay)}</div>
        {options.map((item: any) => (
          <Option
            isSelected={item.step == currentStep}
            onClick={() => updateCartSteps(item.key, item.step, item.step)}
          >
            {item.option}
          </Option>
        ))}
      </div>
    </div>
  );
}

export default Main;
