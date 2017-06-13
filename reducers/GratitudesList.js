import { REHYDRATE } from 'redux-persist/constants';
import { SAVE_GRATTITUDE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.gratitudes || [];
    case SAVE_GRATTITUDE:
      return [...state, { text: action.payload.text, date: action.payload.date }];
    default:
      return state;
  }
};
