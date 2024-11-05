import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro gap-[54px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
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
                <div className="flex flex-col gap-[11px] items-center justify-start">
                  <Text
                    className="text-lg text-red-401"
                    size="txtSourceSansProBold18"
                  >
                    About
                  </Text>
                  <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
                </div>
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => navigate("/works")}
                >
                  Works
                </Text>
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
        </div>
        <div className="flex flex-col items-start justify-start md:px-5 w-[91%] md:w-full">
          <div className="bg-yellow-100 flex flex-col items-center justify-end md:ml-[0] ml-[130px] p-[53px] md:px-10 sm:px-5 rounded-[90px] w-[91%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[19px] w-[88%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] justify-start w-[10%] md:w-full">
                <Img
                  className="h-[89px] md:h-auto rounded-[50%] w-[89px]"
                  src="images/img_ellipse11.png"
                  alt="EllipseEleven"
                />
                <div className="bg-pink-400 h-3.5 md:ml-[0] ml-[23px] mr-[52px] rounded-[50%] w-3.5"></div>
              </div>
              <div className="flex flex-col justify-start w-[91%] md:w-full">
                <div className="bg-deep_orange-A100 h-3.5 md:ml-[0] ml-[706px] mr-[134px] rounded-[50%] w-3.5"></div>
                <div className="md:h-[282px] h-[293px] sm:h-[302px] mt-[53px] relative w-full">
                  <Img
                    className="absolute h-[89px] right-[0] rounded-[50%] top-[0] w-[89px]"
                    src="images/img_ellipse13.png"
                    alt="EllipseThirteen"
                  />
                  <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[60px] items-center justify-start left-[0]">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                      size="txtSourceSansProBold50"
                    >
                      <span className="text-black-900 font-sourcesanspro text-left font-bold">
                        Get to know more{" "}
                      </span>
                      <span className="text-red-401 font-sourcesanspro text-left font-bold">
                        about us
                      </span>
                    </Text>
                    <Text
                      className="leading-[40.00px] text-center text-gray-700 text-xl w-full"
                      size="txtSourceSansProRegular20Gray700"
                    >
                      We are an agency engaged in the creative industry and
                      business, we are ready to help you to improve your
                      business performance together with our great team
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[89px] md:h-auto md:ml-[0] ml-[676px] mt-[72px] rounded-[50%] w-[89px]"
                  src="images/img_ellipse12.png"
                  alt="EllipseTwelve"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[130px] mt-[100px] w-[91%] md:w-full">
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-[7px] rounded-[10px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle16.png"
                  alt="RectangleSixteen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                    size="txtSourceSansProBold25"
                  >
                    Sarah Jae
                  </Text>
                  <Text
                    className="text-black-900_68 text-xl"
                    size="txtSourceSansProRegular20Black90068"
                  >
                    Branding Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-[7px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_rectangle15.png"
                  alt="RectangleFifteen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                    size="txtSourceSansProBold25"
                  >
                    John Doe
                  </Text>
                  <Text
                    className="text-black-900_68 text-xl"
                    size="txtSourceSansProRegular20Black90068"
                  >
                    Product Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-2 rounded-[10px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle17.png"
                  alt="RectangleSeventeen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                    size="txtSourceSansProBold25"
                  >
                    Samantha
                  </Text>
                  <Text
                    className="text-black-900_68 text-xl"
                    size="txtSourceSansProRegular20Black90068"
                  >
                    SEO Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-10 items-center justify-start rounded-[10px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle18.png"
                  alt="RectangleEighteen"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtSourceSansProBold30"
                  >
                    Lila laconsia
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68"
                    size="txtSourceSansProRegular25"
                  >
                    UI Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-10 items-center justify-start pb-[7px] rounded-[10px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle19.png"
                  alt="RectangleNineteen"
                />
                <div className="flex flex-col gap-2 items-center justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtSourceSansProBold30"
                  >
                    Ana louren
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68"
                    size="txtSourceSansProRegular25"
                  >
                    Illustrator
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[43px] items-center justify-start rounded-[10px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle20.png"
                  alt="RectangleTwenty"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtSourceSansProBold30"
                  >
                    Rico john
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68"
                    size="txtSourceSansProRegular25"
                  >
                    UX Principles
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[43px] items-center justify-start rounded-[10px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle21.png"
                  alt="RectangleTwentyOne"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtSourceSansProBold30"
                  >
                    Randy okla
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68"
                    size="txtSourceSansProRegular25"
                  >
                    Interaction Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-10 items-center justify-start pb-[7px] rounded-[10px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle22.png"
                  alt="RectangleTwentyTwo"
                />
                <div className="flex flex-col gap-2 items-center justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtSourceSansProBold30"
                  >
                    Sinta Marcus
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68"
                    size="txtSourceSansProRegular25"
                  >
                    UX Writer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-10 items-center justify-start pb-[7px] rounded-[10px] w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle23.png"
                  alt="RectangleTwentyThree"
                />
                <div className="flex flex-col gap-2 items-center justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtSourceSansProBold30"
                  >
                    Sam Rivald
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900_68"
                    size="txtSourceSansProRegular25"
                  >
                    Front-end Dev
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start md:ml-[0] ml-[130px] mt-[100px] w-[91%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtSourceSansProBold40"
            >
              Our Moment
            </Text>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start rounded-[10px] w-[32%] md:w-full">
                <Img
                  className="h-[205px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle29.png"
                  alt="RectangleTwentyNine"
                />
                <Img
                  className="h-[379px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle30.png"
                  alt="RectangleThirty"
                />
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[32%] md:w-full">
                <Img
                  className="h-[379px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_rectangle31.png"
                  alt="RectangleThirtyOne"
                />
                <Img
                  className="h-[205px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_manwearingbla.png"
                  alt="manwearingbla"
                />
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[32%] md:w-full">
                <Img
                  className="h-[175px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_kellysikkemac.png"
                  alt="kellysikkemac"
                />
                <Img
                  className="h-[175px] md:h-auto object-cover rounded-[10px] w-full"
                  src="images/img_womansittingo.png"
                  alt="womansittingo"
                />
                <Img
                  className="h-[206px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_personholding.png"
                  alt="personholding"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-gray-801 flex items-center justify-center mt-[120px] rounded-tr-[50px] w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
