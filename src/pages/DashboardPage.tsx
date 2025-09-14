import React, { useEffect, useState } from "react";
import { firestoreService } from "../services/firestoreService";

interface Feedback {
message: string;
submittedAt: {
seconds: number;
nanoseconds: number;
};
}

const DashboardPage: React.FC = () => {
const [feedback, setFeedback] = useState<Feedback[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchFeedback = async () => {
try {
const feedbackData = await firestoreService.getCollection<Feedback>(
"feedback"
);
setFeedback(feedbackData);
} catch (error) {
console.error("Error fetching feedback:", error);
} finally {
setLoading(false);
}
};

fetchFeedback();
}, []);

return (
<div>
<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
<p className="mb-4">This is the protected dashboard page.</p>

  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">User Feedback</h2>
    {loading ? (
      <p>Loading feedback...</p>
    ) : feedback.length > 0 ? (
      <ul className="space-y-4">
        {feedback.map((item, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <p className="text-gray-700">{item.message}</p>
            <p className="text-sm text-gray-500 mt-2">
              Submitted at:{" "}
              {new Date(
                item.submittedAt.seconds * 1000
              ).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No feedback submitted yet.</p>
    )}
  </div>
</div>
);
};

export default DashboardPage;