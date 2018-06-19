import { ADD_COUNT, REQUEST_CURRENT_TIME, SET_CURRENT_TIME } from './action';

export function calculate(state = { count: 1, currentTime: '' }, action) {
  switch (action.type) {
    case ADD_COUNT:
      return Object.assign({}, state, { count: state.count + action.count });
    case REQUEST_CURRENT_TIME:
      return Object.assign({}, state, { currentTime: 'loading...' });
    case SET_CURRENT_TIME:
      return Object.assign({}, state, { currentTime: action.currentTime });
    default:
      return state;
  }
}