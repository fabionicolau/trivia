import { fetchToken } from '../../services/services';
import { SET_TOKEN, ERROR, LOADING } from './types';

export const action = (type, payload) => ({
  type,
  payload,
});

export const setToken = () => async (dispatch) => {
  dispatch(action(LOADING));
  try {
    const token = await fetchToken();
    if (!token) throw new Error('Erro Token');
    dispatch(action(SET_TOKEN, token));
  } catch (error) {
    dispatch(action(ERROR, error.message));
  }
};
