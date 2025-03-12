
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backButtonContainer: {
        position: "absolute",
        left: 20,
        zIndex: 10,
    },

    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },

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