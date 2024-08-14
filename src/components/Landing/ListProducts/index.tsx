import React from "react";
import ListProductItem from "./Comps/ListProductItem";
import { ListProductData } from "./Comps/ListProductItem/data";

const ListProduct = () => {
  const listLeftProduct = ListProductData.slice(1, 5);
  const listRightProduct = ListProductData.slice(5, 9);

  return (
    <div className="lg:grid px-2 lg:px-0 flex flex-col grid-cols-3 gap-[5px]">
      <div className="grid grid-cols-2 gap-[5px]">
        {listLeftProduct.map((item) => (
          <ListProductItem key={item.id} data={item} />
        ))}
      </div>
      <ListProductItem data={ListProductData[0]} />
      <div className="grid grid-cols-2 gap-[5px]">
        {listRightProduct.map((item) => (
          <ListProductItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
