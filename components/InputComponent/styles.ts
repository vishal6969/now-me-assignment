import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  label: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    lineHeight: 16.94,
    color: colors.iconWhite,
  },
  input: {
    flex: 1,
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: colors.eyeBlue,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 12,
    borderWidth: 1.5,
    borderColor: colors.borderBlack,
    borderRadius: 4,
    marginTop: 10,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionLabel: {
    fontFamily: "Inter-Medium",
    fontSize: 12,
    lineHeight: 14.52,
    color: colors.iconWhite,
  },
});

export default styles;
