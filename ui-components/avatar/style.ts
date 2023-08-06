import clsx from "clsx";
import { DefaultConfig, ShapeConfig, SizeConfig, SizeProp } from "../common-props"

type AvatarStyleConfig = {
  root: clsx.ClassValue;
  rootRing: clsx.ClassValue;
  nameText: {
    [name in SizeProp]: clsx.ClassValue;
  };
  group: clsx.ClassValue;
  groupItemSize: {
    [name in SizeProp]: clsx.ClassValue;
  };
  groupZIndex: clsx.ClassValue,
  defaultZIndex: clsx.ClassValue,
} & SizeConfig & ShapeConfig & DefaultConfig

export const avatarStyleConfig: AvatarStyleConfig = {
  size: {
    large: "h-11 w-11 font-bold",
    medium: "h-8 w-8",
    small: "h-5 w-5",
  },
  shape: {
    square: "rounded-none",
    round: "rounded",
    circle: "rounded-full",
  },
  root: [
    "inline-flex overflow-hidden",
    "bg-white rounded-full",
  ],
  rootRing: " p-0.5",
  nameText: {
    large: "text-xl leading-5",
    medium: "text-sm leading-4",
    small: "text-xs leading-3",
  },
  group: "inline-flex items-center justify-center",
  groupItemSize: {
    large: "h-11 w-9",
    medium: "h-8 w-6",
    small: "h-5 w-4",
  },
  groupZIndex: "z-0 flex",
  defaultZIndex: "z-10",
  default: [
    "flex h-full w-full items-center justify-center bg-gray-200",
    "object-cover uppercase text-black",
  ],
}
