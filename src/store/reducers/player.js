import { SET_USER, SET_SCORE, ASSERTIONS } from '../actions/types';

const initialState = {
  name: '',
  gravatarEmail: '',
  assertions: 0,
  score: 0,
};

function player(state = initialState, { type, payload }) {
  switch (type) {
  case SET_USER:
    return {
      ...state,
      ...payload,
    };
  case SET_SCORE:
    return {
      ...state,
      score: payload,
    };
  case ASSERTIONS:
    return {
      ...state,
      assertions: payload,
    };
  default:
    return state;
  }
}

export default player;
