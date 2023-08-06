import clsx from "clsx"
import { DefaultConfig, SizeConfig, SizeProp, SolidTypeConfig, TypeConfig } from "../common-props"

const ProgressTypeProps = ["circle", "line"] as const;
export type ProgressTypeProp = typeof ProgressTypeProps[number];

type ProgressStyleConfig = {
  type: {
    [name in ProgressTypeProp]?: clsx.ClassValue;
  },
  size: {
    [name in SizeProp]?: {
      [name in ProgressTypeProp]?: clsx.ClassValue;
    }
  },
  circle?: {
    text?: clsx.ClassValue;
  },
  line?: {
    text?: clsx.ClassValue;
    nodeText?: clsx.ClassValue;
    nodeActive?: clsx.ClassValue;
  },
} & DefaultConfig

export const progressStyleConfig: ProgressStyleConfig = {
  type: {
    circle: "relative",
    line: "relative mx-1 py-5",
  },
  size: {
    large: {
      circle: "w-11 h-11 text-2xs",
      line: "w-10 h-1",
    },
    medium: {
      circle: "w-8 h-8 text-3xs",
      line: "w-56 h-auto",
    },
    small: {
      circle: "w-5 h-5 text-4xs",
      line: "w-10 h-1",
    },
  },
  circle: {
    text: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  },
  line: {
    text: [
      "absolute w-2 h-2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold",
      "after:content-[attr(data-content)] after:text-2xs after:text-current",
      "after:absolute after:bottom-3 after:left-1/2 after:-translate-x-1/2",
    ],
    nodeText: [
      "absolute w-2 h-2 border-2 border-solid border-gray-300 bg-gray-200 rounded",
      "top-1/2 -translate-x-1/2 -translate-y-1/2",
      "after:content-[attr(data-content)] after:text-2xs after:text-gray-400",
      "after:absolute after:top-3 after:left-1/2 after:-translate-x-1/2",
    ],
    nodeActive: [
      "ring-2 ring-current ring-offset-1 ring-offset-gray-100 after:text-gray-500",
    ]
  },
  default: "inline-block",
}
