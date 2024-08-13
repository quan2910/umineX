import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import HeaderSelect from "../HeaderSelect";
import { LanguageData, MoneyData } from "../HeaderSelect/data";

const HeaderTop = () => {
  return (
    <div className="max-w-[1410px] mx-auto px-4 2xl:px-0 py-[15px] flex justify-between">
      <p className="text-13 text-secondary-1">
        You are a student and students get 20% discount.{" "}
        <Link className="text-secondary-3 font-semibold underline" href="#">
          Learn More
        </Link>
      </p>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <Button variant="ghost" className="p-0" size="mini">
            Store Locator
          </Button>
          <Button variant="ghost" className="p-0" size="mini">
            Order Tracking
          </Button>
          <Button variant="ghost" className="p-0" size="mini">
            FAQs
          </Button>
        </div>
        <Separator className="bg-line h-[14px]" orientation="vertical" />
        <div className="flex items-center gap-5">
          <HeaderSelect data={LanguageData} />
          <HeaderSelect data={MoneyData} />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
