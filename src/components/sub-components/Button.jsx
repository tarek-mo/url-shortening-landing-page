import React from "react";

const Button = ({ style, onClick, disabled, children, className, type }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-lightblue hover:bg-lightcyan text-white font-bold text-sm rounded-3xl py-3 px-8 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
