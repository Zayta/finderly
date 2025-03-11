import OnBoarding_1Screen from '@src/screens/onboarding_1';
import OnBoarding_2Screen from '@src/screens/onboarding_2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
        <Stack.Screen name="Onboarding_1" component={OnBoarding_1Screen} options={{headerShown: false,
        }}/>
        <Stack.Screen name="Onboarding_2" component={OnBoarding_2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
