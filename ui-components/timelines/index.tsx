import { clsx } from "clsx";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { TimelineItemClasses, TimelineStyleConfig, TimelineWrapperClasses } from "./style";

interface TimelineProps {
  head?: ReactNode;
  children: React.ReactElement<TimelineItemProps> | React.ReactElement<TimelineItemProps>[];
  classNames?: TimelineWrapperClasses;
}

export const Timeline: FC<TimelineProps> = ({
  head,
  children,
  classNames
}) => {

  return (
    <>
      {head &&
        <ul>
          <li className={clsx(
            TimelineStyleConfig.wrapper.headWrapper,
            classNames?.headWrapper,
          )}>
            <div className={clsx(
              TimelineStyleConfig.wrapper.headLine,
              classNames?.headLine,
            )} />
            <div className={clsx(
              TimelineStyleConfig.wrapper.headDot,
              classNames?.headDot,
            )} />
            <div className={clsx(
              TimelineStyleConfig.wrapper.head,
              classNames?.head,
            )}>
              {head}
            </div>
          </li>
        </ul>
      }
      <ul className={clsx(
        TimelineStyleConfig.wrapper.content,
        classNames?.content,
      )} >
        {children}
      </ul>
    </>
  );
};

interface TimelineItemProps extends PropsWithChildren {
  classNames?: TimelineItemClasses;
}

export const TimelineItem: FC<TimelineItemProps> = ({ children, classNames }) => {
  return <li className={clsx(
    TimelineStyleConfig.item.wrapper,
    classNames?.wrapper
  )}>
    <div className={clsx(
      TimelineStyleConfig.item.line,
      classNames?.line
    )} />
    <div className={clsx(
      TimelineStyleConfig.item.dot,
      classNames?.dot
    )} />
    <div className={clsx(
      TimelineStyleConfig.item.content,
      classNames?.content
    )}>
      {children}
    </div>
  </li>
}
