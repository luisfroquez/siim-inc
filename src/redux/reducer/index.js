import { combineReducers } from "redux";
import blog from "./blog";
import features from "./features";
import filter from "./filter";
import home from "./home";
import product from "./product";
import seller from "./seller";
import upcomingProduct from "./upcomingProduct";
import utilis from "./utilis";

export default combineReducers({
  blog,
  seller,
  features,
  upcomingProduct,
  product,
  filter,
  home,
  utilis,
});
