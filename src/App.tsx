import React, { useMemo, useState, FC, useContext, useEffect } from "react";
import "./App.css";
import { CartContext } from "./contexts/cardContext";
import { MenuContext } from "./contexts/menuContext";
import { CartModel } from "./models/CartModel";
import Main from "./pages/Main";

const App: FC = (props) => {
  const [cart, setCart] = React.useState({});
  const [menu, setMenu] = React.useState({});

  const cartValue = React.useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart]
  );

  const menuValue = React.useMemo(
    () => ({
      menu,
      setMenu,
    }),
    [menu]
  );
  return (
    <CartContext.Provider value={{ ...cartValue, setCart }}>
      <MenuContext.Provider value={{ ...menuValue, setMenu }}>
        <Main />
      </MenuContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
