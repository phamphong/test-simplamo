import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import React, { PropsWithChildren, ReactNode } from "react";
import { tooltipStyleConfig } from "./style";

interface TooltipProps extends PropsWithChildren {
  title?: ReactNode;
}

export const Tooltip = ({ children, title }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={clsx(
            tooltipStyleConfig.titleWrapper
          )}
        >
          <TooltipPrimitive.Arrow className={tooltipStyleConfig.arrow} />
          <span className={tooltipStyleConfig.title}>
            {title}
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
