# React Native: useEffect Async Unmount Error

This repository demonstrates a common error in React Native applications when using the `useEffect` hook with asynchronous operations.  The issue occurs when a component unmounts before an asynchronous operation within the `useEffect` hook completes, resulting in the error: `Cannot update a component after it has been unmounted`.

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected implementation using cleanup functions and state management to prevent the error.

## Reproducing the Error

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the application.
5. Observe the error in the console and the application behavior.

## Solution

The solution involves using the cleanup function provided by `useEffect`'s second argument to cancel any ongoing asynchronous operations before the component unmounts.  Proper state management also ensures that updates are not attempted after unmounting.