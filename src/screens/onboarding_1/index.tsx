import React from "react";
import { 
  View, 
  Text, 
  ImageBackground, 
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import { styles } from "@src/screens/onboarding_1/styles";
import BackButton from "@src/screens/onboarding_1/components/BackButton";
import ImageViewer from "@src/components/ImageViewer";
import BackgroundImage from "@assets/images/onboarding_1-bg.png";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnBoarding_1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
    <ImageViewer
      imgSource={BackgroundImage}
    />
      {/* Back Button */}
      <BackButton/>

      {/* Text Box */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hire a Professional</Text>
        <Text style={styles.subtitle}>
          Snap a photo, and Finderly's home improvement partners connect you with vetted pros—fast.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Onboarding_2")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


