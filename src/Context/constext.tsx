import * as React from "react";
export type products = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
export type ContextConsumerProps = {
  items: products[];
  setItems: React.Dispatch<React.SetStateAction<products[]>>;
  cart: products[];
  setCart: React.Dispatch<React.SetStateAction<products[]>>;
};
export const ContextConsumer = React.createContext({} as ContextConsumerProps);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = React.useState<products[]>([]);
  const [cart, setCart] = React.useState<products[]>([]);

  return (
    <ContextConsumer.Provider value={{ items, setItems, cart, setCart }}>
      {children}
    </ContextConsumer.Provider>
  );
};
