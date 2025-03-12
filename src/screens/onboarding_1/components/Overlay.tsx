import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CTAButton from "@src/components/CTAButton";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { StyleSheet, useWindowDimensions } from "react-native";

import { View, Text } from "react-native";
import { DeviceType, getDeviceType} from "@src/util/deviceUtils";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function Overlay() {
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

const styles = StyleSheet.create({
  overlayMobile: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "50%",
      backgroundColor: "white",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
  },
  overlayDesktop: {
    position: "absolute",
    width: "50%",
    height: "50%",
    left: "25%",
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
},
  textContainer: {
      width: "100%",
      height: "100%",
      padding: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
  },
  title: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#EA00D4",
      textAlign: "center",
      marginBottom: 10,
  },
  subtitle: {
      fontSize: 24,
      color: "#333",
      textAlign: "center",
      marginBottom: 20,
      paddingHorizontal: 10,
  },
});
