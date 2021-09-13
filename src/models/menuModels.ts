export type MenuModel = {
  flavor?: Array<string>;
  dough?: Array<string>;
  size?: Array<string>;
  isLoading?: boolean;
};

export type FlavorOfTheDayModel = {
  flavor?: string;
  dough?: string;
  size?: string;
};

export type MenuContextType = {
  menu: MenuModel;
  setMenu: (menu: MenuModel) => void;
};