import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
