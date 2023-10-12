import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    width: "100%",
    marginTop: 40,
    borderRadius: 8,
    padding: 2,
  },
  modalContent: {
    backgroundColor: colors.fadedBlack,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 40,
  },
  title: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    lineHeight: 16.94,
    color: colors.txtBlack,
    alignSelf: "center",
  },
  subtitle: {
    fontFamily: "Inter-SemiBold",
    fontSize: 18,
    lineHeight: 21.78,
    color: colors.white,
    marginTop: 8,
    alignSelf: "center",
  },
});

export default styles;
