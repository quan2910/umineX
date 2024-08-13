import React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import hamburgerIcon from "@/Images/Hamburger.svg";
import logo from "@/Images/Logo.svg";
import SidebarAccordion from "./SidebarAccordion";
import {
  BlogData,
  HomeData,
  PageData,
  ProductData,
  ShopData,
} from "../Header/HeaderSelect/data";
import Link from "next/link";

const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0 h-fit">
          <Image alt="hamburger" src={hamburgerIcon} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white w-[80%] p-0">
        <div className="p-4 bg-bg">
          <Image alt="logo" width={102} height={31} src={logo} />
        </div>
        <div className="p-4 flex flex-col gap-[30px]">
          <SidebarAccordion data={HomeData} />
          <SidebarAccordion data={ShopData} />
          <SidebarAccordion data={ProductData} />
          <SidebarAccordion data={PageData} />
          <SidebarAccordion data={BlogData} />
          <Button
            variant="ghost"
            asChild
            className="p-0 h-fit w-full font-medium justify-start text-14"
          >
            <Link href="">Contact Us</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="p-0 h-fit w-full font-medium justify-start text-14 text-red"
          >
            <Link href="">Buy Uminex!</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
