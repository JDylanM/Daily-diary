import {
  TEXT_UPDATE,
  SAVE_GRATTITUDE,
  UPDATE_GRATITUDE,
  DELETE_GRATITUDE
} from './types';


export const textUpdate = (text) => {
  return { type: TEXT_UPDATE, payload: text };
};

export const saveGratitude = (text) => {
  let date = new Date();
  date = date.toISOString().slice(0, 10);
  return { type: SAVE_GRATTITUDE, payload: { text, date } };
};

export const updateGratitude = (text, key) => {
  return { type: UPDATE_GRATITUDE, payload: { text, key } };
};

export const deleteGratitude = (key) => {
  return { type: DELETE_GRATITUDE, payload: key };
};
