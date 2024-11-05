import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const HomepagePage = () => {
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
                alt="Group642"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row sm:hidden items-start justify-between pl-[7px] pt-[7px] w-2/5">
              <div className="flex flex-col gap-2.5 items-center justify-start ml-[18px]">
                <Text
                  className="text-lg text-red-401"
                  size="txtSourceSansProBold18"
                >
                  Home
                </Text>
                <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
              </div>
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/about")}
              >
                About
              </Text>
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
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-[646px] max-w-[1181px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-cyan-50 h-[646px] inset-[0] justify-center m-auto rounded-[35px] w-full"></div>
            <div className="absolute h-[473px] inset-y-[0] my-auto right-[0] w-[94%] md:w-full">
              <Img
                className="absolute h-[473px] inset-y-[0] my-auto object-cover right-[0] w-1/2"
                src="images/img_group665.png"
                alt="group665"
              />
              <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[5px] top-[10%] w-[55%]">
                <Text
                  className="leading-[80.00px] md:text-5xl text-[75px] text-black-900 w-full"
                  size="txtSourceSansProBold75"
                >
                  <span className="text-black-900 font-sourcesanspro text-left font-bold">
                    Maximize your business with{" "}
                  </span>
                  <span className="text-red-401 font-sourcesanspro text-left font-bold">
                    us
                  </span>
                </Text>
                <Text
                  className="leading-[35.00px] md:ml-[0] ml-[3px] mt-[25px] text-black-900_60 text-xl w-[73%] sm:w-full"
                  size="txtSourceSansProRegular20"
                >
                  Maximize your business with a variety of services and services
                  from us
                </Text>
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mt-[39px] rounded-[5px] w-[71%] md:w-full">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[201px] rounded-[5px] text-base text-center"
                    color="black_900"
                    size="sm"
                  >
                    Contact Us
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[201px] rounded-[5px] text-base text-center"
                    color="black_900"
                    size="sm"
                    variant="outline"
                  >
                    About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1181px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtSourceSansProBold40"
              >
                Meet our team
              </Text>
              <Text
                className="text-red-401 text-xl"
                size="txtSourceSansProBold20"
              >
                View All
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
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
            </List>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1180px] mt-[100px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtSourceSansProBold40"
            >
              What we do
            </Text>
            <div className="bg-red-50 flex flex-col items-center justify-start p-28 md:px-10 sm:px-5 rounded-[90px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-1.5 w-[95%] md:w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-[23%] md:w-full">
                  <Button
                    className="flex h-[46px] items-center justify-center w-[46px]"
                    shape="round"
                    color="red_300"
                  >
                    <Img
                      className="h-[23px]"
                      src="images/img_cut.svg"
                      alt="cut"
                    />
                  </Button>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtSourceSansProBold25Black900"
                    >
                      UIUX Design
                    </Text>
                    <Text
                      className="leading-[30.00px] text-[15px] text-gray-700 w-full"
                      size="txtSourceSansProRegular15"
                    >
                      We can make your website or application design better with
                      this service
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start md:ml-[0] ml-[102px] p-[25px] sm:px-5 rounded-[30px] shadow-bs4 w-[31%] md:w-full">
                  <div className="flex flex-col gap-[37px] items-start justify-start mb-2 mt-3 w-[95%] md:w-full">
                    <Button
                      className="flex h-[46px] items-center justify-center w-[46px]"
                      shape="round"
                      color="cyan_400"
                    >
                      <Img
                        className="h-[23px]"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </Button>
                    <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtSourceSansProBold25Black900"
                      >
                        Website Dev
                      </Text>
                      <Text
                        className="leading-[30.00px] text-[15px] text-gray-700 w-full"
                        size="txtSourceSansProRegular15"
                      >
                        Make your business more leverage by having an optimal
                        website and we are ready to help
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start md:ml-[0] ml-[86px] w-[27%] md:w-full">
                  <Button
                    className="flex h-[46px] items-center justify-center w-[46px]"
                    shape="round"
                    color="lime_800"
                  >
                    <Img
                      className="h-[23px]"
                      src="images/img_lightbulb.svg"
                      alt="lightbulb"
                    />
                  </Button>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtSourceSansProBold25Black900"
                    >
                      Branding & Product
                    </Text>
                    <Text
                      className="leading-[30.00px] text-[15px] text-gray-700 w-full"
                      size="txtSourceSansProRegular15"
                    >
                      we can also help you in the affairs of product branding so
                      that your products can be more riveting
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[1269px] h-[559px] md:h-[997px] mt-[100px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[525px] inset-x-[0] items-center justify-end mx-auto p-[50px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group839.png')" }}
            >
              <div className="flex flex-col items-center justify-start mt-[22px] w-[89%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtSourceSansProBold40"
                    >
                      What our clients are saying
                    </Text>
                    <div className="flex md:flex-1 flex-row gap-[9px] items-center justify-between w-[13%] md:w-full">
                      <Button
                        className="flex items-center justify-center"
                        shape="square"
                      >
                        <Img src="images/img_group683.svg" alt="group683" />
                      </Button>
                      <Button
                        className="flex items-center justify-center"
                        shape="square"
                      >
                        <Img src="images/img_group684.svg" alt="group684" />
                      </Button>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs5 w-full">
                      <div className="flex flex-col gap-5 items-start justify-start mb-3 rounded-[12px] w-[99%] md:w-full">
                        <Text
                          className="leading-[30.00px] text-gray-700 text-lg w-full"
                          size="txtSourceSansProRegular18"
                        >
                          I am very satisfied with the work on the Nexus team.
                          good service, satisfying work results and can also
                          increase my business turnover. Thank you so much to
                          the Nexus team.
                        </Text>
                        <div className="flex flex-row gap-[25px] items-center justify-start pr-[7px] rounded-[12px] w-[64%] md:w-full">
                          <Img
                            className="h-[49px] md:h-auto object-cover rounded-[12px] w-[49px]"
                            src="images/img_rectangle52.png"
                            alt="RectangleFiftyTwo"
                          />
                          <div className="flex flex-col gap-3 items-start justify-start">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtSourceSansProSemiBold20"
                            >
                              John Richard
                            </Text>
                            <Text
                              className="text-[15px] text-gray-700"
                              size="txtSourceSansProRegular15"
                            >
                              Businessman
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs5 w-full">
                      <div className="flex flex-col gap-5 items-start justify-start mb-3 rounded-[12px] w-[99%] md:w-full">
                        <Text
                          className="leading-[30.00px] text-gray-700 text-lg w-full"
                          size="txtSourceSansProRegular18"
                        >
                          since branding with the oracle team i feel my business
                          has a very fast and good development, everything also
                          always goes through a process of discussion that is
                          really valid
                        </Text>
                        <div className="flex flex-row gap-6 items-center justify-start pr-3.5 rounded-[12px] w-[69%] md:w-full">
                          <Img
                            className="h-[49px] md:h-auto object-cover rounded-[12px] w-[49px]"
                            src="images/img_rectangle52_49X49.png"
                            alt="RectangleFiftyTwo One"
                          />
                          <div className="flex flex-col gap-3 items-start justify-start">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtSourceSansProSemiBold20"
                            >
                              Andrew Smith
                            </Text>
                            <Text
                              className="text-[15px] text-gray-700"
                              size="txtSourceSansProRegular15"
                            >
                              Founder Ulala
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] shadow-bs5 w-full">
                      <div className="flex flex-col gap-5 items-start justify-start mb-3 rounded-[12px] w-[99%] md:w-full">
                        <Text
                          className="leading-[30.00px] text-gray-700 text-lg w-full"
                          size="txtSourceSansProRegular18"
                        >
                          I can say, this team is indeed extraordinarily
                          perfect. I will do a lot of teamwork with this team
                          next time. I do not hesitate to cooperate because the
                          results are very satisfying
                        </Text>
                        <div className="flex flex-row gap-[25px] items-center justify-start pr-[15px] rounded-[12px] w-[64%] md:w-full">
                          <Img
                            className="h-[49px] md:h-auto object-cover rounded-[12px] w-[49px]"
                            src="images/img_rectangle52_1.png"
                            alt="RectangleFiftyTwo Two"
                          />
                          <div className="flex flex-col gap-3 items-start justify-start">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtSourceSansProSemiBold20"
                            >
                              Steve John
                            </Text>
                            <Text
                              className="text-[15px] text-gray-700"
                              size="txtSourceSansProRegular15"
                            >
                              CEO rumahku.ox
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <Button
              className="absolute border-[9px] border-solid border-white-A700 flex h-[68px] items-center justify-center left-[9%] top-[0] w-[68px]"
              shape="circle"
              size="sm"
            >
              <Img src="images/img_settings_68X68.svg" alt="settings One" />
            </Button>
          </div>
          <Footer className="bg-gray-801 flex items-center justify-center mt-[70px] md:px-5 rounded-tr-[50px] w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
