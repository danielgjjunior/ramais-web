import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[16px]" };
const variants = {
  fill: {
    blue_gray_900: "bg-blue_gray-900 shadow-bs",
    purple_800: "bg-purple-800",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_900", "purple_800"]),
};

export { Button };
