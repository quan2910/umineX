import React from "react";
import Image, { StaticImageData } from "next/image";
import tablet from "@/Images/ListProductImage/tablet.png";
import star from "@/Images/FiveStar.svg";
import Tick from "@/assets/icons/Tick";
import gift from "@/Images/Gift.svg";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface ListProductItemProps {
  tag?: string;
  isHeader?: boolean;
  priceColor?: string;
  isGift?: boolean;
  containerClass?: string;
  isSale?: boolean;
  img: StaticImageData;
  title: string;
  review: string;
  price: number;
  children: React.ReactNode;
}

const ListProductItem = ({ data }: { data: ListProductItemProps }) => {
  const {
    tag,
    isHeader = false,
    priceColor = "blue",
    isGift = false,
    containerClass,
    isSale = true,
    img,
    title,
    price,
    review,
    children,
  } = data;
  return (
    <div
      className={cn(
        "flex flex-col group rounded-[5px] h-full bg-white w-full p-5 gap-[16px]",
        containerClass
      )}
    >
      {isHeader && (
        <div>
          <h2 className="mb-[11px] text-16 max-h-5">Today’s Offer</h2>
          <Separator className="w-full bg-line mb-1" />
        </div>
      )}
      <div className="w-full h-full relative">
        <div className="w-full h-full overflow-hidden">
          <Image
            alt="img"
            src={img}
            className="w-full group-hover:scale-110 duration-300"
          />
        </div>
        <div
          className={cn(
            "absolute top-0 left-0 rounded-sm py-1 px-[9px] text-white",
            tag === "green" && "bg-green-1",
            tag === "red" && "bg-red"
          )}
        >
          {tag === "green" && "NEW"}
          {tag === "red" && "-20%"}
        </div>
        {isGift && (
          <Image alt="gift" src={gift} className="absolute top-0 right-0" />
        )}
      </div>
      <h2 className="text-14 text-secondary-3">{title}</h2>
      <div>
        <div className="flex gap-[4.7px] items-center">
          <Image alt="star" src={star} className="" />
          <p className="text-12 text-secondary-4 font-medium">{review}</p>
        </div>
        <div className="flex gap-1 mt-1 items-end">
          <p
            className={cn(
              "text-18",
              priceColor === "red" && "text-red",
              priceColor === "blue" && "text-blue"
            )}
          >
            ${price}
          </p>
          {isSale && (
            <p className="text-14 text-secondary-4 font-medium line-through">
              $12.00
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
    // </div>
  );
};

export default ListProductItem;
