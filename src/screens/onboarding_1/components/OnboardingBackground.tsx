import React from "react";
import { StyleSheet } from "react-native";
import { ImageBackground } from "expo-image";

interface OnboardingBackgroundProps {
  children: React.ReactNode;
}

export default function OnboardingBackground({ children }: OnboardingBackgroundProps) {
  return (
    <ImageBackground
      source={require("@assets/images/onboarding_1-bg.png")}
      contentFit="fill"
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
