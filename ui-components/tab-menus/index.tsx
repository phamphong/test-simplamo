import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import clsx from "clsx";
import { TabMenuStyleConfig } from "./style";

interface TabMenusProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactElement<TabMenuItemProps> | React.ReactElement<TabMenuItemProps>[],
}

export const TabMenus: FC<TabMenusProps> = ({
  value,
  defaultValue,
  onChange,
  children
}) => {

  const [val, setVal] = useState(defaultValue ?? React.Children.map(children, e => e)[0]?.props.value);

  useEffect(() => {
    if (value) {
      setVal(value);
    }
  }, [value])

  const onTabClick = (val: string) => {
    setVal(val);
    if (typeof onChange === "function") {
      onChange(val);
    }
  }

  let kids = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      currentValue: val,
      onClick: () => onTabClick(child.props.value),
    })
  })

  return (
    <div role="menubar" className={clsx(
      TabMenuStyleConfig.default.tabList,
    )}>
      {kids}
    </div>
  );
};

interface TabMenuItemProps {
  value: string;
  currentValue?: string;
  onClick?: (value: string) => void;
  className?: clsx.ClassValue,
  children: React.ReactElement,
}

export const TabMenuItem: FC<TabMenuItemProps> = ({
  value,
  currentValue,
  children,
  className,
}) => {
  return (
    <button role="menuitem"
      className={clsx(
        value === currentValue && TabMenuStyleConfig.default.tabActive,
        TabMenuStyleConfig.default.tabTitle,
        className,
      )}>
      {React.Children.map(children, (child =>
        React.cloneElement(child, {
          className: TabMenuStyleConfig.default.tabLinkBefore
        })
      ))}
    </button>
  );
};
