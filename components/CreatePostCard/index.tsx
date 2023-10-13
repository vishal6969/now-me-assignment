import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import styles from "./styles";
import EmojiComponent from "../EmojiComponent";
import Button from "../Button";

interface CreatePostCardI {
  containerStyle: ViewStyle;
  title: string;
  placeholder: string;
  actionButtonLabel: string;
  emoji: string;
  onPress: () => void;
}

const CreatePostCard = ({
  containerStyle,
  onPress,
  title,
  placeholder,
  actionButtonLabel,
  emoji,
}: CreatePostCardI) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.postInput}>
        <EmojiComponent emoji={emoji} />
        <Text style={styles.placeHolderTxt}>{placeholder}</Text>
      </View>
      <Button
        onPress={onPress}
        containerStyle={styles.postButton}
        text={actionButtonLabel}
      />
    </Pressable>
  );
};

export default CreatePostCard;
