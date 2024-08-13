import Image from "next/image";
import React from "react";
import logo from "@/Images/Logo.svg";
import search from "@/Images/Search.svg";
import CartIcon from "../Comps/CartIcon";
import SideBar from "@/components/SideBar";

const HeaderMobile = () => {
  return (
    <div className="flex lg:hidden p-4 bg-white fixed top-0 z-[40] w-full justify-between shadow-md items-center">
      <SideBar />
      <Image alt="logo" src={logo} width={102} height={31} />
      <div className="flex items-center gap-2">
        <CartIcon className="size-6" />
        <Image alt="search" src={search} width={24} height={24} />
      </div>
    </div>
  );
};

export default HeaderMobile;
