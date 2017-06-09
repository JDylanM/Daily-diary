import {
  TEXT_UPDATE
} from './types';


export const textUpdate = (text) => {
  return { type: TEXT_UPDATE, payload: text };
};
