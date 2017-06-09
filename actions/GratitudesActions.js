import {
  GRATITUDE_TEXT_UPDATE
} from './types;'


export const gratitudeTextUpdate = (text) => {
  return { type: GRATITUDE_TEXT_UPDATE, payload: text }
};
