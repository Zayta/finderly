import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CTAButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export default function CTAButton({
  title,
  onPress,
}: CTAButtonProps) {
  return (
      <TouchableOpacity style={styles.button} onPress={()=>onPress()}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",  // Adjust width to take most of the container
    alignSelf: "center",  // Center the button
    paddingVertical: 18,  // Increase height
    borderRadius: 30,  // Match rounded edges
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    backgroundColor:"#EA00D4"
  },
  buttonText: {
    fontSize: 18,  // Increase font size for better readability
    fontWeight: "bold",
    color:"#ffffff"
  },
});
