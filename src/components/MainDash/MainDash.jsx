import React from "react";
import Cards from "../Cards/Cards";
import RightSide from "../RigtSide/RightSide.jsx";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <>
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
      <RightSide></RightSide>
    </>
  );
};

export default MainDash;
