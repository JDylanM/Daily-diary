import {
  TEXT_UPDATE
} from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEXT_UPDATE:
      return action.payload;
    default:
      return state;
  }
};
