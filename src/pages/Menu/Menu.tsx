import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/cardContext";
import { CartModel } from "../../models/CartModel";
import {
  Option,
  StyledMainTitle,
  StyledMenu,
  StyledMenuOptions,
  StyledMenuView,
  StyledSelectedView,
  OptionTitle,
  OptionValue,
} from "./Menu.styles";
import { Text } from "../../components";
import PizzaSelector from "./PizzaSelector/PizzaSelector";
import DoughSelector from "./DoughSelector/DoughSelector";
import SizeSelector from "./SizeSelector/SizeSelector";
import UserInfo from "./UserInfo/UserInfo";
import { useFlavorOfTheDay } from "../../contexts/flavorOfTheDayContext";

const Menu: React.FC<any> = (props) => {
  const { cart, setCart } = useCart();
  const { flavor } = useFlavorOfTheDay();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<any>({
    flavor: 0,
    dough: 0,
    size: 0,
  });

  const isValid = cart.dough && cart.flavor && cart.size;
  useEffect(() => {
    if (props.location.state?.flavorOfTheDay || isValid) {
      setFinalPrice(flavor.price);
      setCurrentStep(3);
      setCart({
        ...cart,
        price: Object.values(flavor.price).reduce((a: any, b: any) => a + b, 0),
      });
    } else {
      setCart({
        step: 0,
        flavor: "",
        dough: "",
        size: "",
        full_name: "",
        address: "",
        price: 0,
      });
    }
  }, []);

  const updateCartSteps = async (
    key: string,
    change: string,
    step: number,
    price: number
  ) => {
    if (key === "info" && !isValid) return null;
    const temp =
      price !== 0 ? { ...finalPrice, [key]: price } : { ...finalPrice };

    const updatedPizza: CartModel = {
      ...cart,
      [key]: change,
      price: Object.values(temp).reduce((a: any, b: any) => a + b, 0),
    };

    if (price !== 0) setFinalPrice({ ...finalPrice, [key]: price });
    setCurrentStep(step);
    setCart(updatedPizza);
  };

  const options = [
    { option: "Sabor", key: "flavor", step: 0 },
    { option: "Massa", key: "dough", step: 1 },
    { option: "Tamanho", key: "size", step: 2 },
    { option: "Dados", key: "info", step: 3 },
  ];

  const isMobile = window.screen.width < 800;

  return (
    <StyledMenu>
      <StyledMainTitle>
        <Text
          variant={"h1"}
          spacing={2}
          fontSize={isMobile ? 50 : 70}
          fontWeight={700}
        >
          Monte sua pizza
        </Text>
      </StyledMainTitle>

      <StyledMenuView>
        <StyledMenuOptions>
          {options.map((item: any) => (
            <Option
              isSelected={item.step === currentStep}
              onClick={() =>
                updateCartSteps(item.key, cart[item.key], item.step, 0)
              }
            >
              <OptionTitle>{item.option}</OptionTitle>
              <OptionValue>{cart[item.key]}</OptionValue>
            </Option>
          ))}
        </StyledMenuOptions>
        <StyledSelectedView>
          {currentStep === 0 && (
            <PizzaSelector updateCartSteps={updateCartSteps} />
          )}

          {currentStep === 1 && (
            <DoughSelector updateCartSteps={updateCartSteps} />
          )}

          {currentStep === 2 && (
            <SizeSelector updateCartSteps={updateCartSteps} />
          )}

          {currentStep === 3 && <UserInfo updateCartSteps={updateCartSteps} />}
        </StyledSelectedView>
      </StyledMenuView>
    </StyledMenu>
  );
};

export default Menu;
