import clsx from "clsx"
import { DefaultConfig, SizeConfig, SolidTypeConfig, TypeConfig } from "../common-props"

type ChipStyleConfig = {
  bordered: clsx.ClassValue;
} & TypeConfig & SolidTypeConfig
  & SizeConfig
  & DefaultConfig

export const chipStyleConfig: ChipStyleConfig = {
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
    large: "px-6 py-3 text-xl leading-5",
    medium: "px-5 py-2 text-base leading-4",
    small: "px-4 py-1 text-xs leading-3",
  },
  bordered: "ring-1",
  default: "flex gap-2 items-center h-fit rounded-full hover:opacity-70 ring-inset ring-gray focus:ring-2",
}
