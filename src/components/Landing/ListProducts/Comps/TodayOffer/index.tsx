import React from "react";
import Image, { StaticImageData } from "next/image";
import tablet from "@/Images/ListProductImage/tablet.png";
import star from "@/Images/FiveStar.svg";
import Tick from "@/assets/icons/Tick";
import gift from "@/Images/Gift.svg";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface ListProductItemProps {
  tag?: "green" | "red";
  isHeader?: boolean;
  priceColor?: "blue" | "red";
  isGift?: boolean;
  containerClass?: string;
  isSale?: boolean;
  img: StaticImageData;
  title: string;
  review: string;
  price: number;
  children: React.ReactNode;
}

const TodayOffer: React.FC<ListProductItemProps> = ({
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
}) => {
  return (
    <div
      className={cn(
        "flex flex-col group rounded-[5px] bg-white w-full h-fit p-5 gap-[16px]",
        containerClass
      )}
    >
      {isHeader && (
        <div>
          <h2 className="mb-[11px] text-16">Today’s Offer</h2>
          <Separator className="w-full bg-line mb-5" />
        </div>
      )}
      <div className="w-full h-full relative">
        <div className="w-full h-full">
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
      <h2 className="text-14 text-secondary-3">
        Apple iPhone 12 Pro Max 128GB - Unlocked
      </h2>
      <div>
        <div className="flex gap-[4.7px] items-center">
          <Image alt="star" src={star} className="" />
          <p className="text-12 text-secondary-4 font-medium">(68)</p>
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
          <p className="text-14 text-secondary-4 font-medium line-through">
            $12.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodayOffer;
