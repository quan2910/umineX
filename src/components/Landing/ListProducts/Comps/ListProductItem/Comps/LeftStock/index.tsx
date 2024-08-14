import Tick from "@/assets/icons/Tick";
import React from "react";

const LeftStock = () => {
  return (
    <div className="flex items-center text-red mt-2.5 gap-1">
      <Tick />
      <p className="text-12 font-medium">Only 2 left in stock</p>
    </div>
  );
};

export default LeftStock;
