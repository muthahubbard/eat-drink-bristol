import data from '../data';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS( data );

const markersReducer = (state = defaultState.toJS(), action) => {
  return state;
};

export default markersReducer;