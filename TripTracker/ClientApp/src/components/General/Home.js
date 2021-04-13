import React, { useState } from 'react';

import { AddTrip } from '../AddTrip/AddTrip';

export const Home = () => {
  const [formProgress, setFormProgress] = useState(0);

  const advanceForm = () => setFormProgress(formProgress + 1);
  
  switch(formProgress) {
    case 1:
      return <h1>next step</h1>
    case 0:
    default:
      return <AddTrip advanceForm={advanceForm} />;
  };
};