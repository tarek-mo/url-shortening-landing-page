import React from "react";

const H1 = ({ children, className }) => {
  return (
    <h2
      className={`text-5xl lg:text-6xl font-bold text-black lg:leading-tight  ${className}`}
    >
      {children}
    </h2>
  );
};

export default H1;
