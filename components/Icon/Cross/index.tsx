import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import colors from "../../../constants/colors";
import IconI from "../interface";

const Cross = ({ height, width, color }: IconI) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <Circle
      cx={Number(width) / 2}
      cy={Number(height) / 2}
      r={Number(width) / 2}
      fill="#131319"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M9.97 9.97a.75.75 0 0 1 1.06 0L14 12.94l2.97-2.97a.75.75 0 1 1 1.06 1.06L15.06 14l2.97 2.97a.75.75 0 1 1-1.06 1.06L14 15.06l-2.97 2.97a.75.75 0 1 1-1.06-1.06L12.94 14l-2.97-2.97a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
);

Cross.defaultProps = {
  width: 28,
  height: 28,
  color: colors.white,
};

export default Cross;
