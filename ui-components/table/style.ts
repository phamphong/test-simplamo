export const TableStyleConfig = {
  default: 'border rounded overflow-hidden bg-white',
  table: [
    'border-separate border-spacing-0 w-full relative',
    "after:block after:absolute"
  ],
  tableHeaderRow: {
    wrapper: "group bg-white",
  },
  tableHeaderCell: {
    wrapper: [
      'px-3 py-0 border-b group-hover:bg-gray-50 relative',
      'font-semibold bg-white text-gray-500 text-center',
    ],
    fixedLeft: "z-20 border-r",
    fixedRight: "z-20 border-l",
  },
  tableRow: {
    wrapper: "group bg-gray-100 hover:bg-gray-200",
  },
  tableCell: {
    wrapper: [
      'px-3 py-0 border-b group-hover:bg-gray-50 relative',
    ],
    fixedLeft: "z-20 border-r bg-white",
    fixedRight: "z-20 border-l bg-white",
    horizonBar: [
      "absolute top-1/2 right-1/2 h-0.5 z-0 -translate-y-1/2px",
      "border-b-2 border-dashed border-primary",
    ],
    verticalBar: [
      "absolute left-1/2 bottom-1/2 w-0.5 z-0 -translate-x-1/2px",
      "border-l-2 border-dashed border-primary",
    ],
    textWrapper: "relative",
    textWrapperZIndex: "z-10",
  }
}
