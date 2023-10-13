import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import InputComponent from "../InputComponent";
import styles from "./styles";
import Button from "../Button";
import Icon from "../Icon";

interface AuthenticationFormI {
  onSubmit: () => void;
  isSignup: boolean;
  toggleIsSignup: () => void;
}

const AuthenticationForm = ({
  onSubmit,
  isSignup,
  toggleIsSignup,
}: AuthenticationFormI) => {
  return (
    <View>
      <InputComponent
        label={isSignup ? "Email" : "Email or Username"}
        placeholder="Enter your email"
        containerStyle={styles.emailInput}
      />
      {isSignup ? (
        <InputComponent
          label="Username"
          placeholder="Choose a preferred username"
          containerStyle={styles.usernameInput}
        />
      ) : null}
      <InputComponent
        label="Password"
        placeholder={
          isSignup ? "Choose a preferred password" : "Your supersafe password"
        }
        containerStyle={styles.usernameInput}
        actionLabel={isSignup ? null : "Forgot password?"}
        inputType={"password"}
      />
      <Button
        onPress={onSubmit}
        textStyle={styles.btnText}
        containerStyle={styles.submitBtn}
        text={isSignup ? "Continue" : "Login now"}
      />
      <Text onPress={() => toggleIsSignup()} style={styles.redirectionTxt}>
        {isSignup ? "Already have an account?" : "Not registered yet?"}{" "}
        <Text style={styles.boldTxt}>{isSignup ? "Login" : "Register"} →</Text>
      </Text>
    </View>
  );
};

export default AuthenticationForm;
