import clsx from "clsx"

export type AccordionItemClassNames = {
  wrapper: clsx.ClassValue;
  header: clsx.ClassValue;
  trigger: clsx.ClassValue;
  icon: clsx.ClassValue;
  title: clsx.ClassValue;
  content: clsx.ClassValue;
}

export const AccordionStyleConfig: { wrapper: clsx.ClassValue, item: AccordionItemClassNames } = {
  wrapper: "w-full border border-gray-300 rounded",
  item: {
    wrapper: [
      "rounded w-full overflow-hidden border-b last:border-0 border-dashed border-gray-300"
    ],
    header: [
      "bg-white px-4 py-4"
    ],
    trigger: [
      "text-left group radix-state-open:rounded-t-lg radix-state-closed:rounded-lg"
    ],
    icon: [
      "h-5 w-5 shrink-0 text-gray-700 ease-in-out duration-300",
      "group-radix-state-open:rotate-90"
    ],
    title: [
      "text-sm font-medium text-gray-900"
    ],
    content: [
      "bg-gray-100 pl-4 pb-3 shadow-inner"
    ]
  }
}
