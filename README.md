# **Onboarding Screen - Expo React Native**

## **Overview**

This project implements an **Onboarding Screen** in **React Native with Expo**. The screen features a **background image, a text section, and a "Get Started" button** that navigates to a placeholder screen. The goal is to recreate the provided design while ensuring smooth interactivity and responsiveness.

---

## **Features**

✅ Background image covering the full screen  
✅ Text section overlaying half of the screen  
✅ "Get Started" button for navigation  
✅ Smooth fade-in animation for a better user experience  
✅ Responsive design for different screen sizes

---

## **Project Structure**

```
finderly/
│── assets/                 # Static assets (images, icons, fonts)
│── src/                    # Main source code
│   ├── components/         # Reusable UI components
│   ├── constants/          # App-wide constants (e.g., breakpoints)
│   ├── navigation/         # App navigation logic
│   ├── screens/            # All screen-related code
│   │   ├── (screen_name)/
│   │   │   ├── (screenName)Screen.tsx   # Main screen component
│   │   │   ├── components/              # Components specific to the screen
│   │   │   ├── styles.ts                # Styles for the screen
│   │   │   ├── index.ts                 # Barrel file exporting the screen
│   ├── utils/              # Helper functions for common app functionalities
│── .gitignore              # Git ignore rules
│── App.tsx                 # Main entry point of the React Native app
│── package.json            # Project dependencies and scripts
│── tsconfig.json           # TypeScript configuration
│── README.md               # Project documentation
│── index.ts                # Entry file for the app
```

---

## **Installation & Setup**

1️⃣ Clone this repository:

```sh
git clone <repo-url>
cd onboarding-app
```

2️⃣ Install dependencies:

```sh
npm install
```

3️⃣ Run the app:

```sh
npm start
```

4️⃣ Scan the QR code using **Expo Go** on your mobile device or run it on an emulator.

---

## **Technologies Used**

- **React Native** (with Expo)
- **TypeScript**
- **React Navigation** (for screen transitions)
- **Animated API** (for fade effects)

---

## **Navigation Flow**

1️⃣ **Onboarding_1 Screen** (background image + text + button)  
2️⃣ Clicking **"Get Started"** navigates to **Onboarding_2 Screen** (placeholder screen)

---

## **Screenshots**

_(Include screenshots of the onboarding screen and navigation, if possible.)_

---

## **Notes**

This app supports a minimum screen width of 240px.

## **License**

Feel free to use and modify it for learning.
