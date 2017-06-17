import { REHYDRATE } from 'redux-persist/constants';
import {
  SAVE_GRATTITUDE,
  UPDATE_GRATITUDE,
  DELETE_GRATITUDE
} from '../actions/types';

//Test data here atm!
const INITIAL_STATE = [{ text: 'TESTDATA', date: '2017-06-13', key: 10000 }];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.gratitudes || INITIAL_STATE;
    case SAVE_GRATTITUDE: {
      const key = state.length;
      return [...state, { text: action.payload.text, date: action.payload.date, key }];
    }
    case UPDATE_GRATITUDE: {
      return state.map(item => {
        if (item.key !== action.payload.key) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            text: action.payload.text
        };
      });
    }
    case DELETE_GRATITUDE: {
      const key = action.payload;
      return state.filter(gratitude => gratitude.key !== key);
    }
    default:
      return state;
  }
};
