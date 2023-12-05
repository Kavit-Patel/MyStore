import * as React from "react";
export type product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: { rate: number; count: number };
};
export type ContextConsumerProps = {
  items: product[];
  setItems: React.Dispatch<React.SetStateAction<product[]>>;
  cart: product[];
  setCart: React.Dispatch<React.SetStateAction<product[]>>;
  handleAddToCart?: (product: product) => unknown;
};
export const ContextConsumer = React.createContext({} as ContextConsumerProps);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = React.useState<product[]>([]);
  const [cart, setCart] = React.useState<product[]>([]);
  const handleAddToCart = async (product: product) => {
    // const target = e.target as Element;

    if (cart.some((c) => c.id == product.id)) {
      setCart((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      setCart((prev) => [...prev, product]);
    }
    // console.log(target.classList);
  };
  return (
    <ContextConsumer.Provider
      value={{ items, setItems, cart, setCart, handleAddToCart }}
    >
      {children}
    </ContextConsumer.Provider>
  );
};
