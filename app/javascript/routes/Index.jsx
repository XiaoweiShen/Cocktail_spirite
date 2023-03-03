import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import DrinkMixer from "../components/DrinkMixer"
import DrinkList from "../components/DrinkList"
import Drinks from "../components/Drinks"


export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Drinks" element={<Home />} />
    </Routes>
  </Router>
);