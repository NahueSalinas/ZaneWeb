// src/components/SubmitReviewComponent.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmitReviewComponent = ({ isSignedIn }) => {
  const [reviewText, setReviewText] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async () => {
    if (!isSignedIn) {
      alert('You must be signed in to submit a review.');
      return;
    }

    // Log the review being submitted
    console.log('Submitting review:', reviewText);

    try {
      const response = await axios.post('http://localhost:8000/PostReviews', {
        review: reviewText,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSuccessMessage(response.data.message);
      setReviewText(''); // Clear the textarea after submission
      console.log('Review submitted successfully:', response.data.message);
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      setError(errorMessage);
      console.error('Error:', errorMessage);
    }
  };

  const updateReviewText = (text) => {
    setReviewText(text);
  };

  useEffect(() => {
    // Expose functions to the global window object
    window.handleSubmitReview = handleSubmit;
    window.updateReviewText = updateReviewText;

    // Clean up to avoid memory leaks
    return () => {
      delete window.handleSubmitReview;
      delete window.updateReviewText;
    };
  }, [handleSubmit]);

  return (
    <div>
      <h2>Submit a Review</h2>
      <textarea
        id="review-text"
        value={reviewText}
        onChange={(e) => updateReviewText(e.target.value)}
        placeholder="Write your review here..."
      />
    </div>
  );
};

export default SubmitReviewComponent;
