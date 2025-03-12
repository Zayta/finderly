import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import OnboardingPanel from "@src/screens/onboarding_1/components/OnboardingPanel";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BackButton from "@src/components/BackButton";
import OnboardingBackground from "@src/screens/onboarding_1/components/OnboardingBackground";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { styles } from "@src/screens/onboarding_1/styles";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnBoarding_1Screen() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
      <OnboardingBackground>
        <OnboardingPanel navigation={navigation}/>
      </OnboardingBackground>
  </SafeAreaView>
  </SafeAreaProvider>

  );
}
