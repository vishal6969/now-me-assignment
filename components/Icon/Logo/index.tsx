import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../../constants/colors";
import IconI from "../interface";

const Logo = ({ height, width, color }: IconI) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M2.976 7.804c0-2.657 2.21-4.85 4.985-4.85 2.775 0 4.985 2.193 4.985 4.85 0 2.658-2.21 4.85-4.985 4.85-2.775 0-4.985-2.192-4.985-4.85ZM7.96.954C4.125.954.976 3.999.976 7.804c0 3.805 3.149 6.85 6.985 6.85 3.836 0 6.985-3.045 6.985-6.85 0-3.805-3.149-6.85-6.985-6.85Zm5.051 24.65-9.124 4.934V20.67l9.124 4.934Zm-9.28-7.291a1.25 1.25 0 0 0-1.844 1.1v12.383a1.25 1.25 0 0 0 1.845 1.1l11.45-6.192a1.25 1.25 0 0 0 0-2.2l-11.45-6.191Zm15.586 1.82c0-.69.56-1.25 1.25-1.25h11.206c.69 0 1.25.56 1.25 1.25v10.942c0 .69-.56 1.25-1.25 1.25H20.569c-.69 0-1.25-.56-1.25-1.25V20.133Zm2 .75v9.442h9.706v-9.442h-9.706Zm11.08-17.767A1 1 0 0 0 31 1.686l-4.829 4.72-4.829-4.72a1 1 0 0 0-1.398 1.43l4.797 4.688-4.797 4.688a1 1 0 0 0 1.398 1.43l4.83-4.72L31 13.922a1 1 0 0 0 1.398-1.43l-4.796-4.688 4.796-4.688Z"
      clipRule="evenodd"
    />
  </Svg>
);

Logo.defaultProps = {
  height: 34,
  width: 34,
  color: colors.iconWhite,
};
export default Logo;
