import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "@src/navigation/RootNavigator";
import { useFonts } from "expo-font";
import {
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins"; // Correctly importing fonts
import { Inter_400Regular } from "@expo-google-fonts/inter"; // You can include other fonts as needed

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Inter_400Regular,
  });

  if (fontsLoaded) {
    return (
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    );
  }
  return null;
}
