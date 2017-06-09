import {
  SAVE_GRATTITUDE
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_GRATTITUDE:
      return [...state, { text: action.payload.text, date: action.payload.date }];
    default:
      return state;
  }
};
