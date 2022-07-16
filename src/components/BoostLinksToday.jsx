import React from "react";
import { Link } from "react-router-dom";
import Button from "./sub-components/Button";
import Container from "./sub-components/Container";
import H2 from "./sub-components/H2";

const BoostLinksToday = () => {
  return (
    <section className="py-10 text-center bg-violet bg-boost-pattern-mobile lg:bg-boost-pattern-desktop bg-no-repeat bg-cover bg-center">
      <Container>
        <H2 className="text-white mb-7"> Boost your links today</H2>
        <Button>
          <Link to="/">Get Started</Link>
        </Button>
      </Container>
    </section>
  );
};

export default BoostLinksToday;
