import {
  TEXT_UPDATE
} from '../actions/types';

const INITIAL_STATE = { text: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEXT_UPDATE:
      return { text: action.payload };
    default:
      return state;
  }
};
