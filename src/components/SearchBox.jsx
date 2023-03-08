import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DATA from "../Data";
import { NavLink } from "react-router-dom";

export const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // if (keyword.trim()) {
    //     history.push(`/search/${keyword}`)
    // } else {
    //     history.push('/')
    // }
  };

  return (
    <Form onSubmit={submitHandler}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <input
              type="search"
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search Products..."
              className="me-sm-2 ml-sm-5 hj me-2 w"
            ></input>
            <Button type="submit" className="btn btn-primary p-1.5 ng">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div>
      <div className="container">
          <div className="row justify-content-around">
        {DATA.filter((val) => {
          if (keyword === "") {
            return val;
          } else if (val.title.toLowerCase().includes(keyword.toLowerCase())) {
            return val;
          }
        }).map((val) => {
          return (
            <div
              className="card my-5 py-5"
              key={val.id}
              style={{ width: "18rem" }}
            >
              <img src={val.img} className="card-img-top" alt={val.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{val.title}</h5>
                <p>{val.desc}</p>
                <p className="lead">${val.price}</p>
                <NavLink
                  to={`/products/${val.id}`}
                  className="btn btn-outline-primary"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
      </div></div>
    </Form>
  );
};

export default SearchBox;
