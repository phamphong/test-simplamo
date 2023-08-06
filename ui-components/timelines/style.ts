import clsx from "clsx"

export interface TimelineWrapperClasses {
  head?: clsx.ClassValue;
  headWrapper?: clsx.ClassValue;
  content?: clsx.ClassValue;
  headLine?: clsx.ClassValue;
  headDot?: clsx.ClassValue;
}

export interface TimelineItemClasses {
  content?: clsx.ClassValue;
  wrapper?: clsx.ClassValue;
  line?: clsx.ClassValue;
  dot?: clsx.ClassValue;
}

export const TimelineStyleConfig: {
  wrapper: TimelineWrapperClasses,
  item: TimelineItemClasses
} = {
  wrapper: {
    head: [
      "pl-3 py-2 pr-2 -translate-x-1/2px",
      "border-b border-gray-300",
      "bg-gray-200 z-0"
    ],
    headWrapper: ["group relative pl-1 border-gray-300 pb-2"],
    headDot: [
      "absolute left-1 top-1/2 -translate-x-1/2 -translate-y-2",
      "w-2 h-2 bg-gray-300 rounded z-10",
    ],
    headLine: [
      "absolute left-1 -translate-x-1/2px",
      "h-full w-0 z-10",
      "border-l border-gray-300",
    ],
    content: [],
  },
  item: {
    content: [
      "px-3 py-2 bg-white border-x border-t border-gray-300 -translate-x-1/2px",
      "group-first-of-type:rounded-t group-last-of-type:rounded-b group-last-of-type:border-b"
    ],
    wrapper: [
      "group relative pl-4 border-gray-300 mr-2"
    ],
    dot: [
      "absolute left-1 top-1/2 -translate-x-1/2 -translate-y-1/2",
      "w-2 h-2 bg-gray-300 rounded",
      "group-last-of-type:hidden",
    ],
    line: [
      "absolute left-1 -translate-x-1/2px",
      "h-full w-0",
      "border-l border-gray-300",
      "group-last:h-1/2 group-last-of-type:w-3 group-last-of-type:border-b group-last-of-type:rounded-bl",
    ],
  }
}
