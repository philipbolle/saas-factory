import { authService } from "./authService";
import { firestoreService } from "./firestoreService";

export const BackendService = {
  auth: authService,
  db: firestoreService,
};