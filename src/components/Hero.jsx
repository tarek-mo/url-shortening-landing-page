import React from "react";
import Button from "./sub-components/Button";
import Container from "./sub-components/Container";
import H1 from "./sub-components/H1";
import Text from "./sub-components/Text";
import heroIllustration from "../images/illustration-working.svg";
const Hero = () => {
  return (
    <section className="mt-12 mb-32 py-4 lg:bg-hero-illustration bg-no-repeat bg-right-top bg-contain text-center lg:text-start">
      <img
        className="block mx-auto mb-8 lg:hidden"
        src={heroIllustration}
        alt="Working Illustration"
      />
      <Container>
        <H1>
          More than just <br /> shorter links
        </H1>
        <Text className="max-w-md mx-auto lg:mx-0 mt-4 mb-7">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <Button>Get Started</Button>
      </Container>
    </section>
  );
};

export default Hero;
