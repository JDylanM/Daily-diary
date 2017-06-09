import { combineReducers } from 'redux';
import GratitudeInputReducer from './GratitudeInputReducer';
import GratitudeList from './GratitudesList';

export default combineReducers({
  text: GratitudeInputReducer,
  gratitudes: GratitudeList
});
