export type MenuModel = {
  pizzas?: [{
    flavor: string,
    price: number,
    image?: any
  }];
  dough?: Array<string>;
  size?: Array<string>;
  isLoading?: boolean;
};

export type FlavorOfTheDayModel = {
  item: {
    flavor?: [];
    dough?: string;
    size?: string;
  }
  price: {},
  isLoading?: any;
};

export type PizzaModel = {
  image?: any;
  flavor: string;
};

export type ImageModel = {
  image?: any;
};

export type MenuContextType = {
  menu: MenuModel;
  setMenu: (menu: MenuModel) => void;
};

export type FlavorOfTheDayContextType = {
  flavor?: FlavorOfTheDayModel;
  setFlavor?: (flavor: FlavorOfTheDayModel) => void;
};
