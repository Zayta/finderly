import React from "react";
import { ImageBackground } from "expo-image";
import { styles } from "@src/screens/onboarding_1/styles";

interface OnboardingBackgroundProps {
  children: React.ReactNode;
}

export default function OnboardingBackground({
  children,
}: OnboardingBackgroundProps) {
  return (
    <ImageBackground
      source={require("@assets/images/onboarding_1-bg.png")}
      contentFit="fill"
      style={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
}
