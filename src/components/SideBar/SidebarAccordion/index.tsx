import { HeaderSelectProps } from "@/components/Header/HeaderSelect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";

const SidebarAccordion = ({ data }: { data: HeaderSelectProps[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={data[0].value}>
        <AccordionTrigger className="p-0 text-14">
          {data[0].title}
        </AccordionTrigger>
        {data.map((item) => (
          <AccordionContent asChild key={item.id}>
            <Link href="">{item.title}</Link>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarAccordion;
