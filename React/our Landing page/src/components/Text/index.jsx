import React from "react";

const sizeClasses = {
  txtSourceSansProBold20WhiteA700: "font-bold font-sourcesanspro",
  txtSourceSansProBold25Black900: "font-bold font-sourcesanspro",
  txtSourceSansProRegular20Black90068: "font-normal font-sourcesanspro",
  txtSourceSansProRegular25: "font-normal font-sourcesanspro",
  txtSourceSansProRegular20: "font-normal font-sourcesanspro",
  txtSpectralSCBold24: "font-bold font-spectralsc",
  txtSourceSansProBold40: "font-bold font-sourcesanspro",
  txtSourceSansProSemiBold18: "font-semibold font-sourcesanspro",
  txtSourceSansProBold20: "font-bold font-sourcesanspro",
  txtSourceSansProSemiBold17: "font-semibold font-sourcesanspro",
  txtSourceSansProBold25: "font-bold font-sourcesanspro",
  txtSourceSansProRegular20Gray700: "font-normal font-sourcesanspro",
  txtSourceSansProBold50: "font-bold font-sourcesanspro",
  txtSourceSansProBold18Black900: "font-bold font-sourcesanspro",
  txtNunitoExtraBold35: "font-extrabold font-nunito",
  txtSourceSansProRegular18: "font-normal font-sourcesanspro",
  txtSourceSansProBold20Gray600: "font-bold font-sourcesanspro",
  txtSourceSansProBold35OrangeA200: "font-bold font-sourcesanspro",
  txtSourceSansProRegular15: "font-normal font-sourcesanspro",
  txtSourceSansProBold15: "font-bold font-sourcesanspro",
  txtSourceSansProBold18: "font-bold font-sourcesanspro",
  txtSourceSansProSemiBold20: "font-semibold font-sourcesanspro",
  txtSourceSansProBold30: "font-bold font-sourcesanspro",
  txtSourceSansProBold75: "font-bold font-sourcesanspro",
  txtSourceSansProBold35: "font-bold font-sourcesanspro",
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
