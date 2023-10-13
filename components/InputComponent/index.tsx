import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";
import Icon from "../Icon";

interface InputComponentI {
  label: string;
  containerStyle?: ViewStyle;
  actionLabel?: string | null;
  inputType?: "normal" | "password";
}

const InputComponent = ({
  label,
  containerStyle,
  placeholder,
  actionLabel,
  inputType,
}: InputComponentI & TextInputProps) => {
  const isInputTypePass = inputType === "password";
  const [isSecure, setIsSecure] = useState(isInputTypePass);

  return (
    <View style={containerStyle}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {actionLabel ? (
          <Text style={styles.actionLabel}>{actionLabel}</Text>
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isSecure}
          placeholderTextColor={colors.eyeBlue}
          style={styles.input}
          placeholder={placeholder}
        />
        {isInputTypePass ? (
          <Pressable onPress={() => setIsSecure(!isSecure)}>
            <Icon name="eye" />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default InputComponent;
