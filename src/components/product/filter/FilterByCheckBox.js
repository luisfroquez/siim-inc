const FilterByCheckBox = ({ title, arr, funtion, setActive_ }) => {
  return (
    <div className="shop-widget">
      <h3 className="shop-title">{title}</h3>
      <ul className="shop-link">
        {arr &&
          arr.map((b, i) => (
            <li key={i}>
              <a className="checkBox">
                <input
                  type="checkbox"
                  id={b}
                  name={b}
                  defaultValue="Categorias"
                  onClick={(e) => {
                    funtion(e.target.name);
                    setActive_();
                  }}
                />{" "}
                <label htmlFor={b}>{b}</label>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterByCheckBox;
