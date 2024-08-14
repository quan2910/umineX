import React from "react";
import Image, { StaticImageData } from "next/image";

interface BannerItemProps {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
}

const BannerItem = ({ data }: { data: BannerItemProps }) => {
  const { img, title, description } = data;

  return (
    <div className="sm:max-h-[200px] w-full relative">
      <Image
        alt="bg"
        src={img}
        className="object-cover sm:max-h-[200px] max-h-[100px] w-full"
      />
      <div className="absolute z-[10] lg:top-[35px] flex flex-col gap-2 xl:gap-[26px] lg:left-[30px] top-4 left-4">
        <p className="text-18" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-14 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default BannerItem;
