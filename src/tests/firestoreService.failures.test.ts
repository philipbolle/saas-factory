// src/tests/firestoreService.failures.test.ts
import {
getDoc,
setDoc,
updateDoc,
deleteDoc,
getDocs,
} from "firebase/firestore";
import { firestoreService } from "../services/firestoreService";

jest.mock("firebase/firestore", () => ({
...jest.requireActual("firebase/firestore"),
getDoc: jest.fn(),
setDoc: jest.fn(),
updateDoc: jest.fn(),
deleteDoc: jest.fn(),
collection: jest.fn(),
getDocs: jest.fn(),
doc: jest.fn(),
}));

jest.mock("../config");

const mockedGetDoc = getDoc as jest.Mock;
const mockedSetDoc = setDoc as jest.Mock;
const mockedUpdateDoc = updateDoc as jest.Mock;
const mockedDeleteDoc = deleteDoc as jest.Mock;
const mockedGetDocs = getDocs as jest.Mock;

describe("FirestoreService Failure Scenarios", () => {
const consoleErrorSpy = jest
.spyOn(console, "error")
.mockImplementation(() => {});

afterEach(() => {
jest.clearAllMocks();
});

afterAll(() => {
consoleErrorSpy.mockRestore();
});

test("getDocument should return null on error", async () => {
mockedGetDoc.mockRejectedValue(new Error("Failed to fetch"));
const result = await firestoreService.getDocument(
"testCollection",
"testDoc"
);
expect(result).toBeNull();
expect(console.error).toHaveBeenCalledWith(
"Error getting document:",
expect.any(Error)
);
});

test("setDocument should throw an error on failure", async () => {
mockedSetDoc.mockRejectedValue(new Error("Failed to set document"));
await expect(
firestoreService.setDocument("testCollection", "testDoc", {})
).rejects.toThrow("Failed to set document");
expect(console.error).toHaveBeenCalledWith(
"Error setting document:",
expect.any(Error)
);
});

test("updateDocument should throw an error on failure", async () => {
mockedUpdateDoc.mockRejectedValue(new Error("Failed to update document"));
await expect(
firestoreService.updateDocument("testCollection", "testDoc", {})
).rejects.toThrow("Failed to update document");
expect(console.error).toHaveBeenCalledWith(
"Error updating document:",
expect.any(Error)
);
});

test("deleteDocument should throw an error on failure", async () => {
mockedDeleteDoc.mockRejectedValue(new Error("Failed to delete document"));
await expect(
firestoreService.deleteDocument("testCollection", "testDoc")
).rejects.toThrow("Failed to delete document");
expect(console.error).toHaveBeenCalledWith(
"Error deleting document:",
expect.any(Error)
);
});

test("getCollection should return an empty array on error", async () => {
mockedGetDocs.mockRejectedValue(new Error("Failed to get collection"));
const result = await firestoreService.getCollection("testCollection");
expect(result).toEqual([]);
expect(console.error).toHaveBeenCalledWith(
"Error getting collection:",
expect.any(Error)
);
});
});