import { clsx } from "clsx";
import React, { FC, PropsWithChildren, ReactNode } from "react";

interface TimelineProps {
  head?: ReactNode;
  children: React.ReactElement<TimelineItemProps> | React.ReactElement<TimelineItemProps>[];
}

export const Timeline: FC<TimelineProps> = ({
  head,
  children,
}) => {

  return (
    <>
      {head &&
        <ul>
          <li className="group relative pl-1 border-gray-300 pb-2">
            <div className={clsx(
              "absolute left-1 -translate-x-1/2px",
              "h-full w-0 z-10",
              "border-l border-gray-300",
            )} />
            <div className={clsx(
              "absolute left-1 top-1/2 -translate-x-1/2 -translate-y-2",
              "w-2 h-2 bg-gray-300 rounded z-10",
            )} />
            <div className={clsx(
              "pl-3 py-2 pr-2 -translate-x-1/2px",
              "border-b border-gray-300",
              "bg-gray-200 z-0"
            )}>
              {head}
            </div>
          </li>
        </ul>
      }
      <ul className="" >
        {children}
      </ul>
    </>
  );
};

interface TimelineItemProps extends PropsWithChildren { }

export const TimelineItem: FC<TimelineItemProps> = ({ children }) => {
  return <li className="group relative pl-4 border-gray-300 mr-2">
    <div className={clsx(
      "absolute left-1 -translate-x-1/2px",
      "h-full w-0",
      "border-l border-gray-300",
      "group-last:h-1/2 group-last-of-type:w-3 group-last-of-type:border-b group-last-of-type:rounded-bl",
    )} />
    <div className={clsx(
      "absolute left-1 top-1/2 -translate-x-1/2 -translate-y-1/2",
      "w-2 h-2 bg-gray-300 rounded",
      "group-last-of-type:hidden",
    )} />
    <div className={clsx(
      "px-3 py-2 bg-white border-x border-t border-gray-300 -translate-x-1/2px",
      "group-first-of-type:rounded-t group-last-of-type:rounded-b group-last-of-type:border-b"
    )}>
      {children}
    </div>
  </li>
}
