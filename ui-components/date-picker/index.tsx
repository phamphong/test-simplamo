import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";
import Picker, { PickerPanel, PickerProps } from 'rc-picker'
import 'rc-picker/assets/index.css'
import generateConfig from 'rc-picker/lib/generate/moment'
import localVN from 'rc-picker/lib/locale/vi_VN'
import { CalendarIcon, TriangleDownIcon } from '@radix-ui/react-icons'
import moment, { Moment } from "moment";
import { DatePickerStyle } from "./style";

const CommonProps = {
  generateConfig: generateConfig,
  locale: localVN,
}

const PickerTypes = ["time", "date", "week", "month", "quarter", "year"] as const;
type PickerType = typeof PickerTypes[number];

const defaultFormat: { [name in PickerType]: string } = {
  time: "HH:mm",
  date: "DD/MM/YYYY",
  week: "WW YYYY",
  month: "MM/YYYY",
  quarter: "[Q]Q YYYY",
  year: "YYYY",
}

export type DatePickerProps = {
  value?: Moment;
  picker?: PickerType;
  format?: string;
  // [key: `data-${string}`]: string;
};

const InputRender: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <div className={clsx(
    DatePickerStyle.default.inputWrapper
  )}>
    <CalendarIcon width="1em" height="1em" className="text-2xl text-gray-400 cursor-pointer" />
    <input {...props} className={clsx(DatePickerStyle.default.input)} />
    <TriangleDownIcon width="1em" height="1em" className="text-2xl text-gray-400 cursor-pointer" />
  </div>
}

export const DatePicker: FC<DatePickerProps> = ({
  value,
  picker = "date",
  format,
  ...rest }) => {

  return <>
    <Picker<Moment>
      value={value ?? moment()}
      {...rest}
      {...CommonProps}
      picker={picker}
      className={clsx(DatePickerStyle.default.picker)}
      dropdownClassName="fixed z-50"
      inputRender={InputRender}
      format={format ?? defaultFormat[picker]}
      changeOnBlur={false}
      panelRender={(_panel) => {
        switch (picker) {
          case "time": return <div className={clsx(DatePickerStyle.default.panelWrapper)}>
            <PickerPanel<Moment>
              {...CommonProps}
              picker={picker}
              className={clsx(DatePickerStyle.default.panel)}
              cellRender={(_current, { originNode }) => {
                return <div className={clsx(
                  originNode.props.className,
                  DatePickerStyle.default.cell,
                )}>
                  {originNode.props.children}
                </div>
              }}
            />
          </div>;
          case "date":
            return <div className={clsx(DatePickerStyle.default.panelWrapper)}>
              <PickerPanel<Moment>
                {...CommonProps}
                picker={picker}
                className="!border-none !bg-white"
                cellRender={(_current, { originNode, }) => {
                  return <div className={clsx(
                    originNode.props.className,
                    DatePickerStyle.default.cell,
                  )}>
                    {originNode.props.children}
                  </div>
                }}
              />
            </div>;
          case "week":
          case "month":
          case "quarter":
          case "year":
            return <div className={clsx(DatePickerStyle.default.panelWrapper)}>
              <PickerPanel<Moment>
                {...CommonProps}
                picker={picker}
                className="!border-none !bg-white"
                cellRender={(_current, { originNode, }) => {
                  return <div className={clsx(
                    originNode.props.className,
                    DatePickerStyle.default.cell,
                  )}>
                    {originNode.props.children}
                  </div>
                }}
              />
            </div>
        }
      }}
    />
  </>
}
