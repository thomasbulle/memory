import moment from 'moment';

import { UP_TIMER } from 'actions/actionsTypes';

const initialState = {
  timer: '00:00',
};

const setTime = (time) => {
  let formattedTime = moment(time, 'HH:ss').add(1, 'seconds').format('HH:ss');
  formattedTime = formattedTime.split(':');
  if (formattedTime[1] === '00') {
    formattedTime = moment(formattedTime.join(':'), 'HH:ss').add(1, 'hours').format('HH:ss');
  } else {
    formattedTime = formattedTime.join(':');
  }
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