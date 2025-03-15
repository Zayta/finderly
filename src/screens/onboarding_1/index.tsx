import React from "react";
import { useWindowDimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingPanel from "@src/screens/onboarding_1/components/OnboardingPanel";
import BackButton from "@src/components/BackButton";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { getDeviceType } from "@src/utils/DeviceUtils";
import { styles } from "@src/screens/onboarding_1/styles";

export type Onboarding1NavigationProp = StackNavigationProp<
  RootStackParamList,
  "Onboarding_1"
>;

export default function OnBoarding_1Screen() {
  const navigation = useNavigation<Onboarding1NavigationProp>();
  const { width } = useWindowDimensions();
  const deviceType = getDeviceType(width);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <ImageBackground
        source={require("@assets/images/onboarding_1-bg.png")}
        contentFit="fill"
        style={styles.backgroundImage}
      >
        <OnboardingPanel navigation={navigation} deviceType={deviceType} />
      </ImageBackground>
    </SafeAreaView>
  );
}
