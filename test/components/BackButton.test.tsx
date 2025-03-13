import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import BackButton from "@src/components/BackButton"; // Update path as necessary

describe('BackButton', () => {
  const Wrapper = () => (
    <NavigationContainer>
      <BackButton />
    </NavigationContainer>
  );

  it('renders correctly', () => {
    const { getByTestId } = render(<Wrapper />);
    const button = getByTestId('back-button');
    expect(button).toBeTruthy();
  });
});
