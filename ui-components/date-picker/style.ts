import clsx from "clsx";

type DatePickerGroupConfig = {
  picker: clsx.ClassValue;
  panelWrapper: clsx.ClassValue;
  panel: clsx.ClassValue;
  cell: clsx.ClassValue;
  input: clsx.ClassValue;
  inputWrapper: clsx.ClassValue;
}

type DatePickerStyleConfig = {
  default: DatePickerGroupConfig
}

export const DatePickerStyle: DatePickerStyleConfig = {
  default: {
    picker: "relative !border-none",
    panelWrapper: "bg-white rounded ring-1 ring-inset p-2 absolute z-50 pointer-events-auto",
    panel: "!border-none !bg-white",
    cell: [
      "!p-2 !h-auto rounded cursor-pointer",
      "hover:bg-info hover:text-white",
    ],
    input: "bg-transparent focus:outline-none w-full",
    inputWrapper: [
      "flex gap-1 px-2 py-1",
      "bg-gray-100 rounded",
      "focus-within:ring-2"
    ]
  }
}
