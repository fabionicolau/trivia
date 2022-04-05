import { SET_TOKEN } from '../actions/types';

const token = (state = '', { type, payload }) => {
  switch (type) {
  case SET_TOKEN:
    return payload;
  default:
    return state;
  }
};

export default token;
