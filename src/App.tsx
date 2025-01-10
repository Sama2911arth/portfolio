import React from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';
import Features from './Components/Features';

import Awards from './Components/Awards';
import LearningJourney from './Components/LearningJourney';
import StudentReviews from './Components/StudentReviews';
import Teachers from './Components/Teachers';
import Social from './Components/Social';
import Enquiry from './Components/Enquiry';

function App() {
  return (
    <>
      <FirstPage />
      <StudentReviews />
      <LearningJourney />
      <Awards />


      <Teachers />

      <Enquiry />
      <Social />
    </>
  )
}

export default App