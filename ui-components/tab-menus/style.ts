export const TabMenuStyleConfig = {
  default: {
    tabList: [
      "flex gap-2 w-full bg-white"
    ],
    tabTitle: [
      "relative text-sm text-gray-500 font-medium relative py-3",
    ],
    tabActive: [
      "tab-active tab-active:text-primary",
      "after:absolute after:bottom-0 after:w-full after:h-1",
      "after:bg-primary after:block after:rounded-t",
    ],
    tabLinkBefore: [
      "before:absolute before:inset-0 before:block"
    ]
  }
}
