import { useContext, useEffect } from "react";
import { ContextConsumer, products } from "../Context/constext";
// const cart: number[] = [];
const Home = () => {
  const { items, setItems, cart, setCart, handleAddToCart } =
    useContext(ContextConsumer);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
    // console.log("first");
  }, []);

  // console.log(cart);
  return (
    <div className="w-full flex flex-wrap justify-center p-4 gap-3 bg-orange-100">
      {items?.map((item) => (
        <div
          key={item.id}
          className="w-44 h-56 bg-orange-50 flex justify-center"
        >
          <div className="w-32 h-32 flex flex-col gap-3">
            <div className=" py-2">
              <img
                className=" object-fill w-32 h-32 "
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className=" text-xs">{item.title.split(" ")[2]}</div>
                <div className=" text-xs">${item.price}</div>
              </div>
              <input
                type="button"
                value={cart.includes(item) ? "Remove" : "Add to Cart"}
                onClick={(e) => handleAddToCart(e, item)}
                className={`flex  text-sm font-semibold  rounded-sm py-1 px-2 justify-center transition-all cursor-pointer  ${
                  cart.includes(item)
                    ? "bg-orange-300 hover:bg-orange-400 text-black"
                    : "text-white bg-sky-600 hover:bg-sky-800 active:scale-95"
                } `}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
