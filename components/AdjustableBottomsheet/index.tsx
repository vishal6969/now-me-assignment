import React, { useCallback, useRef } from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import styles from "./styles";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../constants/colors";
import Icon from "../Icon";

interface AdjustableBottomsheetI {
  onClose: () => void;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
}

const AdjustableBottomsheet = ({
  onClose,
  title,
  subtitle,
  children,
  contentContainerStyle,
}: AdjustableBottomsheetI) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = ["CONTENT_HEIGHT", "100%"];
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onClose={onClose}
        backdropComponent={renderBackdrop}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        handleComponent={null}
        backgroundStyle={styles.bottomsheet}
        enableContentPanningGesture={false}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <LinearGradient
            colors={colors.linearGradientBorder}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
          >
            <BottomSheetView
              onLayout={handleContentLayout}
              style={[styles.contentContainer, contentContainerStyle]}
            >
              <Pressable onPress={onClose} style={styles.crossIcon}>
                <Icon name={"cross"} />
              </Pressable>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
              {children}
            </BottomSheetView>
          </LinearGradient>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default AdjustableBottomsheet;
