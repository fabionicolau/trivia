import { SET_QUESTIONS } from '../actions/types';

export const initialState = {
  questions: [{
    category: '',
    question: '',
    correctAnsw: '',
    incorrectAnswers: [],
    type: '',
    difficulty: '',
  }],
};

export const game = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_QUESTIONS:
    return { ...state, questions: payload };
  default:
    return state;
  }
};
