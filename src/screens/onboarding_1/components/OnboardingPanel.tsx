import { View, Text } from "react-native";
import { DeviceType } from "@src/utils/DeviceUtils";
import { styles } from "@src/screens/onboarding_1/styles";
import CTAButton from "@src/components/CTAButton";
import { Onboarding1NavigationProp } from "@src/screens/onboarding_1";

export default function OnboardingPanel({
  navigation,
  deviceType,
}: {
  navigation: Onboarding1NavigationProp;
  deviceType: DeviceType;
}) {
  const isDesktop = deviceType === DeviceType.DESKTOP;
  const isMobile = deviceType === DeviceType.MOBILE;

  return (
    <View style={isDesktop ? styles.overlayDesktop : styles.overlayMobile}>
      <View style={styles.panel}>
        <View>
          <Text style={styles.title}>Hire a Professional</Text>
          <Text
            style={{
              ...styles.subtitle,
              ...(isMobile ? styles.subtitleMobile : {}),
            }}
          >
            Snap a photo, and Finderly's home improvement partners connect you
            with vetted pros—fast.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CTAButton
            title={"Get Started"}
            onPress={() => navigation.navigate("Onboarding_2")}
          />
        </View>
      </View>
    </View>
  );
}
