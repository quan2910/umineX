import Tick from "@/assets/icons/Tick";
import React from "react";

const InStock = () => {
  return (
    <div className="flex items-center mt-2.5 gap-1">
      <Tick className="text-green-1" />
      <p className="text-12 font-medium">
        <span className="text-green-1">In stock</span> <strong>82</strong>{" "}
        <span className="text-secondary-4">products</span>
      </p>
    </div>
  );
};

export default InStock;
