import clsx from "clsx"

export interface RadioGroupStyleConfig {
  wrapper?: clsx.ClassValue;
  label?: clsx.ClassValue;
  input?: clsx.ClassValue;
  content?: clsx.ClassValue
}

export const radioGroupStyleConfig: RadioGroupStyleConfig = {
  wrapper: [
    "flex gap-2 px-2 py-1",
    "shadow-inner shadow-gray-300 bg-gray-200",
    "rounded-lg text-sm leading-4"
  ],
  input: [
    "hidden peer"
  ],
  label: [
    "inline-flex items-center justify-between w-full px-3 py-1",
    "text-black font-semibold bg-transparent rounded-md cursor-pointer",
    "peer-checked:border-blue-600 peer-checked:bg-white",
    "hover:text-gray-600 hover:bg-gray-100",
    "drop-shadow-sm"
  ],
  content: [
    "block"
  ]
}
