import React, { FC } from "react";
import { RateStyleConfig, rateStyleConfig } from "./style";
import clsx from "clsx";
import "rc-rate/assets/index.css";

const Dots = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) =>
  <div {...rest} className={clsx(
    "w-1em h-1em bg-current rounded-full",
    className
  )} />;

type MergedRateProps = {
  classNames?: RateStyleConfig;
  count?: number;
  value?: number;
}

const Rate: FC<MergedRateProps> = ({
  count = 5,
  classNames,
  value = 0
}) => {

  return <ul
    className={clsx(
      rateStyleConfig.wrapper,
      classNames?.wrapper,
    )}
  >
    {Array.from(Array(5)).map((_, i) =>
      <Dots key={i} className={clsx(
        i < value ? "text-current" : "text-gray-400"
      )} />
    )}
  </ul>
}


export default Rate;
