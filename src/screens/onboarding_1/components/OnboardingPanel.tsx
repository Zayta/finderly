import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CTAButton from "@src/components/CTAButton";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { StyleSheet, useWindowDimensions } from "react-native";

import { View, Text } from "react-native";
import { DeviceType, getDeviceType} from "@src/utils/deviceUtils";
import { styles } from "@src/screens/onboarding_1/styles";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnboardingPanel() {
  const { width } = useWindowDimensions();
  const isDesktop = getDeviceType(width)===DeviceType.DESKTOP;

  return (
      <View style={isDesktop? styles.overlayDesktop:styles.overlayMobile}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hire a Professional</Text>
          <Text style={styles.subtitle}>
            Snap a photo, and Finderly's home improvement partners connect you with vetted pros—fast.
          </Text>
          <CTAButton title={"Get Started"} onPress={()=>alert('next') }/>
        </View>
      </View>
  );
}

