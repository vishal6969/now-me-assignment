import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import EmojiComponent from "../EmojiComponent";
import Icon from "../Icon";

interface PostCardI {
  containerStyle?: ViewStyle;
  onPress: () => void;
  reactionEmoji: string;
  name: string;
  userImage: ImageSourcePropType;
  postTime: number;
  isEdited: boolean;
  comments: number;
}

const PostCard = ({
  containerStyle,
  onPress,
  reactionEmoji,
  name,
  userImage,
  postTime,
  isEdited,
  comments,
}: PostCardI) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfoSubContainer}>
          <Image source={userImage} />
          <View style={styles.usernameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.timeStamp}>
              {postTime}mins ago{isEdited && " • Edited"}
            </Text>
          </View>
        </View>
        <Icon name="dotsHorizontal" />
      </View>
      <View style={styles.postInput}>
        <EmojiComponent emoji={reactionEmoji} />
        <Text style={styles.placeHolderTxt}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
      </View>
      <View style={styles.commentsContainer}>
        <Icon name={"comment"} />
        <Text style={[styles.timeStamp, { marginLeft: 8 }]}>
          {comments} comments
        </Text>
      </View>
    </Pressable>
  );
};

export default PostCard;
