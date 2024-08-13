import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
interface HeaderSelectProps {
  id: number;
  value: string;
  title: string;
}
const HeaderSelect = ({
  data,
  triggerClass,
}: {
  data: HeaderSelectProps[];
  triggerClass?: string;
}) => {
  return (
    <Select defaultValue={data[0].value}>
      <SelectTrigger
        className={cn("w-fit border-none h-fit p-0 text-13", triggerClass)}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="center" className="w-fit bg-white">
        <SelectGroup>
          {data.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default HeaderSelect;
