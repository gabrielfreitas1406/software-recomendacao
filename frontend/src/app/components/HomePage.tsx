import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Categories from "./Categories";
import Recommendations from "./Recommendations";

const HomePage: React.FC = () => {
  const headerProps = {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0e794bf66420096e920bd50e32de1115938e28c4c8628a18e959cf647782974?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
    navItems: ["aaaaa", "aaaa", "aaaaa"],
  };

  return (
    <div className="home-page">
      <Header {...headerProps} />
      <main>
        <Hero />
        <Categories />
        <Recommendations />
      </main>
    </div>
  );
};

export default HomePage;
