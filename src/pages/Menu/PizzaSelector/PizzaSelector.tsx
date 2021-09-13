import React, { useEffect, useState } from "react";
import { Text } from "../../../components";
import { fetchPizzas } from "../../../server/MenuAPI";
import {
  StyledPizzaImage,
  StyledPizzaOption,
  StyledPizzasView,
  StyledPizzaTitle,
} from "./PizzaSelector.styles";

type PizzaSelectorProps = {
  updateCartSteps: (
    key: string,
    flavor: string,
    step: number,
    price: number
  ) => void;
};

const PizzaSelector: React.FC<PizzaSelectorProps> = (
  props: PizzaSelectorProps
) => {
  const [pizzas, setPizzas] = useState<[]>([]);

  useEffect(() => {
    fetchPizzas().then((pizzas: any) => setPizzas(pizzas));
  }, []);

  const isMobile = window.screen.width < 800;

  return (
    <StyledPizzasView>
      {pizzas.map((pizza: any) => (
        <StyledPizzaOption
          onClick={() =>
            props.updateCartSteps("flavor", pizza.flavor, 1, pizza.price)
          }
        >
          <StyledPizzaTitle>
            <Text fontWeight={700} fontSize={isMobile ? 14 : 24}>
              {pizza.flavor.toLowerCase()}
            </Text>
          </StyledPizzaTitle>
          <StyledPizzaImage src={pizza.image}></StyledPizzaImage>
        </StyledPizzaOption>
      ))}
    </StyledPizzasView>
  );
};

export default PizzaSelector;
