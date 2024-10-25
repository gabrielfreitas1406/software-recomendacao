import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import Categories from "./Categories";
import Recommendations from "./Recommendations";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recommendations />
    </>
  );
};

export default HomePage;
