import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { clsx } from "clsx";
import React, { FC, ReactNode, memo, useState } from "react";
import { ShapeProp, SizeProp } from "../common-props";
import { avatarStyleConfig } from "./style";

interface AvatarPropsBasic {
  shape?: ShapeProp;
  size?: SizeProp;
  ring?: boolean;
};

interface AvatarPropsWithSrc extends AvatarPropsBasic {
  src: string;
  name?: string;
}

interface AvatarPropsWithName extends AvatarPropsBasic {
  src?: never;
  name: string;
}

type AvatarProps = AvatarPropsWithSrc | AvatarPropsWithName

export const Avatar = memo(function AvatarMemo({
  src,
  name,
  shape = "circle",
  size = "medium",
  ring = false,
  ...rest
}: AvatarProps) {

  return (
    <AvatarPrimitive.Root
      {...rest}
      className={clsx(
        avatarStyleConfig.root,
        avatarStyleConfig.size[size],
        ring && avatarStyleConfig.rootRing,
      )}
    >
      <AvatarPrimitive.Image
        src={src}
        alt="Avatar"
        className={clsx(
          avatarStyleConfig.default,
          avatarStyleConfig.shape[shape],
        )}
      />
      <AvatarPrimitive.Fallback
        className={clsx(
          avatarStyleConfig.default,
          avatarStyleConfig.shape[shape],
        )}
        delayMs={600}
      >
        <span className={clsx(
          avatarStyleConfig.nameText[size],
        )}>
          {name?.substring(0, 2)}
        </span>
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}, arePropsEqual);

function arePropsEqual(prevProps: AvatarProps, nextProps: AvatarProps) { return prevProps.src === nextProps.src };

interface AvatarGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  maxCount?: number;
  children: React.ComponentElement<AvatarProps, any> | React.ComponentElement<AvatarProps, any>[]
}

export const AvatarGroup: FC<AvatarGroupProps> = ({
  maxCount = 0,
  children,
  ...rest
}) => {
  let showList: React.ReactElement<AvatarProps>[] = [];
  let array = React.Children.toArray(children).filter(child => React.isValidElement(child)) as React.ReactElement<AvatarProps>[];
  let size = React.Children.map(children, e => e)[0].props.size ?? "medium";
  showList = array.slice(0, maxCount)
  return <div {...rest} className={clsx(
    avatarStyleConfig.group
  )}>
    {showList.map((item, index) =>
      <span key={index} className={clsx(
        avatarStyleConfig.defaultZIndex,
        avatarStyleConfig.groupItemSize[size],
      )} >
        {React.cloneElement(item, { ring: true })}
      </span>
    )}
    {(!!maxCount && maxCount < array.length) &&
      <span className={clsx(
        avatarStyleConfig.groupZIndex,
      )} >
        <Avatar name={`+${array.length - maxCount}`} size={size} ring={true} />
      </span>
    }
  </div>
}
