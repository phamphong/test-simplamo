import { FC } from "react";
import { ShapeProp, SizeProp, TypeProp } from "../common-props";
import { buttonStyleConfig } from "./style";
import clsx from "clsx";

interface BaseButtonProps {
  type?: TypeProp;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  shape?: ShapeProp;
  size?: SizeProp;
  solid?: boolean;
  disabled?: boolean;
  className?: string;
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
  styles?: React.CSSProperties;
  bordered?: boolean;
  ghost?: boolean;
  [key: `data-${string}`]: string;
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
  React.ButtonHTMLAttributes<HTMLElement>,
  'type' | 'prefix'
>;

type ButtonProps = AcceptOnlyOne<BaseButtonProps, "solid" | "ghost"> & MergedHTMLAttributes;

const Button: FC<ButtonProps> = ({
  type = "primary",
  prefix,
  suffix,
  shape = "round",
  size = "medium",
  solid = false,
  disabled,
  className,
  htmlType,
  children,
  styles,
  onClick,
  bordered = true,
  ghost = false,
  ...rest }) => {

  return <button
    {...rest}
    type={htmlType}
    className={clsx(
      buttonStyleConfig.default,
      solid ? buttonStyleConfig.solidType[type] : buttonStyleConfig.type[type],
      children ? buttonStyleConfig.size[size] : buttonStyleConfig.iconSize[size],
      buttonStyleConfig.shape[shape],
      bordered && buttonStyleConfig.bordered,
      !solid ? ghost ? buttonStyleConfig.ghost : buttonStyleConfig.white : "",
      className,
    )}
    style={styles}
    onClick={onClick}
    disabled={disabled}
  >
    {prefix &&
      <span className="text-base">
        {prefix}
      </span>
    }
    {children}
    {suffix &&
      <span className="text-base">
        {suffix}
      </span>
    }
  </button>
}


export default Button;
