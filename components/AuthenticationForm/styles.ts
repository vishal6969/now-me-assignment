import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  emailInput: {
    marginTop: 30,
  },
  usernameInput: {
    marginTop: 16,
  },
  submitBtn: {
    width: "100%",
    height: "auto",
    paddingVertical: 12,
    marginTop: 20,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19.36,
  },
  redirectionTxt: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    lineHeight: 16.94,
    color: colors.eyeBlue,
    marginTop: 14,
  },
  boldTxt: {
    fontFamily: "Inter-Medium",
    color: colors.iconWhite,
  },
});

export default styles;
