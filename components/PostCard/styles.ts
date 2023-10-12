import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.fadedBlack,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderWidth: 2,
    borderColor: colors.borderBlack,
    borderRadius: 8,
  },
  name: {
    fontFamily: "Inter-Medium",
    color: colors.iconWhite,
    fontSize: 16,
    lineHeight: 19.36,
  },
  postInput: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.bgBlack,
    marginTop: 16,
    paddingVertical: 20,
    paddingLeft: 12,
    paddingRight: 20,
    borderRadius: 8,
  },
  placeHolderTxt: {
    flex: 1,
    fontFamily: "Inter-Regular",
    color: colors.eyeBlue,
    fontSize: 14,
    lineHeight: 20.44,
    marginLeft: 12,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeStamp: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    color: colors.eyeBlue,
  },
  usernameContainer: {
    marginLeft: 12,
  },
  userInfoSubContainer: {
    flexDirection: "row",
  },
  commentsContainer: {
    flexDirection: "row",
    marginTop: 14,
  },
});

export default styles;
