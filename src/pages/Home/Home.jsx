import React from "react";
import BoostLinksToday from "../../components/BoostLinksToday";
import Hero from "../../components/Hero";
import Statistics from "../../components/Statistics";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <BoostLinksToday />
    </>
  );
};

export default Home;
