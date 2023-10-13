import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import colors from "../../constants/colors";

interface ButtonI {
  text: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({ text, onPress, containerStyle, textStyle }: ButtonI) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.btnBlue,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 28,
  },
  text: {
    fontFamily: "Inter-Medium",
    color: colors.white,
    fontSize: 14,
  },
});

export default Button;
