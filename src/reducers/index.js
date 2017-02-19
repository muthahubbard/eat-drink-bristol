import { combineReducers } from 'redux';
import markersReducer from './markers-reducer';

const reducers = combineReducers(
  {
    markers: markersReducer
  }
);

export default reducers;