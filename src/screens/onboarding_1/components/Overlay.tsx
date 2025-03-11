import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/navigation/RootNavigator";
import BackButton from "@src/screens/onboarding_1/components/BackButton";
import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

import { View, Text, TouchableOpacity } from "react-native";

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding_1">;

export default function Overlay() {
  return (
     <View style={styles.overlay}>
        <BackButton />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hire a Professional</Text>
          <Text style={styles.subtitle}>
            Snap a photo, and Finderly's home improvement partners connect you with vetted pros—fast.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => alert('nav')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textContainer: {
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#D500F9",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#D500F9",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
