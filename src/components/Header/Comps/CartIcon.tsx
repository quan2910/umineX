import React from "react";
import cart from "@/Images/Cart.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CartIcon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex", className)}>
      <Image src={cart} alt="cart" />
      <div className="rounded-full absolute -top-[7px] -right-[6px] bg-red size-[18px] flex items-center justify-center text-white text-10">
        2
      </div>
    </div>
  );
};

export default CartIcon;
