import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import RootNavigator from "@src/navigation/RootNavigator";

describe("RootNavigator", () => {
  it("renders correctly and displays initial screen", () => {
    const { getByText } = render(<RootNavigator />);
    expect(getByText("Hire a Professional")).toBeTruthy();
  });

  it("navigates from Onboarding_1 to Onboarding_2 when CTA Button is clicked", () => {
    const { getByText } = render(<RootNavigator />);

    fireEvent.press(getByText("Get Started"));

    expect(getByText("Onboarding_2")).toBeTruthy();
  });
});
