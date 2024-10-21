// src/App.js

import React, { useState } from 'react';
import ReviewsComponent from './components/ReviewsComponent';
import SubmitReviewComponent from './components/SubmitReviewComponent';
import UserCounter from './components/UserCounter';
import View from './components/View';
import footer from './components/footer';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); 
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
