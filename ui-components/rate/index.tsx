import React, { FC } from "react";
import { RateStyleConfig, rateStyleConfig } from "./style";
import clsx from "clsx";
import RCRate from 'rc-rate';
import { RateProps } from "rc-rate/lib/Rate";
import "rc-rate/assets/index.css";

const Dots = () => <div className="w-1em h-1em bg-current rounded-full" />;

type MergedRateProps = {
  classNames?: RateStyleConfig
} & RateProps

const Rate: FC<MergedRateProps> = ({
  allowHalf = false,
  count = 5,
  character = Dots,
  classNames,
  ...rest }) => {

  return <RCRate
    {...rest}
    count={count}
    allowHalf={allowHalf}
    character={character}
    className={clsx(
      rateStyleConfig.wrapper,
      classNames?.wrapper
    )}
    characterRender={(origin, props) => {
      return <span className={clsx(
        rateStyleConfig.icon,
        classNames?.icon
      )}>
        {React.cloneElement(origin, {
          ...props,
        })}
      </span>
    }}
  />
}


export default Rate;
