import React, { useEffect, useState } from "react";
import { MenuModel } from "../../models/MenuModels";
import {
  fetchMenu,
  fetchFlavorOfTheDay,
  fetchRandomImage,
} from "../../server/MenuAPI";
import {
  StyledMain,
  StyledMainMenu,
  StyledMainMenuDetails,
  StyledMainMenuOptions,
  StyledMainTitle,
  StyledPizzaImage,
} from "./Main.styles";
import { Text } from "../../components";
import { Images } from "../../assets/images";
import { useFlavorOfTheDay } from "../../contexts/flavorOfTheDayContext";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cardContext";
import { CartModel } from "../../models/CartModel";

const Main: React.FC = (props) => {
  const { cart, setCart } = useCart();
  const { flavor, setFlavor } = useFlavorOfTheDay();
  const [mainImage, setMainImage] = useState<any>(undefined);
  useEffect(() => {
    fetchMenu().then(async (menu: MenuModel) => {
      setFlavor(await fetchFlavorOfTheDay(menu));
    });

    fetchRandomImage(Images).then((response) => {
      setMainImage(response.image);
    });
  }, []);

  const handleFlavorOfTheDay = (item: CartModel) => {
    const updatedPizza: CartModel = {
      ...cart,
      flavor: item.flavor,
      size: item.size,
      dough: item.dough,
    };

    setCart(updatedPizza);
  };

  const handleSize = (item: string) =>
    ({
      P: "pequeno",
      M: "médio",
      G: "grande",
    }[item]);

  const handleDescription = (item: string) =>
    ({
      flavor: "",
      dough: "massa",
      size: "tamanho",
    }[item]);

  const isMobile = window.screen.width < 800;
  console.log("item and price", flavor);

  return (
    <StyledMain>
      <StyledMainTitle>
        <Text
          variant={"h1"}
          spacing={2}
          fontSize={isMobile ? 50 : 70}
          fontWeight={700}
        >
          Peça sua Pizza
        </Text>
      </StyledMainTitle>
      <StyledMainMenu>
        <Link
          to={{ pathname: "/menu", state: { flavorOfTheDay: false } }}
          style={{ textDecorationLine: "none" }}
        >
          <StyledMainMenuOptions>
            <Text spacing={1} fontSize={40} fontWeight={300}>
              montar pedido
            </Text>
          </StyledMainMenuOptions>
        </Link>

        <Link
          to={{ pathname: "/menu", state: { flavorOfTheDay: true } }}
          style={{ textDecorationLine: "none" }}
          onClick={() => handleFlavorOfTheDay(flavor.item)}
        >
          <StyledMainMenuOptions>
            <Text spacing={1} fontSize={40} fontWeight={300}>
              pedir pizza do dia
            </Text>
          </StyledMainMenuOptions>

          <StyledMainMenuDetails>
            {flavor.item &&
              Object.entries(flavor.item).map((item: any) => (
                <Text fontWeight={700} fontSize={26}>
                  {`${handleDescription(item[0])} ${
                    (item[0] === "size" && handleSize(item[1])) ||
                    item[1].toLowerCase()
                  }`}
                </Text>
              ))}
          </StyledMainMenuDetails>
        </Link>

        <StyledPizzaImage src={mainImage}></StyledPizzaImage>
      </StyledMainMenu>
    </StyledMain>
  );
};

export default Main;
