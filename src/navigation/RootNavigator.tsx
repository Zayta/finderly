import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding_1Screen from '../screens/Onboarding_1';
import OnBoarding_2Screen from '../screens/Onboarding_2';

//define the props necessary for each screen or undefined if there are no custom props necessary
export type RootStackParamList = {
  Onboarding_1: undefined;
  Onboarding_2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding_1">
        <Stack.Screen name="Onboarding_1" component={OnBoarding_1Screen} />
        <Stack.Screen name="Onboarding_2" component={OnBoarding_2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
