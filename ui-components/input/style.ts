import clsx from "clsx"

export interface InputStyleConfig {
  wrapper?: clsx.ClassValue;
  prefix?: clsx.ClassValue;
  suffix?: clsx.ClassValue;
  input?: clsx.ClassValue;
}

export const inputStyleConfig: InputStyleConfig = {
  wrapper: [
    "flex gap-2 px-2 py-1 items-center bg-gray-100 rounded max-w-full",
    "focus-within:ring-2",
  ],
  prefix: [
    "text-xl text-gray-400"
  ],
  suffix: [
    "text-xl text-gray-400"
  ],
  input: [
    "bg-transparent focus:outline-none flex-1 min-w-0"
  ]
}
