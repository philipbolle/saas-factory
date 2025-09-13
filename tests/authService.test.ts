// tests/authService.test.ts
import { Auth, User } from "firebase/auth";
import { authService } from "../src/services/authService";

// Mock Firebase Auth methods that are used in authService
jest.mock("firebase/auth", () => ({
  ...jest.requireActual("firebase/auth"),
  signInWithPopup: jest.fn(),
  signOut: jest.fn(),
  onAuthStateChanged: jest.fn(),
  GoogleAuthProvider: jest.fn(),
}));

const { signInWithPopup, signOut } = jest.requireMock("firebase/auth");

describe("AuthService", () => {
  let testAuthService: typeof authService;

  beforeEach(() => {
    // It's a singleton, so we can just use the imported service
    testAuthService = authService;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test for signInWithGoogle success
  test("should sign in with Google and return a user object on success", async () => {
    const mockUser = { uid: "123", email: "test@example.com" } as User;
    (signInWithPopup as jest.Mock).mockResolvedValue({ user: mockUser });

    const user = await testAuthService.signInWithGoogle();

    expect(user).toEqual(mockUser);
    expect(signInWithPopup).toHaveBeenCalled();
  });

  // Test for signInWithGoogle failure
  test("should return null if Google sign-in fails", async () => {
    (signInWithPopup as jest.Mock).mockRejectedValue(new Error("Sign-in failed"));

    const user = await testAuthService.signInWithGoogle();

    expect(user).toBeNull();
  });

  // Test for signOut
  test("should call the signOut method from firebase/auth", async () => {
    (signOut as jest.Mock).mockResolvedValue(undefined);

    await testAuthService.signOut();

    expect(signOut).toHaveBeenCalled();
  });
});