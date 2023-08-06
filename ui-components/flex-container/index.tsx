import clsx from "clsx";
import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface NoWrapProps {
  nowrap?: boolean;
}

const FlexGroupBetween: FC<HTMLAttributes<HTMLDivElement> & PropsWithChildren & NoWrapProps> = ({
  children, className, nowrap = false
}) => {
  return (
    <div className={clsx(
      'flex gap-2 justify-between items-center',
      nowrap ? "flex-nowrap" : "flex-wrap",
      className
    )}>
      {children}
    </div>
  )
}

const FlexGroup: FC<HTMLAttributes<HTMLDivElement> & PropsWithChildren & NoWrapProps> = ({
  children, className, nowrap = false
}) => {
  return (
    <div className={clsx(
      'flex gap-2 items-center',
      nowrap ? "flex-nowrap" : "flex-wrap",
      className
    )}>
      {children}
    </div>
  )
}

const SpanGroupBetween: FC<HTMLAttributes<HTMLDivElement> & PropsWithChildren & NoWrapProps> = ({
  children, className, nowrap = false
}) => {
  return (
    <span className={clsx(
      'flex gap-2 justify-between items-center',
      nowrap ? "flex-nowrap" : "flex-wrap",
      className
    )}>
      {children}
    </span>
  )
}

const SpanGroup: FC<HTMLAttributes<HTMLDivElement> & PropsWithChildren & NoWrapProps> = ({
  children, className, nowrap = false
}) => {
  return (
    <span className={clsx(
      'flex gap-2 items-center',
      nowrap ? "flex-nowrap" : "flex-wrap",
      className
    )}>
      {children}
    </span>
  )
}

interface NoWrapProps extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> {
  nowrap?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
}


const FlexRow: FC<NoWrapProps> = ({
  prefix, suffix,
  children, className,
  nowrap = false,
}) => {
  return (
    <FlexContainer.FlexGroupBetween className={clsx("w-full", className)}
      nowrap={nowrap}
    >
      <FlexContainer.FlexGroup
        nowrap={nowrap} className={clsx(
          nowrap && "flex-1 min-w-0"
        )}
      >
        <span className={clsx(
          "flex",
          nowrap && "flex-none"
        )}>
          {prefix}
        </span>
        <span className={clsx(
          "flex",
          nowrap && "flex-1 min-w-0"
        )}>
          {children}
        </span>
      </FlexContainer.FlexGroup>
      <FlexContainer.FlexGroup
        nowrap={nowrap} className={clsx(
          "flex",
          nowrap && "flex-none min-w-0"
        )}
      >
        {suffix}
      </FlexContainer.FlexGroup>
    </FlexContainer.FlexGroupBetween>
  )
}

export const FlexContainer = {
  FlexRow,
  FlexGroup,
  FlexGroupBetween,
  SpanGroup,
  SpanGroupBetween,
}

export default FlexContainer;
