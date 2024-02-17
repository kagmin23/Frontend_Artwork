/* eslint-disable no-unused-vars */
// src/App.js
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import ProductPage from "./components/ProductPage";
import {Outlet, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="container">
      <Header />
      {/* <ProductPage/> */}
      <Outlet/>
    </div>
  );
    
  
}

export default App;