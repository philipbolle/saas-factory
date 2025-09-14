import { useEffect, useState, ReactNode } from "react";
import { User } from "firebase/auth";
import { authService } from "../services/authService";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    signIn: authService.signInWithGoogle,
    signOut: authService.signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};