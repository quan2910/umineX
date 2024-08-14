import React from "react";
import BannerCarousel from "./Comps/BannerCarousel";
import BannerItem from "./Comps/BannerItem";
import { BannerData } from "./Comps/BannerCarousel/data";
import { BannerItemData } from "./Comps/BannerItem/data";

const Banner = () => {
  return (
    <div className="flex flex-col w-full gap-[5px]">
      <BannerCarousel data={BannerData} />
      <div className="flex flex-col px-2 sm:px-0 sm:grid grid-cols-3 gap-[5px]">
        {BannerItemData.map((item) => (
          <BannerItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
