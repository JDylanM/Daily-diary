import {
  TEXT_UPDATE,
  SAVE_GRATTITUDE,
  UPDATE_GRATITUDE
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
  console.log('HIT DÅ?');
  return { type: UPDATE_GRATITUDE, payload: { text, key } };
};
