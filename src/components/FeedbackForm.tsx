import React, { useState } from 'react';
import { firestoreService } from '../services/firestoreService';

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      try {
        await firestoreService.setDocument('feedback', `feedback-${Date.now()}`, {
          message: feedback,
          submittedAt: new Date(),
        });
        setFeedback('');
        setSubmitted(true);
      } catch (error) {
        console.error("Error submitting feedback:", error);
      }
    }
  };

  if (submitted) {
    return <p className="text-green-500">Thank you for your feedback!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Your feedback..."
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;