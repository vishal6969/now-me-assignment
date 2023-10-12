import React from "react";
import { Text, TextInput, View, ViewStyle } from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

interface InputComponentI {
  label: string;
  containerStyle?: ViewStyle;
  placeHolder?: string;
  isSecure?: boolean;
  children?: React.ReactNode;
  actionLabel?: string | null;
}

const InputComponent = ({
  label,
  containerStyle,
  placeHolder,
  isSecure,
  children,
  actionLabel,
}: InputComponentI) => {
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
          placeholder={placeHolder}
        />
        {children}
      </View>
    </View>
  );
};

export default InputComponent;
