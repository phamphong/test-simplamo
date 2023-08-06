import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import FlexContainer from "../flex-container";
import { AccordionItemClassNames, AccordionStyleConfig } from "./style";

interface AccordionProps {
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[],
  value?: string;
  defaultValue?: string;
  className?: clsx.ClassValue;
  onChange?: (value: string) => void;
}

const Accordion: FC<AccordionProps> = ({
  children,
  value,
  defaultValue,
  onChange,
  className,
  ...rest
}) => {

  return (
    <AccordionPrimitive.Root
      {...rest}
      type="single"
      value={value}
      onValueChange={onChange}
      defaultValue={defaultValue ?? React.Children.map(children, e => e).at(0)?.props.value}
      className={clsx(
        AccordionStyleConfig.wrapper,
        className
      )}
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

interface AccordionItemProps extends PropsWithChildren {
  title: ReactNode;
  value: string;
  actions?: React.ReactNode[];
  content?: React.ReactNode;
  classNames?: AccordionItemClassNames;
}

export const AccordionItem: FC<AccordionItemProps> = ({ value, title, actions, content, children, classNames }) => {
  return <AccordionPrimitive.Item
    value={value}
    className={clsx(
      AccordionStyleConfig.item.wrapper,
      classNames?.wrapper
    )}
  >
    <AccordionPrimitive.Header className={clsx(
      AccordionStyleConfig.item.header,
      classNames?.header
    )}>
      <FlexContainer.FlexGroupBetween>
        <AccordionPrimitive.Trigger
          className={clsx(
            AccordionStyleConfig.item.trigger,
            classNames?.trigger
          )}
        >
          <FlexContainer.SpanGroup nowrap>
            <TriangleRightIcon
              className={clsx(
                AccordionStyleConfig.item.icon,
                classNames?.icon
              )}
            />
            <span className={clsx(
              AccordionStyleConfig.item.title,
              classNames?.title
            )}>
              {title}
            </span>
          </FlexContainer.SpanGroup>
        </AccordionPrimitive.Trigger>
        <FlexContainer.FlexGroup>
          {actions}
        </FlexContainer.FlexGroup>
      </FlexContainer.FlexGroupBetween>
    </AccordionPrimitive.Header>
    <AccordionPrimitive.Content className={clsx(
      AccordionStyleConfig.item.content,
      classNames?.content
    )}>
      {children ?? content}
    </AccordionPrimitive.Content>
  </AccordionPrimitive.Item>
}

interface SingleCollapseProps extends PropsWithChildren {
  title: ReactNode;
  actions?: React.ReactNode[];
  content?: React.ReactNode;
  openDefault?: boolean;
}

export const SingleCollapse: FC<SingleCollapseProps> = ({
  children,
  title,
  actions,
  openDefault = true,
}) => {

  return <AccordionPrimitive.Root
    defaultValue={openDefault ? ["item-1"] : undefined}
    type="multiple"
    className={clsx(
      "w-full rounded"
    )}
  >
    <AccordionPrimitive.Item
      key="item-1"
      value="item-1"
      className="rounded w-full overflow-hidden"

    >
      <AccordionPrimitive.Header >
        <FlexContainer.FlexGroupBetween nowrap>
          <AccordionPrimitive.Trigger
            className={clsx(
              "text-left group radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
            )}
          >
            <FlexContainer.SpanGroup nowrap>
              <TriangleRightIcon
                className={clsx(
                  "group-radix-state-open:rotate-90"
                )}
              />
              {title}
            </FlexContainer.SpanGroup>
          </AccordionPrimitive.Trigger>
          <FlexContainer.FlexGroup nowrap>
            {actions}
          </FlexContainer.FlexGroup>
        </FlexContainer.FlexGroupBetween>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="pt-2">
        {children}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  </AccordionPrimitive.Root>
}

export { Accordion };
