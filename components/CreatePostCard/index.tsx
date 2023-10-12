import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import styles from "./styles";
import EmojiComponent from "../EmojiComponent";
import Button from "../Button";

interface CreatePostCardI {
  containerStyle: ViewStyle;
  onPress: () => void;
}

const CreatePostCard = ({ containerStyle, onPress }: CreatePostCardI) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={styles.title}>Create post</Text>
      <View style={styles.postInput}>
        <EmojiComponent emoji={"💬"} />
        <Text style={styles.placeHolderTxt}>How are you feeling today?</Text>
      </View>
      <Button
        onPress={onPress}
        containerStyle={styles.postButton}
        text={"Post"}
      />
    </Pressable>
  );
};

export default CreatePostCard;
