import React from "react";
import { 
  View, 
  Text, 
  ImageBackground, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Ionicons } from "@expo/vector-icons";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function OnBoarding_1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground 
      source={require("../../assets/onboarding_1-bg.png")} 
      style={styles.background}
    >
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => alert('There is no back screen yet')}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Text Box */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hire a Professional</Text>
        <Text style={styles.subtitle}>
          Snap a photo, and Finderly’s home improvement partners connect you with vetted pros—fast.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Onboarding_2")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
    padding: 8,
  },
  textContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "50%", // Covers bottom half
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D500F9", // Purple-pink color
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#D500F9",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

