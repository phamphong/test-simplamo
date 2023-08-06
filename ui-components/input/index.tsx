import { FC } from "react";
import clsx from "clsx";

export interface BaseInputProps {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  styles?: React.CSSProperties;
  [key: `data-${string}`]: string;
}
type MergedHTMLAttributes = Omit<React.HTMLAttributes<HTMLElement> &
  React.InputHTMLAttributes<HTMLElement>, 'prefix'>

const Input: FC<BaseInputProps & MergedHTMLAttributes> = ({
  type,
  disabled,
  className,
  styles,
  prefix,
  suffix,
  onClick,
  ...rest }) => {

  return <label
    {...rest}
    className={clsx(
      className,
      "flex gap-2 px-2 py-1 items-center bg-gray-100 rounded max-w-full",
      "focus-within:ring-2",
    )} style={styles}>
    {prefix &&
      <span className="text-xl text-gray-400">
        {prefix}
      </span>
    }
    <input
      placeholder="Tìm kiếm ..."
      type={type}
      className={clsx(
        "bg-transparent focus:outline-none flex-1 min-w-0"
      )}
    />
    {suffix &&
      <span className="text-xl text-gray-400">
        {suffix}
      </span>
    }
  </label>
}


export default Input;
