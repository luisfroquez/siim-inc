import Router from "next/router";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { filterByName } from "../../redux/action/filter";

const SearchTrigger = ({ filterByName }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [text, setText] = useState(false);
  if (text) {
    Router.push(
      {
        pathname: "/shop",
        // query: { sortBy: 'price' }
      },
      undefined,
      { shallow: true }
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText(true);
    setIsSearch(false);
  };

  return (
    <Fragment>
      <li className="search-btn">
        <a
          className="search-btn nav-search search-trigger"
          href="#"
          onClick={(e) => {
            setIsSearch(true);
            e.preventDefault();
          }}
        >
          <i className="fas fa-search" />
        </a>
      </li>
      <div className={`search-wrap ${isSearch ? "d-block" : ""}`}>
        <div className="search-inner">
          <i
            className="fas fa-times search-close"
            id="search-close"
            onClick={() => setIsSearch(false)}
          />
          <div className="search-cell">
            <form method="get" onSubmit={(e) => onSubmit(e)}>
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search Entire Store..."
                  onChange={(e) => filterByName(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { filterByName })(SearchTrigger);
