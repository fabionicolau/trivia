import { SET_QUESTIONS, COUNTDOWN } from '../actions/types';

export const initialState = {
  questions: [{
    category: '',
    question: '',
    correctAnsw: '',
    incorrectAnswers: [],
    type: '',
    difficulty: '',
  }],
  time: 30,
};

export const game = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_QUESTIONS:
    return { ...state, questions: payload };
  case COUNTDOWN:
    return { ...state, time: payload };
  default:
    return state;
  }
};
