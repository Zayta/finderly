import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { ImageBackground } from "expo-image";
import OnboardingPanel from "@src/screens/onboarding_1/components/OnboardingPanel";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@src/components/BackButton";
import OnboardingBackground from "@src/screens/onboarding_1/components/OnboardingBackground";
import { DeviceType, getDeviceType } from "@src/utils/deviceUtils";
import { styles } from "@src/screens/onboarding_1/styles";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnBoarding_1Screen() {

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
      <OnboardingBackground>
        <OnboardingPanel />
      </OnboardingBackground>
  </SafeAreaView>
  </SafeAreaProvider>

  );
}

