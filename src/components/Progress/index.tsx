"use client";

import * as React from "react";
import { Progress } from "../ui/progress";

export function ProgressComponent({
  total,
  amount,
}: {
  total: number;
  amount: number;
}) {
  const [progress, setProgress] = React.useState(0);
  const percent = Math.ceil((amount / total) * 100);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percent), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-full" />;
}
