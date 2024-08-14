import Link from "next/link";
import React from "react";
import Image from "next/image";
import { InformationData, PaymentMethodsData, QuickLinksData } from "./data";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const InfoItem = ({
  title,
  children,
  className,
}: {
  title: string;
  children: JSX.Element;
  className?: string;
}) => (
  <div
    className={cn(
      "flex flex-col items-center lg:items-start gap-[22px] h-full",
      className
    )}
  >
    <h3 className="text-14 font-bold leading-normal uppercase">{title}</h3>
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t px-2 lg:px-0 pt-[56px] bg-white border-line">
      <div className="border-b border-line">
        <div className="flex flex-col lg:flex-row items-center max-w-[1410px] h-full mx-auto lg:items-start justify-between ">
          <div className="space-y-[21px] flex flex-col items-center lg:items-start pb-[59px]">
            <h2 className="text-14 font-bold leading-normal uppercase">
              About The Store
            </h2>
            <div className="space-y-[7px]">
              <p className="text-14 font-medium text-center lg:text-start leading-normal text-secondary-1">
                Got Question? Call us 24/7
              </p>
              <p className="text-30 leading-normal text-primary">
                +222-1800-2628
              </p>
            </div>
            <p className="text-14 font-medium text-center lg:text-start leading-normal text-secondary-1">
              268 St, South New York/NY 98944, United States <br />
              Customersupport@example.com <br /> Info@example.com
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 2xl:gap-[104px] xl:gap-[50px]">
            <InfoItem title="Information">
              <div className="flex flex-col items-center lg:items-start gap-3">
                {InformationData.map((item) => (
                  <Link
                    key={item.id}
                    href=""
                    className="text-14 font-medium leading-normal text-secondary-1 hover:text-secondary-3 hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </InfoItem>
            <InfoItem title="Quick Links">
              <div className="flex items-center lg:items-start flex-col gap-3">
                {QuickLinksData.map((item) => (
                  <Link
                    key={item.id}
                    href=""
                    className="text-14 font-medium leading-normal text-secondary-1 hover:text-secondary-3 hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </InfoItem>
            <InfoItem title="Sign up to Newsletter" className="max-w-[438px]">
              <div className="flex flex-col items-center lg:items-start space-y-6">
                <p className="text-secondary-1 text-14 font-medium leading-normal">
                  Join 20.000+ subscribers and get a new discount coupon on
                  every Saturday. Updates information on Sales and Offers.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-2.5">
                    <Input
                      placeholder="Your email address..."
                      className="max-w-[300px] px-5 py-[17px] h-[50px] rounded-full"
                    />
                    <Button className="w-[140px] text-white hover:bg-primary/80 h-[50px] uppercase rounded-full">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-secondary-1 text-14 font-medium leading-normal">
                    Subscribe for Uminex and get 20% off your first purchase.
                  </p>
                </div>
              </div>
            </InfoItem>
          </div>
        </div>
      </div>
      <div className="pt-[41px] max-w-[1410px] mx-auto pb-[42px] flex-col lg:flex-row flex items-center justify-between">
        <p className="text-14 font-semibold leading-normal">
          Copyright ©{" "}
          <Link href="" className="text-primary">
            Uminex
          </Link>{" "}
          all rights reserved. Powered by{" "}
          <Link href="" className="text-primary">
            Blueskytechco.
          </Link>
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-[19px]">
          <p className="text-14 font-semibold leading-normal">
            Payment Method:
          </p>
          <div className="flex max-w-full flex-wrap items-center justify-center gap-[5px]">
            {PaymentMethodsData.map((item) => (
              <Image key={item.id} alt="" src={item.src} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
