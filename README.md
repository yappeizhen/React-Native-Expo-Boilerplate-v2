# React Native Expo Boilerplate
Simple template to quickly set up a React Native Expo mobile application.

## Features
- [x] Light and dark themes that match native system display
- [x] Swipeable bottom tab navigation (default)
- [x] Shifting bottom tab navigation
- [x] Stack navigation and modal
- [x] Drawer navigation
- [x] Firebase backend
- [x] Sign up page
- [x] Basic log in and log out
- [x] Input validation
- [x] Success and error messages

## Getting Started

### `npm install`

Installs all dependencies or devDependencies from package.json file

### `npm run start`

Runs your app in development mode.

Open it in the [Expo Go app](https://expo.io) on your phone to view it by scanning the displayed QR code upon running. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm run start --reset-cache
# or
yarn run start --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

## Personalisation

Use `toggles.ts` in the src folder to configure customisations such as enabling authentication, and switching between bottom tab configurations.

### Authentication and Firebase

Create a [new firebase webapp](console.firebase.google.com) and add the firebaseConfig details to the file firebase.js in order to use Firebase authentication.

<img width="517" alt="image" src="https://user-images.githubusercontent.com/66234273/170323452-8b7be8ad-849f-4482-a832-37806845ed7c.png">
<img width="346" alt="image" src="https://user-images.githubusercontent.com/66234273/170323809-f8b5a6ca-9ef1-491d-a483-b11d66bef7ef.png">

## Hooks

#### useAuthState

Checks if the user is logged in, and if so, returns the corresponding user information

#### useColorScheme

Checks the color scheme (dark or light) of the user's device

