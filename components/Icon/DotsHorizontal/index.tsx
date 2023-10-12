import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../../constants/colors";
import IconI from "../interface";

const DotsHorizontal = ({ height, width, color }: IconI) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M4.833 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6.667 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.167 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      clipRule="evenodd"
    />
  </Svg>
);

DotsHorizontal.defaultProps = {
  width: 20,
  height: 20,
  color: colors.iconWhite,
};

export default DotsHorizontal;
