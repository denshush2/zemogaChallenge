import React from "react";
import Header from "../header";
import "./style.scss";
import PapaCard from "../papaCard";
import PapaTime from "../papaTime";
const MainContainer = () => {
  return (
    <section className="main-container">
      <Header />
      <PapaCard />
      <PapaTime />
    </section>
  );
};

export default MainContainer;
