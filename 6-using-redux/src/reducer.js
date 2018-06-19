import { ADD_COUNT } from './action';

export function calculate(state = { count: 1 }, action) {
  switch (action.type) {
    case ADD_COUNT:
      const newState = Object.assign({}, state, { count: state.count + action.count });
      return newState;
    default:
      return state;
  }
}