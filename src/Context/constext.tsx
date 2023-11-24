import * as React from "react";
export type products = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
export const ContextConsumer = React.createContext({});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = React.useState<products[]>([]);
  const [cart, setCart] = React.useState<products[]>([]);

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    product: products
  ) => {
    const target = e.target as Element;

    if (cart.includes(product)) {
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
