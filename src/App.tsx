import React, { FC, lazy } from "react";
import { CartContext } from "./contexts/cardContext";
import { MenuContext } from "./contexts/menuContext";
import { FlavorContext } from "./contexts/flavorOfTheDayContext";

import { Redirect, Route, Router, Switch } from "react-router-dom";
import { LoaderSpinner } from "./components";
import { createBrowserHistory } from "history";

const Main = lazy(async () => import(`./pages/Main/Main`));
const Menu = lazy(async () => import(`./pages/Menu/Menu`));
const NotFound = lazy(async () => import(`./pages/NotFound/NotFound`));
const history = createBrowserHistory();

const App: FC = () => {
  const [cart, setCart] = React.useState({});
  const [menu, setMenu] = React.useState({});
  const [flavor, setFlavor] = React.useState({});

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

  const flavorValue = React.useMemo(
    () => ({
      flavor,
      setFlavor,
    }),
    [flavor]
  );

  return (
    <CartContext.Provider value={{ ...cartValue, setCart }}>
      <MenuContext.Provider value={{ ...menuValue, setMenu }}>
        <FlavorContext.Provider value={{ ...flavorValue, setFlavor }}>
          <Router history={history}>
            <React.Suspense fallback={<LoaderSpinner />}>
              <Switch>
                <Route component={Main} path={"/"} exact />
                <Route component={Menu} path={"/menu"} />
                <Route component={NotFound} path={"/pizza-not-found"} />
                <Redirect to={"/pizza-not-found"} from={"*"} />
              </Switch>
            </React.Suspense>
          </Router>
        </FlavorContext.Provider>
      </MenuContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
