import { combineReducers } from 'redux';

// Reducers
import player from './player';
import gameStats from './gameStats';

const allReducers = combineReducers({
  player,
  gameStats
});

export default allReducers;