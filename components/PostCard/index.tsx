import React from "react";
import { Image, Pressable, Text, View, ViewStyle } from "react-native";
import styles from "./styles";
import EmojiComponent from "../EmojiComponent";
import Icon from "../Icon";
import { PostDataI } from "../../config";
import moment from "moment";

interface PostCardI {
  containerStyle?: ViewStyle;
  onPress: () => void;
  data: PostDataI;
}

const PostCard = ({ containerStyle, onPress, data }: PostCardI) => {
  const {
    reactionEmoji,
    name,
    userImage,
    postTime,
    isEdited,
    comments,
    postContent,
  } = data || {};

  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfoSubContainer}>
          <Image source={userImage} />
          <View style={styles.usernameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.timeStamp}>
              {moment(postTime, "YYYYMMDD").fromNow()}
              {isEdited && " • Edited"}
            </Text>
          </View>
        </View>
        <Icon name="dotsHorizontal" />
      </View>
      <View style={styles.postInput}>
        <EmojiComponent emoji={reactionEmoji} />
        <Text style={styles.placeHolderTxt}>{postContent}</Text>
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
