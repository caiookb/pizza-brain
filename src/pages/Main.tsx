import React, { useEffect } from "react";
import { useCart } from "../contexts/cardContext";
import { useMenu } from "../contexts/menuContext";
import { CartModel } from "../models/CartModel";
import { MenuModel } from "../models/menuModels";
import { fetchMenu } from "../server/MenuAPI";

function Main() {
  const { cart, setCart } = useCart();
  const { menu, setMenu } = useMenu();

  const handleStepsByKey = (key: string) =>
    ({
      flavor: 1,
      dough: 2,
      size: 3,
      full_name: 4,
    }[key]);

  const updateCartSteps = (key: string, change: string) => {
    const updatedPizza: CartModel = {
      ...cart,
      [key]: change,
      step: handleStepsByKey(key),
    };

    setCart(updatedPizza);
  };

  useEffect(() => {
    fetchMenu().then((menu: MenuModel) => {
      console.log("opa", menu);
      setMenu(menu);
    });
  }, []);

  console.log(menu);
  return (
    <div>
      <div className="App">
        <div>{JSON.stringify(cart)}</div>
        <div>{JSON.stringify(menu)}</div>
      </div>
    </div>
  );
}

export default Main;
