import React, { useState } from 'react';

import { AddTrip } from '../AddTrip/AddTrip';
import { AddLegEnd } from '../AddTrip/AddLegEnd';
import { AddLegStart } from '../AddTrip/AddLegStart';
import { AddLegVehicle } from '../AddTrip/AddLegVehicle';

export const Home = () => {
  const [formProgress, setFormProgress] = useState(0);
  const [isFirstLeg, setIsFirstLeg] = useState(true);

  const advanceForm = () => setFormProgress(formProgress + 1);

  const addNextLeg = () => {
    setFormProgress(1);
    setIsFirstLeg(false);
  }
    
  const resetForm = () => {
    setFormProgress(0);
    setIsFirstLeg(true);
  }

  switch(formProgress) {
    case 3:
      return <AddLegVehicle addNextLeg={addNextLeg} resetForm={resetForm} isFirstLeg={isFirstLeg} />;
    case 2:
      return <AddLegEnd advanceForm={advanceForm} isFirstLeg={isFirstLeg} />;
    case 1:
      return <AddLegStart advanceForm={advanceForm} isFirstLeg={isFirstLeg} />;
    case 0:
      return <AddTrip advanceForm={advanceForm} />;
    default:
      resetForm();
  };
};