import { SET_USER } from '../actions/types';

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
  default:
    return state;
  }
}

export default player;
