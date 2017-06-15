import { REHYDRATE } from 'redux-persist/constants';
import { SAVE_GRATTITUDE } from '../actions/types';

//Test data here atm!
const INITIAL_STATE = [{ text: 'TESTDATA', date: '2017-06-13', key: 10000 }];

export default (state = INITIAL_STATE, action) => {
  const key = state.length;
  switch (action.type) {
    case REHYDRATE:
      return action.payload.gratitudes || INITIAL_STATE;
    case SAVE_GRATTITUDE:
      return [...state, { text: action.payload.text, date: action.payload.date, key }];
    default:
      return state;
  }
};
