import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { ImageBackground } from "expo-image";
import Overlay from "@src/screens/onboarding_1/components/Overlay";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnBoarding_1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={require("@assets/images/onboarding_1-bg.png")} resizeMode="stretch" style={styles.image} >
          <Overlay/>
      </ImageBackground>
  </SafeAreaView>
  </SafeAreaProvider>

  );
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
   
});
