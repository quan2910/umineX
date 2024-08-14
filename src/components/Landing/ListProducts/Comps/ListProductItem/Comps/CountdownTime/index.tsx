import React from "react";
import Image from "next/image";
import colon from "@/Images/Colon.svg";
import { ProgressComponent } from "@/components/Progress";
const CountdownTime = () => {
  const total = 896;
  const amount = 620;

  return (
    <div className="flex flex-col gap-5 mt-[18px]">
      <div className="flex flex-col gap-[9px]">
        <p className="text-14 text-secondary-1">Hurry up! Offer ends in:</p>
        <div className="flex gap-[7px] items-center">
          <div className="flex items-center justify-center text-14 w-[45px] h-[50px] rounded-[3px] text-white bg-red">
            826
          </div>
          <Image alt="colon" src={colon} />
          <div className="flex items-center justify-center text-14 w-[45px] h-[50px] rounded-[3px] text-white bg-red">
            29
          </div>
          <Image alt="colon" src={colon} />
          <div className="flex items-center justify-center text-14 w-[45px] h-[50px] rounded-[3px] text-white bg-red">
            20
          </div>
          <Image alt="colon" src={colon} />
          <div className="flex items-center justify-center text-14 w-[45px] h-[50px] rounded-[3px] text-white bg-red">
            08
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <ProgressComponent total={total} amount={amount} />
        <p className="text-12 text-secondary-1">
          Sold:{" "}
          <span className="text-secondary-3">
            {amount}/{total}
          </span>{" "}
          products
        </p>
      </div>
    </div>
  );
};

export default CountdownTime;
