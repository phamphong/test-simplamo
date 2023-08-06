import { DefaultConfig, IconSizeConfig, ShapeConfig, SizeConfig, SolidTypeConfig, TypeConfig } from "../common-props"

type ButtonStyleConfig = TypeConfig & SolidTypeConfig
  & SizeConfig & IconSizeConfig
  & ShapeConfig & DefaultConfig

export const buttonStyleConfig: ButtonStyleConfig = {
  type: {
    primary: "bg-white ring-primary text-primary",
    error: "bg-white ring-error text-error",
    success: "bg-white ring-success text-success",
  },
  solidType: {
    primary: "bg-primary ring-primary text-white",
    error: "bg-error ring-error text-white",
    success: "bg-success ring-success text-white",
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
  default: "flex gap-2 items-center hover:opacity-70 ring-1 ring-inset ring-gray focus:ring-2",
}
