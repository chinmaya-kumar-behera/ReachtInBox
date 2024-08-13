import React from "react";
import PropTypes from "prop-types";

const Button = ({
  size = "md",
  onClick,
  className = "",
  rounded = "rounded-md",
//   hoverEffect = "hover:bg-gradient-to-br",
  children,
}) => {
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${className} bg-gradient-to-r from-[#455edb] to-[#0523bc] ${sizeClasses[size]} font-normal ${rounded} text-white font-semibold`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  gradientFrom: PropTypes.string,
  gradientTo: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  rounded: PropTypes.string,
  hoverEffect: PropTypes.string,
};

export default Button;
