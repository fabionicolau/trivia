import {
  DECREMENT,
  INIT_COUNTER,
  PAUSE_TIMER,
  SET_INTERVAL_ID,
  SET_QUESTIONS,
  IS_SELECTED_ANSWER,
  RESET_TIMER,
} from '../actions/types';

export const initialState = {
  questions: [{
    category: '',
    question: '',
    correctAnsw: '',
    incorrectAnswers: [],
    type: '',
    difficulty: '',
  }],
  timer: {
    isPlaying: false,
    counter: 30,
    id: null,
  },
  isSelectedAnswer: false,
};

export const game = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_QUESTIONS:
    return { ...state, questions: payload };
  case SET_INTERVAL_ID:
    return { ...state, timer: { ...state.timer, id: payload } };
  case INIT_COUNTER:
    return { ...state, timer: { ...state.timer, isPlaying: true } };
  case PAUSE_TIMER:
    return { ...state, timer: { ...state.timer, isPlaying: false, id: null } };
  case RESET_TIMER:
    return { ...state, timer: { ...state.timer, isPlaying: true, counter: 30, id: null } };
  case DECREMENT:
    return {
      ...state,
      timer: {
        ...state.timer, counter: state.timer.counter - 1,
      },
    };
  case IS_SELECTED_ANSWER:
    return { ...state, isSelectedAnswer: payload };
  default:
    return state;
  }
};
