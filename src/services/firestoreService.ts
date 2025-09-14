import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  Firestore
} from "firebase/firestore";
import { db } from "./firebase";

class FirestoreService {
  private db: Firestore;

  constructor(dbInstance: Firestore) {
    this.db = dbInstance;
  }

  // Get a document
  async getDocument<T>(collectionPath: string, docId: string): Promise<T | null> {
    try {
      const docRef = doc(this.db, collectionPath, docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as T;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      return null;
    }
  }

  // Create or update a document
  async setDocument(collectionPath: string, docId: string, data: object): Promise<void> {
    try {
      const docRef = doc(this.db, collectionPath, docId);
      await setDoc(docRef, data, { merge: true });
    } catch (error) {
      console.error("Error setting document:", error);
      throw error; // Re-throwing for the caller to handle UI feedback
    }
  }

  // Update a document
  async updateDocument(collectionPath: string, docId: string, data: object): Promise<void> {
    try {
      const docRef = doc(this.db, collectionPath, docId);
      await updateDoc(docRef, data);
    } catch (error) {
      console.error("Error updating document:", error);
      throw error;
    }
  }

  // Delete a document
  async deleteDocument(collectionPath: string, docId: string): Promise<void> {
    try {
      const docRef = doc(this.db, collectionPath, docId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document:", error);
      throw error;
    }
  }

  // Get all documents in a collection
  async getCollection<T>(collectionPath: string): Promise<T[]> {
    try {
      const querySnapshot = await getDocs(collection(this.db, collectionPath));
      return querySnapshot.docs.map(doc => doc.data() as T);
    } catch (error) {
      console.error("Error getting collection:", error);
      return [];
    }
  }
}

export const firestoreService = new FirestoreService(db);