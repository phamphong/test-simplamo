import clsx from "clsx";

export type RateStyleConfig = {
  wrapper?: clsx.ClassValue;
  icon?: clsx.ClassValue;
}

export const rateStyleConfig: RateStyleConfig = {
  wrapper: "!flex items-center gap-0.5",
  icon: "text-3xs leading-4 -mr-2",
}
