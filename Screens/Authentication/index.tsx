import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { AuthenticationForm, Icon } from "../../components";
import routes from "../../navigation/routes";

const Authentication = ({ navigation }) => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <View style={styles.container}>
      <Icon name="logo" />
      <LinearGradient
        colors={colors.linearGradientBorder}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>
            {isSignup ? "SIGN UP" : "WELCOME BACK"}
          </Text>
          <Text style={styles.subtitle}>
            {isSignup
              ? "Create an account to continue"
              : "Log into your account"}
          </Text>
          <AuthenticationForm
            onSubmit={() => {
              navigation.navigate(routes.Feed);
            }}
            isSignup={isSignup}
            toggleIsSignup={() => setIsSignup(!isSignup)}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Authentication;
