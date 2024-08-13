import React from "react";
import BannerCarousel from "./Comps/BannerCarousel";
import BannerItem from "./Comps/BannerItem";

const Banner = () => {
  return (
    <div className="flex flex-col w-full gap-[5px]">
      <BannerCarousel />
      <BannerItem />
    </div>
  );
};

export default Banner;
