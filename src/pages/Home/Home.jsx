import React from "react";
import BoostLinksToday from "../../components/BoostLinksToday";
import Hero from "../../components/Hero";
import ShortenLink from "../../components/ShortenLink";
import Statistics from "../../components/Statistics";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <ShortenLink /> */}
      <Statistics />
      <BoostLinksToday />
    </>
  );
};

export default Home;
