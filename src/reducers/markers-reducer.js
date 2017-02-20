import data from '../data';

const defaultState = {
  markers: data,
  hoveredRowIndex: -1
};

const markersReducer = (state = defaultState, action) => {

  if(action.type === 'DO_SOMETHING') {
    return Object.assign({}, state, {hoveredRowIndex: 2});
  }

  return state;
};

export default markersReducer;