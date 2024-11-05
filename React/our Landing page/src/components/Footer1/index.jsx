import React from "react";

import { Img, Line, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center ml-[149px] mr-[47px] mt-[66px] w-[86%]">
          <div className="flex flex-col gap-[7px] items-start justify-start w-[77%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[91%] md:w-full">
              <div className="flex flex-row gap-3 items-center justify-start w-[19%] sm:w-full">
                <Img
                  className="h-[50px] w-[50px]"
                  src="defaultNoData.png"
                  alt="grid One"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtSpectralSCBold24"
                >
                  Naxus
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between sm:mt-0 mt-6 w-[47%] sm:w-full">
                <div className="md:h-[255px] h-[260px] pr-1 pt-1 relative w-[32%]">
                  <div className="absolute flex flex-col gap-14 h-max inset-y-[0] items-start justify-start left-[0] my-auto pb-0.5 w-[90%]">
                    <Text
                      className="text-white-A700 text-xl tracking-[4.00px]"
                      size="txtSourceSansProBold20WhiteA700"
                    >
                      ABOUT
                    </Text>
                    <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtSourceSansProSemiBold18"
                      >
                        About
                      </Text>
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtSourceSansProSemiBold18"
                      >
                        What we do
                      </Text>
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtSourceSansProSemiBold18"
                      >
                        Works
                      </Text>
                      <Text
                        className="text-lg text-white-A700 tracking-[0.90px]"
                        size="txtSourceSansProSemiBold18"
                      >
                        Testimonial
                      </Text>
                    </div>
                  </div>
                  <Line className="absolute bg-deep_orange-A100 h-0.5 left-[0] top-[14%] w-[41%]" />
                </div>
                <div className="flex flex-col gap-10 items-start justify-end py-0.5 w-[38%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl tracking-[4.00px]"
                      size="txtSourceSansProBold20WhiteA700"
                    >
                      FOLLOW US
                    </Text>
                    <Line className="bg-deep_orange-A100 h-0.5 w-[34%]" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700 tracking-[0.90px]"
                      size="txtSourceSansProSemiBold18"
                    >
                      Dribbble
                    </Text>
                    <Text
                      className="mt-[37px] text-lg text-white-A700 tracking-[0.90px]"
                      size="txtSourceSansProSemiBold18"
                    >
                      Instagram
                    </Text>
                    <Text
                      className="mt-8 text-lg text-white-A700 tracking-[0.90px]"
                      size="txtSourceSansProSemiBold18"
                    >
                      Behance
                    </Text>
                    <Text
                      className="mt-[34px] text-lg text-white-A700 tracking-[0.90px]"
                      size="txtSourceSansProSemiBold18"
                    >
                      Pinterest
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="text-[15px] text-white-A700"
              size="txtSourceSansProBold15"
            >
              Oracle Brand - All Rights Reserved
            </Text>
          </div>
          <Img
            className="h-[311px] md:mt-0 mt-[120px] w-[24%]"
            src="images/img_group710.svg"
            alt="Group710"
          />
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
