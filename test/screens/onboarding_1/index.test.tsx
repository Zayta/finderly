import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import OnBoarding_1Screen from "@src/screens/onboarding_1";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});
jest.mock("@assets/images/onboarding_1-bg.png", () => "mocked-image");
describe("OnBoarding_1Screen", () => {
  const Onboarding1ScreenWrapper = () => {
    return (
      <NavigationContainer>
        <OnBoarding_1Screen />
      </NavigationContainer>
    );
  };

  it("renders content", () => {
    const { getByText } = render(<Onboarding1ScreenWrapper />);
    expect(getByText("Hire a Professional")).toBeTruthy();
    expect(
      getByText(
        "Snap a photo, and Finderly's home improvement partners connect you with vetted pros—fast.",
      ),
    ).toBeTruthy();
  });
});
