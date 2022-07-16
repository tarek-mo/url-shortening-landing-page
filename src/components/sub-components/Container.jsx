import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`px-2 max-w-6xl mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
