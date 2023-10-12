import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../../constants/colors";
import IconI from "../interface";

const Eye = ({ height, width, color }: IconI) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M2.417 10c0-.807.518-2.295 1.77-3.594C5.406 5.138 7.298 4.083 10 4.083c2.701 0 4.593 1.055 5.814 2.323 1.25 1.299 1.77 2.787 1.77 3.594 0 .807-.52 2.295-1.77 3.594-1.221 1.268-3.113 2.323-5.814 2.323s-4.593-1.055-5.814-2.323c-1.25-1.299-1.77-2.787-1.77-3.594ZM10 2.583c-3.132 0-5.407 1.238-6.894 2.782C1.648 6.88.916 8.723.916 10c0 1.277.732 3.121 2.19 4.635 1.487 1.544 3.762 2.782 6.894 2.782s5.407-1.238 6.894-2.782c1.458-1.514 2.19-3.358 2.19-4.635 0-1.277-.732-3.121-2.19-4.635C15.407 3.821 13.132 2.583 10 2.583ZM8.25 10a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM10 6.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
      clipRule="evenodd"
    />
  </Svg>
);

Eye.defaultProps = {
  width: 20,
  height: 20,
  color: colors.eyeBlue,
};

export default Eye;
