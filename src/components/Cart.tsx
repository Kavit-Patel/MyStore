import { ContextConsumer } from "../Context/constext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { product } from "../Context/constext";

const Cart = () => {
  const { cart, setCart } = useContext(ContextConsumer);
  const uniqueCart = Array.from(new Set(cart));
  const location = useLocation();
  console.log(location.pathname);
  let total: number = 0;
  cart.map((c: product) => {
    total = total + Number(c.price);
  });

  const quantity = (id: number) => {
    const totalItems: product[] = cart.filter((c: product) => c.id == id);
    // console.log(totalItems);
    return totalItems.length;
  };
  const increase = (product: product) => {
    setCart((prev: product[]) => [...prev, product]);
  };
  const decrease = (product: product) => {
    const itemIndex = cart.findIndex((c: product) => c == product);
    // console.log(itemIndex);
    setCart((prev: product[]) =>
      prev.filter((p: product, i: number) => {
        if (i == itemIndex) {
          return;
        } else {
          return p;
        }
      })
    );
  };
  const handleRemove = (id: number) => {
    setCart((prev) => {
      return prev.filter((p: product) => p.id !== id);
    });
  };
  return (
    <div
      className={`absolute top-16 right-0  h-[calc(100vh-4rem)] bg-orange-100 ${
        location.pathname == "/" ? "w-1/3" : "w-full px-80"
      } `}
    >
      <div className="w-full max-h-[70%] overflow-y-auto">
        {uniqueCart?.map((item) => (
          <div key={item.id} className="px-4 py-0.5 ">
            <div className=" h-28 flex justify-between items-center border-b border-orange-600 py-3">
              <div className="w-full flex flex-col gap-3 ">
                <div className=" w-full flex  items-center gap-2">
                  <img
                    className="w-12 h-12 object-fit"
                    src={item.image}
                    alt=""
                  />
                  <div className=" flex flex-col justify-evenly">
                    <span>
                      {
                        item?.title.split(" ")[
                          item?.title.split(" ").length - 2
                        ]
                      }
                    </span>
                    <span>${item.price}</span>
                  </div>
                </div>
                <div
                  onClick={() => handleRemove(item.id)}
                  className="cursor-pointer bg-orange-300 hover:bg-orange-400 active:scale-95 rounded-md w-20 text-center"
                >
                  Remove
                </div>
              </div>
              <div className="h-24 flex flex-col gap-0">
                <div
                  onClick={() => increase(item)}
                  className="text-2xl cursor-pointer  flex justify-center items-center "
                >
                  +
                </div>
                <div className=" flex justify-center items-center  ">
                  {quantity(item.id)}
                </div>
                <div
                  onClick={() => decrease(item)}
                  className="text-2xl cursor-pointer flex justify-center items-center h-4  "
                >
                  -
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="flex w-full justify-around items-center mt-3">
          <div className=" text-gray-200 font-semibold rounded-md py-1 bg-amber-700 w-[40%] flex justify-center ">
            Total: {total.toFixed(2)}{" "}
          </div>
          <div className="cursor-pointer text-white font-semibold rounded-md py-1 bg-sky-600 hover:bg-sky-800 active:scale-95 w-[40%] flex justify-center">
            CheckOut
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
