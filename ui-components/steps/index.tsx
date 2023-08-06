import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React, { FC, ReactNode } from "react";

interface AccordionProps {
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[],
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const Accordion: FC<AccordionProps> = ({
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
      defaultValue={defaultValue ?? React.Children.map(children, e => e)[0].props.value}
      className={clsx(
        "w-full border border-gray-300 rounded"
      )}
    >
      {React.Children.map(children, ({ props: { title, actions, content, value } }, i) => (
        <AccordionPrimitive.Item
          key={`item-${i}`}
          value={value}
          className="rounded w-full border-b last:border-0 border-dashed border-gray-300"
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
                "inline-flex w-full items-center justify-between bg-white px-2 py-4 text-left"
              )}
            >
              <div className="flex gap-2">
                <TriangleRightIcon
                  className={clsx(
                    "ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out duration-300",
                    "group-radix-state-open:rotate-90"
                  )}
                />
                <span className="text-sm font-medium text-gray-900">
                  {title}
                </span>
              </div>
              <div>
                {actions}
              </div>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full bg-gray-100 px-4 pb-3 shadow-inner">
            {content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

interface AccordionItemProps {
  title: string;
  value: string;
  actions?: React.ReactNode[];
  content: React.ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = () => {
  return <></>
}
