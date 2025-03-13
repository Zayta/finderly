import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CTAButton from "@src/components/CTAButton";

describe("CTAButton", () => {
  it("renders correctly and responds to press events", () => {
    const mockOnPress = jest.fn(); // Create a mock function for onPress
    const { getByText } = render(
      <CTAButton title="Click Me" onPress={mockOnPress} />,
    );

    const button = getByText("Click Me");
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
