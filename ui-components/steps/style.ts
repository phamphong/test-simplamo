export const TabsStyleConfig = {
  default: {
    tabList: [
      "flex gap-2 w-full bg-white"
    ],
    tabTrigger: [
      "group relative py-5",
      "text-gray",
      "radix-state-active:text-primary",
      "radix-state-active:border-b-gray-700",
      "focus-visible:radix-state-active:border-b-transparent",
      "radix-state-inactive:bg-gray-50",
      "focus:radix-state-active:border-b-red",
      "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    ],
    tabTitle: [
      "text-sm font-medium",
    ],
    tabInkBar: [
      "hidden group-radix-state-active:block",
      "absolute bottom-0 left-0 right-0",
      "h-1 rounded-t bg-primary"
    ],
    tabContent: [
      "rounded-b-lg bg-white px-2 py-2 text-sm"
    ]
  }
}
