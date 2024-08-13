import React from "react";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import logo from "@/Images/Logo.svg";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import user from "@/Images/User.svg";
import heart from "@/Images/Heart.svg";
import { Button } from "../ui/button";
import HeaderNavigation from "./HeaderNavigation";
import HeaderMobile from "./HeaderMobile";
import CartIcon from "./Comps/CartIcon";

const Header = () => {
  return (
    <>
      <header className="fixed lg:block hidden shadow-md bg-white w-full top-0 z-[40]">
        <HeaderTop />
        <div className="py-5 gap-4 2xl:gap-0 flex 2xl:px-0 items-center max-w-[1410px] mx-auto px-4 border-y justify-between border-line">
          <Link href="/" className="min-w-[142px]">
            <Image alt="logo" src={logo} />
          </Link>
          <HeaderSearch />
          <div className="flex min-w-[270px] items-center">
            <Button
              variant="ghost"
              className="flex p-0 items-center gap-[10px] mr-[26px]"
            >
              <Image src={user} alt="user" />
              <div className="flex flex-col items-start justify-start">
                <p className="text-11 text-secondary-1">Login</p>
                <p className="text-14">Account</p>
              </div>
            </Button>
            <Button variant="ghost" className="relative p-0 mr-[35px]">
              <Image src={heart} alt="heart" />
              <div className="rounded-full absolute top-[0px] -right-[6px] bg-red size-[18px] flex items-center justify-center text-white text-10">
                2
              </div>
            </Button>
            <Button
              variant="ghost"
              className="flex items-center p-0 gap-[10px]"
            >
              <CartIcon />
              <div>
                <p className="text-11 text-secondary-1">Your Cart</p>
                <p className="text-14">$280.00</p>
              </div>
            </Button>
          </div>
        </div>
        <HeaderNavigation />
      </header>
      <HeaderMobile />
    </>
  );
};

export default Header;
