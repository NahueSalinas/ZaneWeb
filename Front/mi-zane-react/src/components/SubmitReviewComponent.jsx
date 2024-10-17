// src/components/SubmitReviewComponent.jsx

import React, { useState } from 'react';
import axios from 'axios';

const SubmitReviewComponent = () => {
  const [reviewText, setReviewText] = useState("");



  const handleReview = async() => {
    try {
      const response = await axios.post('http://localhost:8000/PostReviews', {
        "review": reviewText,
        "email" : Email
      });
      alert("Review created successfully");
  } catch(error) {
    console.error('Error:' + error);
    alert("Problems encountered while posting the review");
  }
}
    
const handleSubmit = (e) => {
  e.preventDefault(); 
  handleReview();
};

  return (
    <div>
      <h2>Submit a Review</h2>
      <textarea
        id="review-text"
        value={reviewText}
        placeholder="Write your review here..."
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitReviewComponent
