import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import ListingPageButtontertiary from "components/ListingPageButtontertiary";
import ListingPageCard from "components/ListingPageCard";
import ListingPageMenupanel from "components/ListingPageMenupanel";

const ListingpagePage = () => {
  const listingPageCardPropList = [
    {},
    {},
    { logo: "images/img_logo.png" },
    { logo: "images/img_mailchimplogo.svg" },
    {},
    {},
  ];

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-geist sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[82px] bg-white-A700 border-blue_gray-100 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col gap-10 items-center justify-start mb-[515px] mt-4 mx-auto w-auto">
            <Img
              className="h-[50px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-[50px]"
              src="images/img_acme.png"
              alt="acme"
            />
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Button
                className="flex items-center justify-center w-11"
                shape="round"
                size="xs"
              >
                <Img className="h-8" src="images/img_icons.svg" alt="icons" />
              </Button>
              <Button
                className="flex items-center justify-center w-11"
                shape="round"
                size="xs"
              >
                <Img className="h-8" src="images/img_house.svg" alt="house" />
              </Button>
              <Button
                className="flex items-center justify-center w-11"
                shape="round"
                size="xs"
              >
                <Img
                  className="h-8"
                  src="images/img_icons_blue_gray_300.svg"
                  alt="icons_One"
                />
              </Button>
              <Button
                className="flex items-center justify-center w-11"
                shape="round"
                size="xs"
              >
                <Img
                  className="h-8"
                  src="images/img_icons_blue_gray_300_43x44.svg"
                  alt="icons_Two"
                />
              </Button>
              <Button
                className="border border-deep_purple-50 border-solid flex items-center justify-center w-11"
                shape="round"
                color="purple_800"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-8"
                  src="images/img_icons_white_a700.svg"
                  alt="icons_Three"
                />
              </Button>
            </div>
          </div>
          <div className="border border-blue_gray-900_19 border-solid flex flex-col h-[50px] items-center justify-start mb-4 mt-[834px] mx-auto rounded-[50%] w-[50px]">
            <Img
              className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
              src="images/img_image1.png"
              alt="imageOne"
            />
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col h-full items-start justify-start md:px-5 w-full">
          <div className="bg-white-A700 border-b border-blue_gray-100 border-solid h-16 w-full"></div>
          <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-start w-full">
            <ListingPageMenupanel className="bg-white-A700 border-blue_gray-100 border-r border-solid flex flex-col gap-6 h-[836px] md:h-auto items-start justify-start p-6 sm:px-5" />
            <div className="bg-gray-50 flex flex-1 flex-col h-full items-center justify-center pt-10 md:px-10 px-20 sm:px-5 w-full">
              <div className="flex flex-col gap-[33px] h-[796px] md:h-auto items-center justify-start max-w-[982px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                    size="txtGeistSemiBold36"
                  >
                    Integrations
                  </Text>
                  <Text
                    className="text-gray-600 text-lg tracking-[0.18px] w-auto"
                    size="txtGeistLight18"
                  >
                    Select and connect tools you use to integrate with your
                    workflow
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                    <ListingPageButtontertiary className="bg-purple-800 border border-deep_purple-50 border-solid flex flex-row gap-2 items-start justify-start pl-4 pr-2 py-2 rounded-[16px] w-auto" />
                    <div className="flex flex-col items-start justify-start px-4 py-2 rounded-[16px] w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtGeistRegular14"
                      >
                        Finance
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start px-4 py-2 rounded-[16px] w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtGeistRegular14"
                      >
                        Communications
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start px-4 py-2 rounded-[16px] w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtGeistRegular14"
                      >
                        Storage
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[34px] rounded-[17px] w-16"
                    src="images/img_viewtoggle.svg"
                    alt="viewtoggle"
                  />
                </div>
                <div className="flex flex-col font-inter items-start justify-start rounded-[16px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      {listingPageCardPropList.map((props, index) => (
                        <React.Fragment key={`ListingPageCard${index}`}>
                          <ListingPageCard
                            className="bg-white-A700 flex flex-1 flex-col gap-2 items-start justify-start outline outline-[0.5px] outline-blue_gray-100 p-8 sm:px-5 rounded-lg w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-geist h-[150px] md:h-auto items-center justify-end pb-6 w-auto">
                  <div className="flex flex-row gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900_cc text-sm tracking-[0.14px] w-auto"
                      size="txtGeistRegular14Bluegray900cc"
                    >
                      <span className="text-blue_gray-900_cc font-geist text-left font-normal">
                        Read our{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-900_cc font-geist text-left font-normal underline"
                      >
                        terms and Conditions
                      </a>
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowsquareout.svg"
                      alt="arrowsquareout"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingpagePage;
