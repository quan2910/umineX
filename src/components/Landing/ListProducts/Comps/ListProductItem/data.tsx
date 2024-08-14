import tablet from "@/Images/ListProductImage/tablet.png";
import InStock from "./Comps/InStock";
import mac from "@/Images/ListProductImage/mac.png";
import greenPhone from "@/Images/ListProductImage/greenphone.png";
import blackPhone from "@/Images/ListProductImage/blackphone.png";
import watch from "@/Images/ListProductImage/applewatch.png";
import ip from "@/Images/ListProductImage/iph.png";
import ipGold from "@/Images/ListProductImage/iphonegold.png";
import bluePhone from "@/Images/ListProductImage/bluephone.png";
import LeftStock from "./Comps/LeftStock";
import CountdownTime from "./Comps/CountdownTime";

export const ListProductData = [
  {
    id: 1,
    tag: "red",
    priceColor: "red",
    isGift: true,
    isHeader: true,
    img: blackPhone,
    containerClass: "border-2 border-red px-10 py-[35px]",
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    price: 128.0,
    review: "26 reviews",
    children: <CountdownTime />,
  },
  {
    id: 2,
    tag: "red",
    priceColor: "red",
    img: tablet,
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    price: 128.0,
    review: "(68)",
    children: <InStock />,
  },
  {
    id: 3,
    priceColor: "blue",
    isSale: false,
    img: mac,
    title: "Apple Watch Aluminum Case Pride Edition",
    price: 1028.0,
    review: "(68)",
    children: <LeftStock />,
  },
  {
    id: 4,
    priceColor: "red",
    img: greenPhone,
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    price: 128.0,
    review: "(68)",
    children: <InStock />,
  },
  {
    id: 5,
    tag: "green",
    priceColor: "blue",
    img: tablet,
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    price: 1028.0,
    review: "(68)",
    children: <LeftStock />,
  },
  {
    id: 6,
    priceColor: "blue",
    img: watch,
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    price: 289.0,
    review: "(68)",
    children: <LeftStock />,
  },
  {
    id: 7,
    priceColor: "red",
    tag: "red",
    img: ip,
    title: "Apple Watch Aluminum Case Pride Edition",
    price: 128.0,
    review: "(68)",
    children: <InStock />,
  },
  {
    id: 8,
    priceColor: "red",
    tag: "red",
    img: ipGold,
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    price: 128.0,
    review: "(68)",
    children: <InStock />,
  },
  {
    id: 9,
    priceColor: "blue",
    img: bluePhone,
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    price: 1028.0,
    review: "(68)",
    children: <LeftStock />,
  },
];
