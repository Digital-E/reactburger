import Components from "./index";
import React, { useEffect, useState } from "react";

export default props => {
  let cheeseSlice = props.content.Cheese;
  const [cheeseSlices, setCheeseSlices] = useState([cheeseSlice]);

  useEffect(() => {
    // let cheeseSlices = cheeseSlices.split();
    // setCheeseSlices([...cheeseSlices, cheeseSlice]);
  }, []);

  const addSlice = () => {
    setCheeseSlices([...cheeseSlices, cheeseSlice]);
  };

  return cheeseSlices.map(cheese => (
    <div className="cheese">
      <div className="cheese__container">
        <img
          src={cheese}
          onClick={() => {
            addSlice();
          }}
        />
      </div>
    </div>
  ));
};