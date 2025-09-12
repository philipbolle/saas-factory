import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { auth } from "./firebase";

class AuthService {
  private auth: Auth;

  constructor(authInstance: Auth) {
    this.auth = authInstance;
  }

  // Sign in with Google
  async signInWithGoogle(): Promise<User | null> {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      return result.user;
    } catch (error) {
      console.error("Error during sign-in:", error);
      return null;
    }
  }

  // Sign out
  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  }

  // Listen for auth state changes
  onAuthStateChanged(callback: (user: User | null) => void) {
    return onAuthStateChanged(this.auth, callback);
  }
}

export const authService = new AuthService(auth);