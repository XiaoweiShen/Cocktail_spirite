// // app/javascript/packs/controllers.js

// const HomeController = {
//   index() {
//     console.log('Hello from HomeController!');
//   }
// };

// export default HomeController;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Drinks from "../components/Drinks";
import DrinkList from "../components/DrinkList";
import DrinkMixer from "../components/DrinkMixer";

document.addEventListener("DOMContentLoaded", () => {
  createRoot(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Drinks" exact component={Drinks} />
        <Route path="/DrinkList" exact component={DrinkList} />
        <Route path="/DrinkMixer" exact component={DrinkMixer} />
      </Switch>
    </Router>,
    document.getElementById("root")
  );
});
