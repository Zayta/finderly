import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { styles } from "@src/screens/onboarding_1/styles";
import BackButton from "@src/screens/onboarding_1/components/BackButton";
import ImageViewer from "@src/screens/onboarding_1/components/ImageViewer";
import BackgroundImage from "@assets/images/onboarding_1-bg.png";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnBoarding_1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
  <ImageViewer imgSource={BackgroundImage} />
  <View style={styles.overlay}>
    <BackButton />
    <View style={styles.textContainer}>
      <Text style={styles.title}>Hire a Professional</Text>
      <Text style={styles.subtitle}>
        Snap a photo, and Finderly's home improvement partners connect you with vetted pros—fast.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Onboarding_2")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

  );
}
