import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { ImageBackground } from "expo-image";
import Overlay from "@src/screens/onboarding_1/components/Overlay";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@src/components/BackButton";
import OnboardingBackground from "@src/screens/onboarding_1/components/OnboardingBackground";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnBoarding_1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
      <OnboardingBackground>
        <Overlay />
      </OnboardingBackground>
  </SafeAreaView>
  </SafeAreaProvider>

  );
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    backButtonContainer: {
      position: "absolute",
      left: 20,
      zIndex: 10, 
    },
});
