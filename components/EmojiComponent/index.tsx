import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

const EmojiComponent = ({ emoji }: { emoji: string }) => {
  return (
    <View style={styles.container}>
      <Text>{emoji}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.fadedBlack,
    height: 32,
    width: 32,
    borderRadius: 16,
  },
});
export default EmojiComponent;
