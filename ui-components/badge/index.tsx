import { FC } from "react";
import { ShapeProp, SizeProp, TypeProp } from "../common-props";
import { badgeStyleConfig } from "./style";
import clsx from "clsx";

interface BaseBadgeProps {
  type?: TypeProp;
  shape?: ShapeProp;
  size?: SizeProp;
  solid?: boolean;
  className?: string;
  styles?: React.CSSProperties;
  bordered?: boolean;
  [key: `data-${string}`]: string;
}

type BadgeProps = BaseBadgeProps & React.HTMLAttributes<HTMLDivElement>;

const Badge: FC<BadgeProps> = ({
  type = "error",
  size = "small",
  solid = true,
  className,
  children,
  styles,
  onClick,
  bordered = true,
  ...rest }) => {

  return <div
    {...rest}
    className={clsx(
      badgeStyleConfig.default,
      badgeStyleConfig.size[size],
      solid ? badgeStyleConfig.solidType[type] : badgeStyleConfig.type[type],
      bordered && badgeStyleConfig.bordered,
      className,
    )}
    style={styles}
  >
    {children}
  </div>
}


export default Badge;
