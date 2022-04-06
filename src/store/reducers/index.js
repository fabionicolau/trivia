import { combineReducers } from 'redux';

import player from './player';
import { game } from './game';
import token from './token';

const rootReducer = combineReducers({ player, token, game });

export default rootReducer;
