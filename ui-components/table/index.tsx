import React, { FC, useState, memo } from 'react';
import RCTable, { Column as RCColumn, TableProps } from 'rc-table';
import clsx from 'clsx';
import { ColumnProps } from 'rc-table/lib/sugar/Column';
import { TableStyleConfig } from './style';

const TableComponent: FC<React.HTMLAttributes<HTMLTableElement>> =
  memo(function TableMemo({ children, className, ...rest }) {
    return (
      <table {...rest} className={clsx(
        TableStyleConfig.table
      )}>
        {children}
      </table>
    )
  })

const RowComponent: FC<React.HTMLAttributes<HTMLTableRowElement>> =
  memo(function RowMemo({ children, className, ...rest }) {
    return <tr {...rest} className={clsx(
      TableStyleConfig.tableRow
    )}>
      {children}
    </tr>
  })

const HeaderRowComponent: FC<React.HTMLAttributes<HTMLTableRowElement>> =
  memo(function RowMemo({ children, className, ...rest }) {
    return <tr {...rest} className={clsx(
      TableStyleConfig.tableHeaderRow
    )}>
      {children}
    </tr>
  })

interface Offset {
  top: number;
  left: number;
}

const CellComponent: FC<React.HTMLAttributes<HTMLTableCellElement>> =
  memo(function CellMemo({ children, className, ...rest }) {
    const [offset, setOffset] = useState<Offset>();
    return <td {...rest}
      className={clsx(
        TableStyleConfig.tableCell.wrapper,
        className?.includes("rc-table-cell-fix-left") && TableStyleConfig.tableCell.fixedLeft,
        className?.includes("rc-table-cell-fix-right") && TableStyleConfig.tableCell.fixedRight,
      )}
      onMouseEnter={(e) => {
        if (!className?.includes("rc-table-cell-fix")) {
          let curDom = e.currentTarget;
          setOffset({
            left: curDom.offsetLeft + curDom.offsetWidth * 0.5,
            top: curDom.offsetTop + curDom.offsetHeight * 0.5,
          })
        }
      }}
      onMouseLeave={() => setOffset(undefined)}
    >
      <div style={{ width: offset?.left }} className={clsx(
        TableStyleConfig.tableCell.horizonBar,
      )} />
      <div style={{ height: offset?.top }} className={clsx(
        TableStyleConfig.tableCell.verticalBar,
      )} />
      <span
        className={clsx(
          TableStyleConfig.tableCell.textWrapper,
          offset && TableStyleConfig.tableCell.textWrapperZIndex
        )}
      >
        {children}
      </span>
    </td>
  })

const HeaderCellComponent: FC<React.HTMLAttributes<HTMLTableCellElement>> =
  memo(function CellMemo({ children, className, ...rest }) {
    return <td {...rest}
      className={clsx(
        TableStyleConfig.tableHeaderCell.wrapper,
        className?.includes("rc-table-cell-fix-left") && TableStyleConfig.tableHeaderCell.fixedLeft,
        className?.includes("rc-table-cell-fix-right") && TableStyleConfig.tableHeaderCell.fixedRight,
      )}
    >
      {children}
    </td>
  })

interface BaseTableProps<T> extends Omit<TableProps, "components" | "data"> {
  data: T[]
}

export const Table =
  <T extends object>({ data, children }: BaseTableProps<T>) => {
    return <RCTable<T>
      data={data}
      scroll={{
        x: 1200,
        y: 500,
      }}
      onHeaderRow={(_data, _index) => ({
        className: "text-gray-500"
      })}
      className={TableStyleConfig.default}
      components={{
        table: memo(TableComponent),
        header: {
          row: memo(HeaderRowComponent),
          cell: memo(HeaderCellComponent),
        },
        body: {
          row: memo(RowComponent),
          cell: memo(CellComponent),
        },
      }}
    >
      {children}
    </RCTable>
  };

export const Column = <T extends object>(props: ColumnProps<T>) => {
  return <RCColumn<T> {...props} />
}
