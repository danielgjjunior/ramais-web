import React from "react";

import { Text } from "components";

const ListingPageButtontertiary = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-gray-50 text-sm w-auto"
          size="txtGeistRegular14Gray50"
        >
          {props?.allintegrationstext}
        </Text>
        <div className="h-[18px] relative w-[25px]">
          <div className="absolute bg-white-A700 bottom-[0] h-[17px] inset-x-[0] mx-auto rounded-lg w-full"></div>
          <Text
            className="absolute h-full inset-[0] m-auto text-gray-900 text-sm w-max"
            size="txtGeistRegular14"
          >
            {props?.sixtext}
          </Text>
        </div>
      </div>
    </>
  );
};

ListingPageButtontertiary.defaultProps = {
  allintegrationstext: "All Integrations",
  sixtext: "6",
};

export default ListingPageButtontertiary;
