import { combineReducers } from 'redux';
import markersReducer from './markers-reducer';

const reducers = combineReducers(
  {
    mapData: markersReducer
  }
);

export default reducers;