import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BackButton from "@src/components/BackButton";

const mockCanGoBack = jest.fn();
const mockGoBack = jest.fn();
const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack,
      canGoBack: mockCanGoBack,
    }),
  };
});

describe("BackButton", () => {
  const BackButtonWrapper = ({ canGoBack = true }) => {
    mockCanGoBack.mockImplementation(() => canGoBack);
    return (
      <NavigationContainer>
        <BackButton />
      </NavigationContainer>
    );
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<BackButtonWrapper />);
    const button = getByTestId("back-button");
    expect(button).toBeTruthy();
  });

  it("calls goBack when navigation can go back", () => {
    const { getByTestId } = render(<BackButtonWrapper canGoBack={true} />);
    const button = getByTestId("back-button");

    fireEvent.press(button);

    const mockNavigation = useNavigation();
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
