import { desktopBreakpoint, tabletBreakpoint } from "@src/constants/breakpoints";


export enum DeviceType {
    DESKTOP, MOBILE, TABLET
}


export const getDeviceType = (width: number): DeviceType => {
    if (width >= desktopBreakpoint) {
        return DeviceType.DESKTOP
    }
    else if (width >= tabletBreakpoint) {
        return DeviceType.TABLET
    }
    else {
        return DeviceType.MOBILE;
    }
}
