import React from "react";
import HeaderSelect from "../HeaderSelect";
import { CategoriesData } from "../HeaderSelect/data";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeaderSearch = () => {
  return (
    <div className="flex max-h-[45px] items-center p-0 h-fit w-full max-w-[782px] rounded-[5px] border-2 border-line">
      <HeaderSelect
        triggerClass="pl-[25px] w-full max-w-[180px] text-14 pr-[22px] gap-[26px] py-[13px]"
        data={CategoriesData}
      />
      <Separator className="bg-line h-[15px]" orientation="vertical" />
      <Input
        type="text"
        placeholder="Search in 200+ products..."
        className="w-full h-full px-6 border-none focus-visible:outline-none text-13 placeholder:text-secondary-2"
      />
      <Button className="bg-primary h-[45px] w-[110px]  rounded-l-none text-white py-2 px-6 hover:bg-primary/90 ">
        Search
      </Button>
    </div>
  );
};

export default HeaderSearch;
