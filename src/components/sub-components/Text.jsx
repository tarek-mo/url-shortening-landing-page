import React from "react";

const Text = ({ children, className }) => {
  return <p className={`text-darkgray ${className}`}>{children}</p>;
};

export default Text;
