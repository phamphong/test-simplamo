import { FC } from "react";
import { SizeProp } from "../common-props";
import { ProgressTypeProp, progressStyleConfig } from "./style";
import clsx from "clsx";
import { Line, Circle, ProgressProps } from 'rc-progress';

const percentNode = [16, 32, 48, 64, 80, 100];

interface BaseProgressProps {
  type?: ProgressTypeProp;
  size?: SizeProp;
  className?: string;
  styles?: React.CSSProperties;
  percent?: number;
  showPercent?: boolean;
  [key: `data-${string}`]: string;
}

type MergeProps = BaseProgressProps & React.HTMLAttributes<HTMLDivElement>;

const Progress: FC<MergeProps> = ({
  percent = 0,
  type = "circle",
  size = "medium",
  showPercent = true,
  className,
  styles,
  onClick,
  ...rest }) => {

  let ChildNode: FC<ProgressProps>;
  switch (type) {
    case "circle": ChildNode = Circle; break;
    case "line": ChildNode = Line; break;
  }

  return <div
    {...rest}
    className={clsx(
      progressStyleConfig.default,
      progressStyleConfig.size[size]![type],
      progressStyleConfig.type[type],
      className,
    )}
    style={styles}
  >
    {type === "circle" ?
      <>
        <Circle
          strokeWidth={size === "small" ? 20 : 15}
          trailWidth={size === "small" ? 20 : 15}
          strokeColor="currentColor"
          strokeLinecap="round"
          percent={percent}
        />
        {showPercent &&
          <span
            className={clsx(progressStyleConfig.circle!.text)}
          >
            {percent}%
          </span>
        }
      </>
      :
      <>
        <Line
          strokeWidth={2}
          trailWidth={2}
          strokeColor="currentColor"
          strokeLinecap="round"
          percent={percent}
        />
        <div data-content={percent} className={clsx(
          progressStyleConfig.line?.text
        )}
          style={{
            left: `${percent}%`
          }}
        />
        {percentNode.map((node, index) =>
          <div key={index} data-content={node} className={clsx(
            progressStyleConfig.line?.nodeText,
            percent >= node && progressStyleConfig.line?.nodeActive
          )}
            style={{
              left: `${node}%`
            }}
          />
        )}
      </>
    }
  </div>
}


export default Progress;
