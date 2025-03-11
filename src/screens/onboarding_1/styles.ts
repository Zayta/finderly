import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures it takes full screen
        position: "relative",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textContainer: {
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        borderRadius: 20,
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
