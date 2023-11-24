import { useContext, useState } from "react";
import Cart from "./Cart";
import { ContextConsumer } from "../Context/constext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(ContextConsumer);
  // console.log(cart);
  return (
    <header className=" w-full h-16 bg-orange-200 shadow-xl z-10 flex justify-center">
      <div className="text-orange-950 font-semibold w-full flex justify-between px-8 items-center text-3xl">
        <div className="cursor-pointer">MyStore</div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="relative cursor-pointer"
        >
          Cart
          <span className="absolute bottom-3 text-2xl text-emerald-700">
            {cart?.length || 0}
          </span>
        </div>
      </div>
      <div className="transition-all delay-500">{open ? <Cart /> : null}</div>
    </header>
  );
};

export default Navbar;
