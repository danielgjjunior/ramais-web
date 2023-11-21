import React from "react";

const sizeClasses = {
  txtGeistRegular14Gray50: "font-geist font-hairline",
  txtGeistRegular14Bluegray900cc: "font-geist font-normal",
  txtGeistSemiBold36: "font-geist font-hairline",
  txtGeistRegular14: "font-geist font-hairline",
  txtGeistMedium18: "font-geist font-hairline",
  txtGeistLight18: "font-geist font-hairline",
  txtInterRegular12: "font-inter font-normal",
  txtGeistRegular10: "font-geist font-hairline",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
