import { getDeviceType, DeviceType } from "@src/utils/DeviceUtils";
import {
  desktopBreakpoint,
  tabletBreakpoint,
} from "@src/constants/breakpoints";

describe("getDeviceType", () => {
  it("returns DESKTOP for widths greater than or equal to desktopBreakpoint", () => {
    const desktopWidth = desktopBreakpoint;
    expect(getDeviceType(desktopWidth)).toBe(DeviceType.DESKTOP);

    const widthAboveDesktop = desktopBreakpoint + 1;
    expect(getDeviceType(widthAboveDesktop)).toBe(DeviceType.DESKTOP);
  });

  it("returns TABLET for widths greater than or equal to tabletBreakpoint but less than desktopBreakpoint", () => {
    const tabletWidth = tabletBreakpoint;
    expect(getDeviceType(tabletWidth)).toBe(DeviceType.TABLET);

    const widthBetweenTabletAndDesktop = tabletBreakpoint + 1;
    expect(getDeviceType(widthBetweenTabletAndDesktop)).toBe(DeviceType.TABLET);
  });

  it("returns MOBILE for widths less than tabletBreakpoint", () => {
    const mobileWidth = tabletBreakpoint - 1;
    expect(getDeviceType(mobileWidth)).toBe(DeviceType.MOBILE);
  });
});
