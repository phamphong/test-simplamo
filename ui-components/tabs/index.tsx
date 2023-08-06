import React, { FC, ReactNode } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import clsx from "clsx";
import { TabsStyleConfig } from "./style";

interface Tab {
  title: string;
  value: string;
  content?: ReactNode;
}

interface TabClassNames {
  list?: clsx.ClassValue;
  trigger?: clsx.ClassValue;
  title?: clsx.ClassValue;
  inkBar?: clsx.ClassValue;
  content?: clsx.ClassValue;
}

interface TabsProps {
  tabs: Tab[];
  value?: string;
  defaultValue?: string;
  onTabChange?: (value: string) => void;
  classNames?: TabClassNames;
}

export const Tabs: FC<TabsProps> = ({
  tabs,
  value,
  defaultValue,
  classNames,
  onTabChange
}) => {

  return (
    <TabsPrimitive.Root value={value}
      defaultValue={defaultValue ?? tabs[0].value}
      onValueChange={onTabChange}
    >
      <TabsPrimitive.List
        className={clsx(
          TabsStyleConfig.default.tabList,
          classNames?.list,
        )}
      >
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={clsx(
              TabsStyleConfig.default.tabTrigger,
              classNames?.trigger,
            )}
          >
            <span
              className={clsx(
                TabsStyleConfig.default.tabTitle,
                classNames?.title,
              )}
            >
              {title}
            </span>
            <div className={clsx(
              TabsStyleConfig.default.tabInkBar,
              classNames?.inkBar,
            )} />
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value, content }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={clsx(
            TabsStyleConfig.default.tabContent,
            classNames?.content,
          )}
        >
          <span>
            {content}
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};
