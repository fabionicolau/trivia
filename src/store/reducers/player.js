const initialState = {
  name: '',
  gravatarEmail: '',
  assertions: 0,
  score: 0,
};

function player(state = initialState, { type, payload }) {
  switch (type) {
  case 'PROVISORIO':
    return payload;
  default:
    return state;
  }
}

export default player;
