import { REHYDRATE } from 'redux-persist/constants';
import { SAVE_GRATTITUDE } from '../actions/types';

const INITIAL_STATE = [{ text: 'TESTDATA', date: '2017-06-13' }];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.gratitudes || INITIAL_STATE;
    case SAVE_GRATTITUDE:
      return [...state, { text: action.payload.text, date: action.payload.date }];
    default:
      return state;
  }
};
