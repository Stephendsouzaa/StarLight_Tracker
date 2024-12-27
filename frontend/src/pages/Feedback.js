import React, { useState } from 'react';
import { db } from './firebase'; // Ensure the path is correct
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions
import './Feedback.css'; // Make sure this file is imported correctly

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(''); // State to track errors

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading to true
    setError(''); // Reset any previous error messages

    try {
      // Add feedback to Firestore
      const feedbackRef = collection(db, 'feedbacks');
      await addDoc(feedbackRef, {
        feedback,
        timestamp: new Date(),
      });
      setFeedback(''); // Clear feedback text
      alert('Feedback submitted!');
    } catch (error) {
      console.error("Error submitting feedback: ", error);
      setError('Error submitting feedback. Please try again later.'); // Show error message if submission fails
    } finally {
      setLoading(false); // Set loading to false after submission attempt
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { 
      // Submit if "Enter" is pressed without "Shift"
      e.preventDefault(); // Prevent default behavior (new line)
      handleSubmit(e); // Submit feedback
    }
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          onKeyDown={handleKeyPress}  // Handle key press
          placeholder="Your feedback here..."
          required
          className="feedback-textarea"
          autoFocus  // Ensures textarea is focused on load
          rows="5"   // Controls initial visible height
        />
        <button 
          type="submit" 
          className="submit-btn" 
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Submitting...' : 'Submit'}  {/* Button text based on loading state */}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
    </div>
  );
}

export default Feedback;
