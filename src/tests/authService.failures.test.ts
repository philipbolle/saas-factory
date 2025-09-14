// src/tests/authService.failures.test.ts
import { authService } from "../services/authService";
import { signInWithPopup, signOut } from "firebase/auth";

// Mock Firebase Auth methods used in authService
jest.mock("firebase/auth", () => ({
...jest.requireActual("firebase/auth"),
signInWithPopup: jest.fn(),
signOut: jest.fn(),
onAuthStateChanged: jest.fn(),
GoogleAuthProvider: jest.fn(),
}));

// Mock the config module
jest.mock("../config");

const mockedSignInWithPopup = signInWithPopup as jest.Mock;
const mockedSignOut = signOut as jest.Mock;

describe("AuthService Failure Scenarios", () => {
afterEach(() => {
jest.clearAllMocks();
});

test("signInWithGoogle should handle network errors gracefully", async () => {
const consoleErrorSpy = jest
.spyOn(console, "error")
.mockImplementation(() => {});
mockedSignInWithPopup.mockRejectedValue(new Error("Network Error"));
const user = await authService.signInWithGoogle();
expect(user).toBeNull();
expect(console.error).toHaveBeenCalledWith(
"Error during sign-in:",
expect.any(Error)
);
consoleErrorSpy.mockRestore();
});

test("signOut should handle network errors gracefully", async () => {
const consoleErrorSpy = jest
.spyOn(console, "error")
.mockImplementation(() => {});
mockedSignOut.mockRejectedValue(new Error("Network Error"));
await authService.signOut();
expect(console.error).toHaveBeenCalledWith(
"Error during sign-out:",
expect.any(Error)
);
consoleErrorSpy.mockRestore();
});
});