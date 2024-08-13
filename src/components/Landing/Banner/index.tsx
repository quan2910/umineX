import React from "react";
import BannerCarousel from "./Comps/BannerCarousel";
import BannerItem from "./Comps/BannerItem";
import { BannerData } from "./Comps/BannerCarousel/data";

const Banner = () => {
  return (
    <div className="flex flex-col w-full gap-[5px]">
      <BannerCarousel data={BannerData} />
      <BannerItem />
    </div>
  );
};

export default Banner;
