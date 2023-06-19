import { useState } from "react";
import { clickToActive } from "../../../utils/utils";

const ColorFilter = ({ filterByColor, setActive_ }) => {
  const colors = ["black", "green", "blue", "white", "red", "gray"];
  const [active, setActive] = useState([]);
  const activeFun = (value) => {
    filterByColor(value);
    setActive_();
    clickToActive(active, value, setActive);
  };
  return (
    <div className="shop-widget">
      <h3 className="shop-title">color</h3>
      <ul className="shop-link">
        {colors &&
          colors.map((color) => (
            <li key={color}>
              <a
                className="text-capitalize c-pointer"
                onClick={() => activeFun(color)}
              >
                <span
                  className={`${color} ${
                    active.includes(color) ? "" : "box-shadow-none"
                  }`}
                />{" "}
                {color}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ColorFilter;
