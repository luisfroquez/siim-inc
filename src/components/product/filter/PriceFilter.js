import { Fragment, useState } from "react";
import InputRange from "react-input-range";

const PriceFilter = ({ filterByPrice, setActive_ }) => {
  const [price, setPrice] = useState({ value: { min: 0, max: 200 } });
  const prices = [
    { min: "0", max: "50" },
    { min: "50", max: "100" },
    { min: "100", max: "150" },
    { min: "150", max: "200" },
    { min: "200" },
  ];

  return (
    <Fragment>
      <div className="shop-widget">
        <h3 className="shop-title">Filter selection</h3>
        <InputRange
          formatLabel={(value) => ``}
          maxValue={300}
          minValue={0}
          value={price.value}
          onChange={(value) => {
            setPrice({ value });
            filterByPrice(value);
            setActive_();
          }}
        />
        <span className="mt-20 d-block">
          ${price.value.min} - ${price.value.max}
        </span>
      </div>
      {/*        
        <div className="shop-widget">
          <h3 className="shop-title">Price filter</h3>
          <ul className="shop-link">
            {price &&
              price.map((b, i) => (
                <li key={i}>
                  <a className="checkBox">
                    <input
                      type="checkbox"
                      id={b.min}
                      name={b}
                      defaultValue="Bike"
                      onClick={(e) => filterByPrice(b)}
                    />{" "}
                    <label htmlFor={b.min}>
                      ${Number(b.min).toFixed(2)}
                      {b.max ? ` - ${Number(b.max).toFixed(2)}` : "+"}
                    </label>
                  </a>
                </li>
              ))}
          </ul>
        </div>
        */}
    </Fragment>
  );
};

export default PriceFilter;
