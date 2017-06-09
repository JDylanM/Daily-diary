import { combineReducers } from 'redux';
import GratitudeInputReducer from './GratitudeInputReducer';

export default combineReducers({
  text: GratitudeInputReducer
});
