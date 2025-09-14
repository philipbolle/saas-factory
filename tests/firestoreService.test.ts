// tests/firestoreService.test.ts
import { doc, getDoc } from "firebase/firestore";
import { firestoreService } from "../src/services/firestoreService";

const testFirestoreService = firestoreService;

// Mock implementation for getDoc
jest.mock("firebase/firestore", () => ({
  ...jest.requireActual("firebase/firestore"),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
  doc: jest.fn(),
}));

// Mock the config module
jest.mock('../src/config');

describe("FirestoreService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test for getDocument
  test("should retrieve a document from a collection", async () => {
    const docId = "testDoc";
    const collectionPath = "testCollection";
    const mockData = { id: docId, name: "Test Document" };

    (getDoc as jest.Mock).mockResolvedValue({
      exists: () => true,
      data: () => mockData,
    });
    (doc as jest.Mock).mockReturnValue({}); // Mock the return of doc

    const result = await testFirestoreService.getDocument(collectionPath, docId);

    expect(result).toEqual(mockData);
    expect(doc).toHaveBeenCalledWith(expect.anything(), collectionPath, docId);
    expect(getDoc).toHaveBeenCalled();
  });
});