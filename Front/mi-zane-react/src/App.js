// src/App.js

import React, { useState } from 'react';
import ReviewsComponent from './components/ReviewsComponent';
import SubmitReviewComponent from './components/SubmitReviewComponent';
import UserCounter from './components/UserCounter';
import View from './components/View';
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Change this based on your authentication logic
  document.getElementById('root') // Este es el div del HTML
  return (
    <div>
      <View />
      <UserCounter />
      <SubmitReviewComponent isSignedIn={isSignedIn} />
      <ReviewsComponent />
      
    </div>
  );
};

export default App;
