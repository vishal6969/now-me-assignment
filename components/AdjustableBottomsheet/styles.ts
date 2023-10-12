import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  bottomsheet: {
    backgroundColor: colors.fadedBlack,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.fadedBlack,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 16,
  },
  linearGradient: {
    flex: 1,
    paddingTop: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  crossIcon: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  title: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    lineHeight: 16.94,
    color: colors.txtBlack,
    marginTop: 40,
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
