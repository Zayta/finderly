import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { ImageBackground } from "expo-image";
import Overlay from "@src/screens/onboarding_1/components/Overlay";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@src/components/BackButton";
import OnboardingBackground from "@src/screens/onboarding_1/components/OnboardingBackground";
import { DeviceType, getDeviceType } from "@src/util/deviceUtils";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnBoarding_1Screen() {
  
  const { width } = useWindowDimensions();
  const isDesktop = getDeviceType(width)===DeviceType.DESKTOP;

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
      <OnboardingBackground>
        <Overlay isDesktop={isDesktop} />
      </OnboardingBackground>
  </SafeAreaView>
  </SafeAreaProvider>

  );
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
   
    backButtonContainer: {
      position: "absolute",
      left: 20,
      zIndex: 10, 
    },
});
