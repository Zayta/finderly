import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import OnBoarding_1Screen from "@src/screens/onboarding_1";
import OnBoarding_2Screen from "@src/screens/onboarding_2";

export type RootStackParamList = {
  Onboarding_1: undefined;
  Onboarding_2: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding_1"
        screenOptions={{
          ...TransitionPresets.FadeFromRightAndroid
        }}
      >
        <Stack.Screen name="Onboarding_1" component={OnBoarding_1Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="Onboarding_2" component={OnBoarding_2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
