import React from "react";

import { Button, Img, Text } from "components";

const ListingPageCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <div className="flex flex-col h-8 md:h-auto items-center justify-center p-[6.56px] w-8">
            <div className="flex flex-col h-8 items-center justify-start w-8">
              {!!props?.logo ? (
                <Img
                  className="h-8 md:h-auto object-cover rounded-bl-[3px] rounded-br-[3px] w-8"
                  alt="logo"
                  src={props?.logo}
                />
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-[264px]">
              {!!props?.intuitquickbook ? (
                <Text
                  className="text-gray-900 text-lg tracking-[0.18px] w-auto"
                  size="txtGeistMedium18"
                >
                  {props?.intuitquickbook}
                </Text>
              ) : null}
              {!!props?.usertext ? (
                <Text
                  className="max-w-[264px] md:max-w-full text-gray-600 text-sm"
                  size="txtInterRegular14"
                >
                  {props?.usertext}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row h-7 md:h-auto items-center justify-center w-auto">
              {!!props?.connected ? (
                <Button
                  className="border border-blue_gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[109px] rounded-[14px]"
                  rightIcon={
                    <Img
                      className="h-4 ml-1.5"
                      src="images/img_gear.svg"
                      alt="Gear"
                    />
                  }
                  shape="round"
                  color="blue_gray_900"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-inter leading-[normal] text-left text-xs">
                    {props?.connected}
                  </div>
                </Button>
              ) : null}
              <div className="flex flex-col items-center justify-center px-3 py-1.5 w-auto">
                {!!props?.integrationsdetOne ? (
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.integrationsdetOne}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ListingPageCard.defaultProps = {};

export default ListingPageCard;
