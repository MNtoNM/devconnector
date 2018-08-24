import { GET_ERRORS } from '../actions/types';

const initialState = {}; // the errors object itself

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
