import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { POSTS_DATA } from "../../config";
import {
  AdjustableBottomsheet,
  AuthenticationForm,
  CreatePostCard,
  PostCard,
} from "../../components";

const Feed = () => {
  const [showAuthentication, setShowAuthentication] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View>
          <Text style={styles.greetingTitle}>Hello Jane</Text>
          <Text style={styles.greetingTxt}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </Text>
        </View>
        <CreatePostCard
          onPress={() => {
            setShowAuthentication(true);
          }}
          containerStyle={styles.createPost}
          title={"Create post"}
          placeholder={"How are you feeling today?"}
          actionButtonLabel={"Post"}
          emoji={"💬"}
        />
        {POSTS_DATA.map((post) => (
          <PostCard
            onPress={() => {
              setShowAuthentication(true);
            }}
            key={post.id}
            containerStyle={styles.postCard}
            data={post}
          />
        ))}
      </ScrollView>
      {showAuthentication ? (
        <AdjustableBottomsheet
          title={isSignup ? "SIGN UP" : "WELCOME BACK"}
          subtitle={
            isSignup ? "Create an account to continue" : "Log into your account"
          }
          onClose={() => setShowAuthentication(false)}
          contentContainerStyle={styles.bottomsheet}
          children={
            <AuthenticationForm
              isSignup={isSignup}
              toggleIsSignup={() => setIsSignup(!isSignup)}
              onSubmit={() => setShowAuthentication(false)}
            />
          }
        />
      ) : null}
    </View>
  );
};

export default Feed;
