export type CartModel = {
    step?: number;
    flavor?: string;
    dough?: string;
    size?: string;
    full_name?: string;
    address?: string;
  };
  
  export type CartContextType = {
    cart: CartModel;
    setCart: (cart: CartModel) => void;
  };
  