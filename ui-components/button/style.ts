import clsx from "clsx"
import { DefaultConfig, IconSizeConfig, ShapeConfig, SizeConfig, SolidTypeConfig, TypeConfig } from "../common-props"

type ButtonStyleConfig = {
  bordered: clsx.ClassValue;
  ghost: clsx.ClassValue;
  white: clsx.ClassValue;
} & TypeConfig & SolidTypeConfig
  & SizeConfig & IconSizeConfig
  & ShapeConfig & DefaultConfig

export const buttonStyleConfig: ButtonStyleConfig = {
  type: {
    primary: "ring-primary text-primary",
    error: "ring-error text-error",
    success: "ring-success text-success",
    info: "ring-info text-info",
  },
  solidType: {
    primary: "bg-primary ring-primary text-white",
    error: "bg-error ring-error text-white",
    success: "bg-success ring-success text-white",
    info: "bg-info ring-info text-white",
  },
  size: {
    large: "px-4 py-3 text-xl leading-5",
    medium: "px-3 py-2 text-base leading-4",
    small: "px-2 py-1 text-xs leading-3",
  },
  iconSize: {
    large: "px-3 py-3 text-xl leading-5",
    medium: "px-2 py-2 text-base leading-4",
    small: "px-1 py-1 text-xs leading-3",
  },
  shape: {
    square: "rounded-none",
    round: "rounded",
    circle: "rounded-full",
  },
  bordered: "ring-1",
  ghost: "bg-transparent",
  white: "bg-white",
  default: [
    "flex gap-2 items-center h-fit font-semibold",
    "hover:opacity-70 ring-inset ring-gray focus:ring-2",
    ""
  ],
}
