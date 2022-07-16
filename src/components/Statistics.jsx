import React from "react";
import Icon from "./sub-components/Icon";
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";
import H3 from "./sub-components/H3";
import Container from "./sub-components/Container";
import H2 from "./sub-components/H2";
import Text from "./sub-components/Text";
import ShortenLink from "./ShortenLink";
const Statistics = () => {
  return (
    <div className="bg-gray pb-28">
      <ShortenLink />
      <Container className="mt-20">
        <H2 className="text-center mb-4 text-black">Advanced Statistics</H2>
        <Text className="text-center mx-auto max-w-md">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
        <div className="flex flex-wrap justify-center gap-5 gap-y-20 mt-24 items-start">
          <div
            style={{ minHeight: 260 }}
            className="bg-white w-80 max-w-full rounded-md	px-5 pb-5"
          >
            <Icon icon={BrandRecognition} />
            <H3 className="-mt-6 mb-4">Brand Recognition</H3>
            <Text>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </Text>
          </div>
          <div
            style={{ minHeight: 260 }}
            className="relative bg-white w-80 max-w-full rounded-md	px-5 pb-5 lg:mt-8 lg:after:content-[''] after:bg-lightblue lg:after:w-5 lg:after:h-2 after:absolute lg:after:top-2/4 lg:after:left-0 lg:after:-translate-x-full after:top-0 after:left-2/4 after:w-2 after:h-20 after:-translate-y-full md:after:content-none"
          >
            <Icon icon={DetailedRecords} />
            <H3 className="-mt-6 mb-4"> Detailed Records</H3>
            <Text>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Text>
          </div>
          <div
            style={{ minHeight: 260 }}
            className="relative bg-white w-80 max-w-full rounded-md	px-5 pb-5 lg:mt-16 lg:after:content-[''] after:bg-lightblue lg:after:w-5 lg:after:h-2 after:absolute lg:after:top-2/4 lg:after:left-0 lg:after:-translate-x-full after:top-0 after:left-2/4 after:w-2 after:h-20 after:-translate-y-full md:after:content-none"
          >
            <Icon icon={FullyCustomizable} />
            <H3 className="-mt-6 mb-4"> Fully Customizable</H3>
            <Text>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
