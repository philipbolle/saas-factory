import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FeedbackForm from "../../components/FeedbackForm";
import { firestoreService } from "../../services/firestoreService";
import "@testing-library/jest-dom";

// Mock the firestoreService
jest.mock("../../services/firestoreService");

// Mock the config module
jest.mock("../../config");

const mockedFirestoreService = firestoreService as jest.Mocked<
  typeof firestoreService
>;

describe("FeedbackForm Component", () => {
test("renders the form and allows submitting feedback", async () => {
mockedFirestoreService.setDocument.mockResolvedValue();

render(
  <MemoryRouter>
    <FeedbackForm />
  </MemoryRouter>
);

const textarea = screen.getByPlaceholderText("Your feedback...");
const submitButton = screen.getByText("Submit Feedback");

expect(textarea).toBeInTheDocument();
expect(submitButton).toBeInTheDocument();

await act(async () => {
  fireEvent.change(textarea, { target: { value: "This is a test feedback message." } });
});

await act(async () => {
  fireEvent.click(submitButton);
});

expect(mockedFirestoreService.setDocument).toHaveBeenCalledWith(
  "feedback",
  expect.stringContaining("feedback-"),
  {
    message: "This is a test feedback message.",
    submittedAt: expect.any(Date),
  }
);

expect(
  screen.getByText("Thank you for your feedback!")
).toBeInTheDocument();
});
});