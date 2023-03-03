import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation"

export default () => (
  <div>
    <Navigation />
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Cocktail Shaker</h1>
        <p className="lead">
          Recipes and more
        </p>
        <hr className="my-4" />
        <Link
          to="/Drinks"
          className="btn btn-lg custom-button"
          role="button"
        >
          Start Making Drinks
        </Link>
      </div>
    </div>
  </div>
);