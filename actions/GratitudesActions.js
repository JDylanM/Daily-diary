import {
  TEXT_UPDATE,
  SAVE_GRATTITUDE
} from './types';


export const textUpdate = (text) => {
  return { type: TEXT_UPDATE, payload: text };
};

export const saveGratitude = (text) => {
  const date = new Date();
  return { type: SAVE_GRATTITUDE, payload: { text, date } };
};
