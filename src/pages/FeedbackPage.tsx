import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Submit Feedback</h1>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackPage;