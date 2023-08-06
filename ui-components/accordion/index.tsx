import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React, { FC, PropsWithChildren, ReactNode, useState } from "react";
import FlexContainer from "../flex-container";

interface AccordionProps {
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[],
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Accordion: FC<AccordionProps> = ({
  children,
  value,
  defaultValue,
  onChange,
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
        "w-full border border-gray-300 rounded"
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
}

export const AccordionItem: FC<AccordionItemProps> = ({ value, title, actions, content, children }) => {
  return <AccordionPrimitive.Item
    value={value}
    className="rounded w-full overflow-hidden border-b last:border-0 border-dashed border-gray-300"
  >
    <AccordionPrimitive.Header className="bg-white px-4 py-4">
      <FlexContainer.FlexGroupBetween>
        <AccordionPrimitive.Trigger
          className={clsx(
            "text-left group radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
          )}
        >
          <FlexContainer.SpanGroup nowrap>
            <TriangleRightIcon
              className={clsx(
                "h-5 w-5 shrink-0 text-gray-700 ease-in-out duration-300",
                "group-radix-state-open:rotate-90"
              )}
            />
            <span className="text-sm font-medium text-gray-900">
              {title}
            </span>
          </FlexContainer.SpanGroup>
        </AccordionPrimitive.Trigger>
        <FlexContainer.FlexGroup>
          {actions}
        </FlexContainer.FlexGroup>
      </FlexContainer.FlexGroupBetween>
    </AccordionPrimitive.Header>
    <AccordionPrimitive.Content className="bg-gray-100 pl-4 pb-3 shadow-inner">
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
