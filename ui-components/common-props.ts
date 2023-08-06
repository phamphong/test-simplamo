import clsx from "clsx";

const TypeProps = ["primary", "error", "success", "info"] as const;
export type TypeProp = typeof TypeProps[number];
export type TypeConfig = {
  type: {
    [name in TypeProp]?: clsx.ClassValue;
  }
};
export type SolidTypeConfig = {
  solidType: {
    [name in TypeProp]?: clsx.ClassValue;
  }
};

const SizeProps = ["large", "medium", "small"] as const;
export type SizeProp = typeof SizeProps[number];
export type SizeConfig = {
  size: {
    [name in SizeProp]?: clsx.ClassValue;
  }
};
export type IconSizeConfig = {
  iconSize: {
    [name in SizeProp]?: clsx.ClassValue;
  }
};

const ShapeProps = ["square", "round", "circle"] as const;
export type ShapeProp = typeof ShapeProps[number];
export type ShapeConfig = {
  shape: {
    [name in ShapeProp]?: string;
  }
};

export type DefaultConfig = {
  default?: clsx.ClassValue;
}
