import clsx from "clsx"
import { DefaultConfig, SizeConfig, SolidTypeConfig, TypeConfig } from "../common-props"

type BadgeStyleConfig = {
  bordered: clsx.ClassValue;
} & TypeConfig & SolidTypeConfig
  & SizeConfig
  & DefaultConfig

export const badgeStyleConfig: BadgeStyleConfig = {
  type: {
    primary: "ring-primary text-primary",
    error: "ring-error text-error",
    success: "ring-success text-success",
    info: "ring-info text-info",
  },
  solidType: {
    primary: "ring-primary bg-primary text-white",
    error: "ring-error bg-error text-white",
    success: "ring-success bg-success text-white",
    info: "ring-info bg-info text-whit",
  },
  size: {
    large: "px-4 py-1.5 text-lg leading-5",
    medium: "px-3 py-1 text-sm leading-4",
    small: "px-2 py-0.5 text-2xs leading-3",
  },
  bordered: "ring-1",
  default: "flex gap-2 items-center h-fit rounded-full hover:opacity-70 ring-inset ring-gray focus:ring-2",
}
