import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    red_300: "bg-red-300 shadow-bs",
    cyan_400: "bg-cyan-400 shadow-bs2",
    lime_800: "bg-lime-800 shadow-bs1",
    red_401: "bg-red-401",
    green_600: "bg-green-600 shadow-bs3 text-white-A700",
  },
  outline: {
    black_900: "border-[3px] border-black-900 border-solid text-black-900",
  },
};
const sizes = { xs: "p-[11px]", sm: "p-6 sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "red_401",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "black_900",
    "red_300",
    "cyan_400",
    "lime_800",
    "red_401",
    "green_600",
  ]),
};

export { Button };
