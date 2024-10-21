// src/components/ReviewsComponent.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const loadReviews = async () => {
    try {
      const response = await axios.get('http://localhost:8000/GetReviews');
      setReviews(response.data.data); // Acceder correctamente a los datos
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div>
      <h2>Posted Reviews</h2>
      {error && <p>Error: {error}</p>}
      <div>
      {reviews.map(review => (
          review.review ? ( 
            <div key={review.id} className="review">
              <h3>{review.Email} dice:</h3>
              <p>{review.review}</p> 
              <br></br>
            </div>
          ) : null 
        ))}
      </div>
    </div>
  );
};

export default ReviewsComponent;
