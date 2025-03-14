# **Finderly Onboarding Screen - Expo React Native**

## **Overview**

This code implements an **Onboarding Screen** in **React Native with Expo**. The screen features a **background image, a text section, and a "Get Started" button** that navigates to a placeholder screen. The goal is to recreate the provided design while ensuring smooth interactivity and responsiveness.

---

### **Assumptions**

This app is intended to support a minimum screen width of 270px and a maximum screen width of 2000px.

## **Features**

✅ Background image covering the full screen  
✅ Text section overlaying half of the screen  
✅ "Get Started" button for navigation  
✅ Animated effect for screen transitions  
✅ Responsive design for different screen sizes  

---

## **Project Structure**

```
finderly/
│── assets/                 # Static assets (images, icons, fonts)
│── src/                    # Main source code
│   ├── components/         # Reusable UI components (e.g. buttons)
│   ├── constants/          # App-wide constants (e.g., breakpoints)
│   ├── navigation/         # App navigation logic
│   ├── screens/            # All screen-related code
│   │   ├── (screen_name)/
│   │   │   ├── components/              # Components specific to the screen
│   │   │   ├── styles.ts                # Styles for the screen
│   │   │   ├── index.ts                 # Main screen component
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
git clone https://github.com/Zayta/finderly.git
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
- **React Native Testing Library and Jest** (for testing)

---

## **Navigation Flow**

1️⃣ **Onboarding_1 Screen** (background image + text + button)  
2️⃣ Clicking **"Get Started"** navigates to **Onboarding_2 Screen** (placeholder screen)

---

## **Screenshots**

Mobile:
![Screenshot_20250314-113759](https://github.com/user-attachments/assets/3f40cc58-1745-44e2-9b98-9bdd8b5df236)


Desktop (I just thought that having the CTA panel in the center would look nicer than stretching the view):
![image](https://github.com/user-attachments/assets/dacceb26-a4cf-4eab-9493-9180a3864fea)



## **Notes**
Feel free to use and modify this code for learning.
