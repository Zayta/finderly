import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BackButton from "@src/components/BackButton";
import { Platform, Alert, BackHandler } from "react-native";

//navigation mocks
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
  const Wrapper = ({ canGoBack = true }) => {
    mockCanGoBack.mockImplementation(() => canGoBack);
    return (
      <NavigationContainer>
        <BackButton />
      </NavigationContainer>
    );
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Wrapper />);
    const button = getByTestId("back-button");
    expect(button).toBeTruthy();
  });

  it("calls goBack when navigation can go back", () => {
    const { getByTestId } = render(<Wrapper canGoBack={true} />);
    const button = getByTestId("back-button");

    fireEvent.press(button);

    const mockNavigation = useNavigation();
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  // it("calls BackHandler.exitApp on Android if no screens can be navigated back", () => {
  //   Platform.OS = "android";

  //   const { getByTestId } = render(<Wrapper canGoBack={false} />);
  //   const button = getByTestId("back-button");

  //   fireEvent.press(button);

  //   expect(BackHandler.exitApp).toHaveBeenCalled();
  // });

  // it("shows an alert on iOS if no screens can be navigated back", () => {
  //   Platform.OS = "ios";

  //   const { getByTestId } = render(<Wrapper canGoBack={false} />);
  //   const button = getByTestId("back-button");

  //   fireEvent.press(button);

  //   expect(Alert.alert).toHaveBeenCalledWith("No back screen");
  // });
});
