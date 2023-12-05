import { useState } from "react";
import { FaStar } from "react-icons/fa";

const GiveStarRating = () => {
  const [rate, setRate] = useState<number>(0);
  // const [color] = useState<number>(0);

  return (
    <div className="flex">
      {[...Array(5)].map((s, i) => (
        <>
          {console.log(typeof s)}
          <label>
            <input
              onClick={() => setRate(i + 1)}
              type="radio"
              name="rated"
              id=""
              hidden
              // value={i}
            />
            <FaStar color={i + 1 <= rate ? "orange" : "gray"} />
          </label>
        </>
      ))}
    </div>
  );
};

export default GiveStarRating;
