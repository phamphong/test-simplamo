import { FC } from "react";
import { ShapeProp, SizeProp, TypeProp } from "../common-props";
import { chipStyleConfig } from "./style";
import clsx from "clsx";

interface BaseChipProps {
  type?: TypeProp;
  shape?: ShapeProp;
  size?: SizeProp;
  solid?: boolean;
  className?: string;
  styles?: React.CSSProperties;
  bordered?: boolean;
  [key: `data-${string}`]: string;
}

type ChipProps = BaseChipProps & React.HTMLAttributes<HTMLDivElement>;

const Chip: FC<ChipProps> = ({
  type = "info",
  size = "small",
  solid,
  className,
  children,
  styles,
  onClick,
  bordered = true,
  ...rest }) => {

  return <div
    {...rest}
    className={clsx(
      chipStyleConfig.default,
      chipStyleConfig.size[size],
      solid ? chipStyleConfig.solidType[type] : chipStyleConfig.type[type],
      bordered && chipStyleConfig.bordered,
      className,
    )}
    style={styles}
  >
    {children}
  </div>
}


export default Chip;
