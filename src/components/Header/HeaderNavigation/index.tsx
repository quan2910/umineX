import React from "react";
import HeaderSelect from "../HeaderSelect";
import {
  LanguageData,
  HomeData,
  ShopData,
  ProductData,
  PageData,
  BlogData,
} from "../HeaderSelect/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import sale from "@/Images/Sale.svg";

const HeaderNavigation = () => {
  return (
    <div className="max-w-[1410px] mx-auto px-4 2xl:px-0 py-[15px] flex items-center justify-between">
      <div className="flex gap-[30px] items-center">
        <HeaderSelect triggerClass="text-14" data={HomeData} />
        <HeaderSelect triggerClass="text-14" data={ShopData} />
        <HeaderSelect triggerClass="text-14" data={ProductData} />
        <HeaderSelect triggerClass="text-14" data={PageData} />
        <HeaderSelect triggerClass="text-14" data={BlogData} />
        <Button variant="ghost" size="mini" className="p-0 text-14">
          Contact Us
        </Button>
        <Button variant="ghost" size="mini" className="p-0 text-14 text-red">
          Buy Uminex!
        </Button>
      </div>
      <div className="flex gap-[9px] items-center">
        <Image alt="sale" src={sale} />
        <p className="text-14">Sale $20 Off Your First Order.</p>
      </div>
    </div>
  );
};

export default HeaderNavigation;
