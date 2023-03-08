import React from "react";
// import { NavLink } from "react-router-dom";
// import Data from "../Data";
import SearchBox from "./SearchBox";
import Paginate from "./Paginate"
import { useSelector } from "react-redux";



const Product = () => {

  const productList = useSelector(state => state.productList)
  const {  page, pages } = productList
  return (
    <>
    
    
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
            {/* {Data.map(cardItem)} */}
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around"><SearchBox /></div>
        </div>
      </div>
      <Paginate pages={pages} page={page} isAdmin={true} />
    </>
  );
};

export default Product;
