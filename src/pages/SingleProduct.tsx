import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextConsumer, product } from "../Context/constext";
import Loader from "../components/Loader";
import Stars from "../utils/Stars";

const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState<product>();
  const { cart, handleAddToCart } = useContext(ContextConsumer);
  // console.log(cart);
  const handleLoading = () => {
    <Loader />;
  };
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [params.id]);
  return (
    <div className="w-full flex mt-10">
      <div className="w-[40%] p-10">
        <img src={product?.image} alt="" />
      </div>
      <div className="w-[35%] border-r flex flex-col gap-2">
        <div className=" text-3xl">{product?.title}</div>
        <div className="flex items-center gap-2 ">
          <span>{product?.rating?.rate}</span>
          <Stars rating={product?.rating?.rate} />
          {/* <span className="text-orange-600 text-xl">
            {product?.rating?.rate ? (
              Math.floor(product.rating.rate) == 1 ? (
                <span>&#9733;&#x2606;&#x2606;&#x2606;&#x2606;</span>
              ) : Math.floor(product.rating.rate) == 2 ? (
                <span>&#9733;&#9733;&#x2606;&#x2606;&#x2606;</span>
              ) : Math.floor(product.rating.rate) == 3 ? (
                <span>&#9733;&#9733;&#9733;&#x2606;&#x2606;</span>
              ) : Math.floor(product.rating.rate) == 4 ? (
                <span>&#9733;&#9733;&#9733;&#9733;&#x2606;</span>
              ) : Math.floor(product.rating.rate) == 5 ? (
                <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              ) : (
                <span>&#x2606;&#x2606;&#x2606;&#x2606;&#x2606;</span>
              )
            ) : (
              ""
            )}
          </span> */}
          <span>{product?.rating?.count}</span>
        </div>
        <div className="border-b-2 w-full h-0.5 "></div>
        <div className=" bg-red-700 w-fit px-3 py-1.5 rounded-md text-white text-center font-semibold">
          Deal of the Day
        </div>
        <div className=" flex items-center gap-5 text-3xl ">
          <span className=" text-red-500 flex gap-0.5">
            <span>-</span>
            <span>{Math.floor(Math.random() * 100)}</span>
            <span>%</span>
          </span>
          <span>${product?.price}</span>
        </div>
        <div className="text-slate-500">
          M.R.P $
          {product?.price &&
            (Number(product.price) * Math.floor(Math.random() * 10)).toFixed(2)}
        </div>
        <div className="text-lg">Inclusive of all taxes</div>
      </div>
      <div className="w-[25%] px-5 flex flex-col gap-3">
        <div className="text-3xl">${product?.price}</div>
        <div className="text-sky-700  text-lg font-semibold">
          <div className="flex gap-2">
            <span>Free Delivery</span>
            <span>{new Date().toLocaleDateString().toString()}</span>
          </div>
          <span className="text-gray-800">Order within </span>
          <span>{Math.floor(Math.random() * 5)} hrs</span>
        </div>
        <div className="text-xl text-emerald-600 font-semibold">In Stock</div>
        <div className="text-xl">
          Quantity :{" "}
          <span>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </span>
        </div>
        <div
          onClick={
            product ? () => handleAddToCart?.(product) : () => handleLoading()
          }
          className="bg-yellow-400 w-44 text-center px-3 py-1 rounded-md text-xl font-semibold transition-all active:scale-95 "
        >
          {/* {product ? (cart.includes(product) ? "Remove" : "Add to Cart") : ""} */}
          {product
            ? cart.some((c) => c.id == product.id)
              ? "Remove"
              : "Add To Cart"
            : ""}
        </div>
        <Link
          to="/cart"
          className="bg-yellow-400 w-44 text-center px-3 py-1 rounded-md text-xl font-semibold transition-all active:scale-95 "
        >
          Go To Cart
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
