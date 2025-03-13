import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          if (Platform.OS === "android") {
            BackHandler.exitApp();
          } else {
            alert("No back screen");
          }
        }
      }}
    >
      <Ionicons name="arrow-back" size={36} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "rgba(0,0,0,0.0)",
    borderRadius: 20,
    padding: 8,
  },
});
