import { product } from "../Context/constext";

const Stars = (props: product | undefined) => {
  return (
    <span className="text-orange-600">
      {props?.rating?.rate}
      &#x2606;&#x2606;&#x2606;&#x2606;&#x2606;&#9733;
    </span>
  );
};

export default Stars;
