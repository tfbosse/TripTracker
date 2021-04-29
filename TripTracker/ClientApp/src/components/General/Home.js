import React, { useReducer } from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { AddTrip } from '../AddTrip/AddTrip';
import { AddLegEnd } from '../AddTrip/AddLegEnd';
import { AddLegStart } from '../AddTrip/AddLegStart';
import { AddLegVehicle } from '../AddTrip/AddLegVehicle';

const reducer = (state, action) => {
  return {
    ...state,
    [action.fieldName]: action.value
  };
};

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, {
    isFirstLeg: true
  });

  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`} render={() => <AddTrip homeDispatch={dispatch} />} />
      <Route path={`${match.url}/addStart`} render={() => <AddLegStart homeState={state} />} />
      <Route path={`${match.url}/addEnd`} render={() => <AddLegEnd homeState={state} />} />
      <Route path={`${match.url}/addVehicle`} render={() => <AddLegVehicle homeState={state} homeDispatch={dispatch} />} />
    </Switch>
  );
};