// import { product } from "../Context/constext";
// type prop = {
//   rating: number | undefined;
// };
const Stars = ({ rating }: { rating: number | undefined }) => {
  // console.log(rating);
  return (
    <span className="text-orange-600 text-xl">
      {/* {console.log(Math.floor(product?.rating?.rate))} */}
      {rating ? (
        Math.floor(rating) == 1 ? (
          <span>&#9733;&#x2606;&#x2606;&#x2606;&#x2606;</span>
        ) : Math.floor(rating) == 2 ? (
          <span>&#9733;&#9733;&#x2606;&#x2606;&#x2606;</span>
        ) : Math.floor(rating) == 3 ? (
          <span>&#9733;&#9733;&#9733;&#x2606;&#x2606;</span>
        ) : Math.floor(rating) == 4 ? (
          <span>&#9733;&#9733;&#9733;&#9733;&#x2606;</span>
        ) : Math.floor(rating) == 5 ? (
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        ) : (
          <span>&#x2606;&#x2606;&#x2606;&#x2606;&#x2606;</span>
        )
      ) : (
        ""
      )}
    </span>
  );
};

export default Stars;
