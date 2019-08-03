import { ADD_CLICK } from '../actions/actionsTypes';

const initialState = {
  clicks: 0,
};

const player = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CLICK:
      return {
        ...state,
        clicks: state.clicks + 1,
      };
    default:
      return state;
  };
};

export default player;