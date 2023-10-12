import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  greetingTitle: {
    fontFamily: "Inter-Medium",
    fontSize: 28,
    color: colors.iconWhite,
  },
  greetingTxt: {
    fontFamily: "Inter-Regular",
    color: colors.eyeBlue,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
  },
  createPost: {
    marginTop: 32,
  },
  bottomsheet: {
    paddingBottom: 36,  
  },
  postCard: {
    marginTop: 16,
  }
});

export default styles;
