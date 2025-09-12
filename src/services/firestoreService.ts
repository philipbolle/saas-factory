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
    const docRef = doc(this.db, collectionPath, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as T;
    } else {
      return null;
    }
  }

  // Create or update a document
  async setDocument(collectionPath: string, docId: string, data: object): Promise<void> {
    const docRef = doc(this.db, collectionPath, docId);
    await setDoc(docRef, data, { merge: true });
  }

  // Update a document
  async updateDocument(collectionPath: string, docId: string, data: object): Promise<void> {
    const docRef = doc(this.db, collectionPath, docId);
    await updateDoc(docRef, data);
  }

  // Delete a document
  async deleteDocument(collectionPath: string, docId: string): Promise<void> {
    const docRef = doc(this.db, collectionPath, docId);
    await deleteDoc(docRef);
  }

  // Get all documents in a collection
  async getCollection<T>(collectionPath: string): Promise<T[]> {
    const querySnapshot = await getDocs(collection(this.db, collectionPath));
    return querySnapshot.docs.map(doc => doc.data() as T);
  }
}

export const firestoreService = new FirestoreService(db);