import { combineReducers } from 'redux';
import GratitudesReducer from './GratitudesReducer';

export default combineReducers({
  gratitudes: GratitudesReducer
});
