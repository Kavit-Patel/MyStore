import { useContext, useEffect, useState } from "react";
import { ContextConsumer } from "../Context/constext";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
// const cart: number[] = [];
const Home = () => {
  const { items, setItems, cart, handleAddToCart } =
    useContext(ContextConsumer);
  const [loader, setLoader] = useState(true);
  // const handleAddToCart = async (product: product) => {
  //   // const target = e.target as Element;

  //   if (cart.includes(product)) {
  //     setCart((prev) => prev.filter((p) => p.id !== product.id));
  //   } else {
  //     setCart((prev) => [...prev, product]);
  //   }
  //   // console.log(target.classList);
  // };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setLoader(false);
      });

    // console.log("first");
  }, [setItems]);

  // console.log(cart);
  return (
    <div className="w-full flex flex-wrap justify-center p-4 gap-3 bg-orange-100">
      {loader ? (
        <Loader />
      ) : (
        items?.map((item) => (
          <div
            key={item.id}
            className="w-44 h-56 bg-orange-50 flex justify-center"
          >
            <div className="w-32 h-32 flex flex-col gap-3">
              <Link to={`/product/${item.id}`} className="">
                <div className=" py-2">
                  <img
                    className=" object-fill w-32 h-32 "
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <div className=" text-xs">{item.title.split(" ")[2]}</div>
                  <div className=" text-xs">${item.price}</div>
                </div>
              </Link>
              <div className="flex flex-col gap-3">
                <input
                  type="button"
                  value={
                    cart.some((c) => c.id == item.id) ? "Remove" : "Add to Cart"
                  }
                  onClick={() => handleAddToCart?.(item)}
                  className={`flex  text-sm font-semibold  rounded-sm py-1 px-2 justify-center transition-all cursor-pointer  ${
                    cart.some((c) => c.id == item.id)
                      ? "bg-orange-300 hover:bg-orange-400 text-black"
                      : "text-white bg-sky-600 hover:bg-sky-800 active:scale-95"
                  } `}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
