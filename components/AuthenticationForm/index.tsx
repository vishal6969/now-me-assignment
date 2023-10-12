import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import InputComponent from "../InputComponent";
import styles from "./styles";
import Button from "../Button";
import Icon from "../Icon";

interface AuthenticationFormI {
  onSubmit: () => void;
  isSignup: boolean;
  setIsSignup: (isSignup: boolean) => void;
}

const AuthenticationForm = ({
  onSubmit,
  isSignup,
  setIsSignup,
}: AuthenticationFormI) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  return (
    <View>
      <InputComponent
        label={isSignup ? "Email" : "Email or Username"}
        placeHolder="Enter your email"
        containerStyle={styles.emailInput}
      />
      {isSignup ? (
        <InputComponent
          label="Username"
          placeHolder="Choose a preferred username"
          containerStyle={styles.usernameInput}
        />
      ) : null}
      <InputComponent
        label="Password"
        placeHolder={
          isSignup ? "Choose a preferred password" : "Your supersafe password"
        }
        containerStyle={styles.usernameInput}
        isSecure={isPasswordSecure}
        actionLabel={isSignup ? null : "Forgot password?"}
      >
        <Pressable onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
          <Icon name="eye" />
        </Pressable>
      </InputComponent>
      <Button
        onPress={onSubmit}
        textStyle={styles.btnText}
        containerStyle={styles.submitBtn}
        text={isSignup ? "Continue" : "Login now"}
      />
      <Text
        onPress={() => setIsSignup(!isSignup)}
        style={styles.redirectionTxt}
      >
        {isSignup ? "Already have an account?" : "Not registered yet?"}{" "}
        <Text style={styles.boldTxt}>{isSignup ? "Login" : "Register"} →</Text>
      </Text>
    </View>
  );
};

export default AuthenticationForm;
