"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export interface BannerCarouselProps {
  id: number;
  img: StaticImageData;
  title: string;
}

const BannerCarousel = ({ data }: { data: BannerCarouselProps[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full max-w-full"
    >
      <CarouselContent className="h-fit min-h-[170px] lg:h-[409px] rounded-[5px]">
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <div className="w-full relative h-full rounded-[5px]">
              <Image
                alt="banner"
                className="w-full h-full rounded-[5px]"
                src={item.img}
              />
              <div className="absolute top-1/2 -translate-y-1/2 max-w-fit flex flex-col gap-3 lg:gap-[30px] z-[10] text-white left-[68px] lg:left-[191px]">
                <div className="flex flex-col gap-2 lg:gap-5">
                  <p className="text-yellow text-12">Gamepad console</p>
                  <p className="text-[20px] leading-5 lg:text-46 text-white">
                    Today’s Offer
                    <br />
                    Skin <span className="text-green-2">Gamepad</span> 2022
                  </p>
                </div>
                <Button className="rounded-full lg:w-[152px] w-[68px] h-[18px] lg:h-[45px] bg-white text-[7px] lg:text-12 hover:bg-white text-secondary-3">
                  Shop Now
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BannerCarousel;
