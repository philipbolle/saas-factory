import { createContext } from "react";
import { User } from "firebase/auth";

export interface IAuthContext {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<User | null>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);