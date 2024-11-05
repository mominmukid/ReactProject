import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer1 from "components/Footer1";

const WorksPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro gap-[54px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between ml-[164px] mr-[181px] my-[15px] w-[76%]">
            <div className="header-row ">
              <Img
                className="h-[50px]"
                src="images/img_group642.svg"
                alt="Group645"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row sm:hidden items-start justify-between pt-[7px] w-[38%]">
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/")}
              >
                Home
              </Text>
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/about")}
              >
                About
              </Text>
              <div className="flex flex-col gap-[11px] items-center justify-start">
                <Text
                  className="text-lg text-red-401"
                  size="txtSourceSansProBold18"
                >
                  Works
                </Text>
                <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
              </div>
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Text>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-start justify-start max-w-[1384px] mx-auto md:px-5 w-full">
          <div className="bg-green-A100 sm:h-[580px] h-[646px] md:h-[930px] md:ml-[0] ml-[130px] p-1 relative rounded-[90px] w-[86%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[82px] h-full justify-start m-auto">
              <Text
                className="md:ml-[0] ml-[285px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtSourceSansProBold50"
              >
                <span className="text-black-900 font-sourcesanspro text-left font-bold">
                  What we{" "}
                </span>
                <span className="text-red-401 font-sourcesanspro text-left font-bold">
                  do
                </span>
                <span className="text-black-900 font-sourcesanspro text-left font-bold">
                  {" "}
                </span>
              </Text>
              <Text
                className="leading-[40.00px] text-center text-gray-700 text-xl w-full"
                size="txtSourceSansProRegular20Gray700"
              >
                We have completed many projects from various companies in the
                world, we have made many of our clients feel happy and satisfied
                with the results we have provided
              </Text>
            </div>
            <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[96%]">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row sm:gap-10 gap-[767px] items-start justify-start w-4/5 md:w-full">
                  <Img
                    className="h-[114px] rounded-[10px] w-[114px]"
                    src="images/img_rectangle57.svg"
                    alt="RectangleFiftySeven"
                  />
                  <div className="bg-deep_orange-A100 h-3.5 mb-[88px] mt-3 rounded-[50%] w-3.5"></div>
                </div>
                <div className="bg-light_blue-400 h-3.5 md:ml-[0] ml-[109px] mr-[1004px] mt-[74px] rounded-[50%] w-3.5"></div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[26px] mt-[175px] w-[98%] md:w-full">
                  <Img
                    className="h-[114px] md:mt-0 mt-[31px] w-[114px]"
                    src="images/img_group776.svg"
                    alt="group776"
                  />
                  <Img
                    className="h-[196px] md:ml-[0] ml-[745px] md:mt-0 mt-[7px] rounded-[15px] w-[196px]"
                    src="images/img_polygon1.svg"
                    alt="PolygonOne"
                  />
                  <div className="bg-deep_purple-800 h-3.5 mb-[189px] md:ml-[0] ml-[31px] rounded-[50%] w-3.5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start md:ml-[0] ml-[129px] mt-[100px] pt-[17px] w-[91%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[58px] items-center justify-start w-[59%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtSourceSansProBold40"
              >
                Latest Project
              </Text>
              <Text
                className="text-gray-700 text-xl"
                size="txtSourceSansProRegular20Gray700"
              >
                this is the last variety of projects we have worked on
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:h-[496px] h-[527px] relative w-[95%] md:w-full">
                <div className="absolute bg-orange-A200 h-[496px] inset-x-[0] mx-auto rounded-[30px] top-[0] w-full"></div>
                <div className="absolute bottom-[0] h-[482px] right-[0] w-[92%] md:w-full">
                  <Img
                    className="absolute h-[482px] inset-y-[0] my-auto object-cover right-[0] w-[73%]"
                    src="images/img_group21.png"
                    alt="groupTwentyOne"
                  />
                  <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[28%]">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                      size="txtNunitoExtraBold35"
                    >
                      Foodie.
                    </Text>
                    <Text
                      className="mt-[136px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-full"
                      size="txtSourceSansProBold35"
                    >
                      Launching website for Apps
                    </Text>
                    <Line className="bg-white-A700 h-0.5 mt-[68px] w-[24%]" />
                  </div>
                </div>
              </div>
              <div className="md:h-[1034px] h-[580px] sm:h-[680px] mt-[100px] relative w-full">
                <div className="absolute bg-indigo-800 h-[580px] inset-y-[0] left-[0] my-auto rounded-[30px] w-[95%]"></div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 items-end justify-between right-[0] top-[7%] w-[92%]">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-5">
                    <Text
                      className="bg-clip-text bg-gradient  sm:text-[31px] md:text-[33px] text-[35px] text-transparent"
                      size="txtSourceSansProBold35OrangeA200"
                    >
                      Floops
                    </Text>
                    <Text
                      className="mt-[193px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-full"
                      size="txtSourceSansProBold35"
                    >
                      Landing page for Website Service
                    </Text>
                    <Line className="bg-white-A700 h-0.5 mt-[68px] w-[24%]" />
                  </div>
                  <Img
                    className="h-[456px] md:h-auto object-cover"
                    src="images/img_group790.png"
                    alt="group790"
                  />
                </div>
              </div>
              <div className="bg-red-A200 h-[580px] md:h-[690px] mt-[110px] relative rounded-[30px] w-[95%] md:w-full">
                <div className="flex flex-col h-full items-start justify-start ml-[101px] my-auto w-[26%]">
                  <div className="flex flex-row gap-4 items-start justify-start w-[58%] md:w-full">
                    <Img
                      className="h-[38px] md:h-auto object-cover w-[31%]"
                      src="images/img_group511.png"
                      alt="Group511"
                    />
                    <Img
                      className="h-8 mt-1 w-3/5"
                      src="images/img_insight.svg"
                      alt="Insight"
                    />
                  </div>
                  <Text
                    className="mt-[173px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-full"
                    size="txtSourceSansProBold35"
                  >
                    Website for creative agency
                  </Text>
                  <Line className="bg-white-A700 h-0.5 mt-[68px] w-[24%]" />
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="h-[580px] relative w-full">
                    <Img
                      className="h-[580px] ml-auto my-auto object-cover rounded-[30px] w-[32%]"
                      src="images/img_web192021.png"
                      alt="Web192021"
                    />
                    <Img
                      className="absolute h-[580px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
                      src="images/img_web192021_580X1181.png"
                      alt="Web192021 One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-gray-801 flex items-center justify-center mt-[110px] rounded-tr-[50px] w-full" />
        </div>
      </div>
    </>
  );
};

export default WorksPage;
