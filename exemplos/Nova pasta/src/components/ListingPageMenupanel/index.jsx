import React from "react";

import { Button, Img, Text } from "components";

const ListingPageMenupanel = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-[10px] text-gray-900 tracking-[1.00px] uppercase w-auto"
          size="txtGeistRegular10"
        >
          {props?.username}
        </Text>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <div className="flex flex-row gap-4 items-center justify-start px-4 py-2 w-full">
            <Img
              className="h-6 w-6"
              src="images/img_gearsix.svg"
              alt="gearsix"
            />
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtInterRegular16"
            >
              {props?.usergeneral}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start px-4 py-2 w-full">
            <Img className="h-6 w-6" src="images/img_shield.svg" alt="shield" />
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtInterRegular16"
            >
              {props?.usersecurity}
            </Text>
          </div>
          <Button
            className="border border-deep_purple-50 border-solid cursor-pointer flex items-center justify-center min-w-[163px] rounded-[20px]"
            leftIcon={
              <Img
                className="h-6 mr-4"
                src="images/img_puzzlepiece.svg"
                alt="PuzzlePiece"
              />
            }
            color="purple_800"
            size="sm"
            variant="fill"
          >
            <div className="!text-white-A700 font-inter leading-[normal] text-base text-left">
              {props?.userintegrations}
            </div>
          </Button>
          <div className="flex flex-row gap-4 items-center justify-start px-4 py-2 w-full">
            <Img
              className="h-6 w-6"
              src="images/img_eyeslash.svg"
              alt="eyeslash"
            />
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtInterRegular16"
            >
              {props?.userprivacy}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start px-4 py-2 w-full">
            <Img
              className="h-6 w-6"
              src="images/img_userlist.svg"
              alt="userlist"
            />
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtInterRegular16"
            >
              {props?.userpermissions}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start px-4 py-2 w-full">
            <Img
              className="h-6 w-6"
              src="images/img_bellringing.svg"
              alt="bellringing"
            />
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtInterRegular16"
            >
              {props?.usernotifications}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start px-4 py-2 w-full">
            <Img className="h-6 w-6" src="images/img_wrench.svg" alt="wrench" />
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtInterRegular16"
            >
              {props?.useradvanced}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ListingPageMenupanel.defaultProps = {
  username: "ACCOUNT Settings",
  usergeneral: "General",
  usersecurity: "Security",
  userintegrations: "Integrations",
  userprivacy: "Privacy",
  userpermissions: "Permissions",
  usernotifications: "Notifications",
  useradvanced: "Advanced",
};

export default ListingPageMenupanel;
