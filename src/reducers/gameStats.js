import moment from 'moment';

import { UP_TIMER } from '../actions/actionsTypes';

const initialState = {
  timer: "00:00",
};

const setTime = (time) => {
  const formattedTime = moment(time, 'HH:ss').add(1, 'seconds').format('HH:ss');
  return formattedTime;
};

const gameStats = (state = initialState, action) => {
  switch(action.type) {
    case UP_TIMER:
      return {
        ...state,
        timer: setTime(state.timer),
      };
    default:
      return state;
  };
};

export default gameStats;