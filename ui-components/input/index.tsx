import { FC } from "react";
import clsx from "clsx";
import { InputStyleConfig, inputStyleConfig } from "./style";

export interface BaseInputProps {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  classNames?: InputStyleConfig;
  styles?: React.CSSProperties;
  [key: `data-${string}`]: string;
}
type MergedHTMLAttributes = Omit<React.HTMLAttributes<HTMLElement> &
  React.InputHTMLAttributes<HTMLElement>, 'prefix'>

const Input: FC<BaseInputProps & MergedHTMLAttributes> = ({
  type,
  disabled,
  classNames,
  styles,
  prefix,
  suffix,
  placeholder,
  onClick,
  ...rest }) => {

  return <label
    {...rest}
    className={clsx(
      inputStyleConfig.wrapper,
      classNames?.wrapper,
    )} style={styles}>
    {prefix &&
      <span className={clsx(
        inputStyleConfig.prefix,
        classNames?.prefix,
      )}>
        {prefix}
      </span>
    }
    <input
      placeholder={placeholder}
      type={type}
      className={clsx(
        inputStyleConfig.input,
        classNames?.input,
      )}
    />
    {suffix &&
      <span className={clsx(
        inputStyleConfig.suffix,
        classNames?.suffix,
      )}>
        {suffix}
      </span>
    }
  </label>
}


export default Input;
