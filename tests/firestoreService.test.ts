// tests/firestoreService.test.ts
import { Firestore, doc, getDoc, setDoc } from "firebase/firestore";
import { firestoreService } from "../src/services/firestoreService";

// Mock Firestore instance
const mockDb = {} as Firestore;

// Mock the firestoreService with the mockDb
const testFirestoreService = firestoreService;

// Mock implementation for getDoc
jest.mock("firebase/firestore", () => ({
  ...jest.requireActual("firebase/firestore"),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
  doc: jest.fn(),
}));

describe("FirestoreService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test for getDocument
  test("should retrieve a document from a collection", async () => {
    const docId = "testDoc";
    const collectionPath = "testCollection";
    const mockData = { id: docId, name: "Test Document" };

    // Arrange: Mock the behavior of getDoc to return a document snapshot
    (getDoc as jest.Mock).mockResolvedValue({
      exists: () => true,
      data: () => mockData,
    });
    (doc as jest.Mock).mockReturnValue({}); // Mock the return of doc

    // Act: Call the getDocument method
    const result = await testFirestoreService.getDocument(collectionPath, docId);

    // Assert: Verify that the correct data is returned
    expect(result).toEqual(mockData);
    expect(doc).toHaveBeenCalledWith(expect.anything(), collectionPath, docId);
    expect(getDoc).toHaveBeenCalled();
  });
});