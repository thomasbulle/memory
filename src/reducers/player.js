import { SET_DECK, ADD_CLICK_COUNTER, ON_RETURN_CARD } from 'actions/actionsTypes';

const initialState = {
  clicks: 0,
  deck: [],
};

const player = (state = initialState, action) => {
  switch(action.type) {
    case SET_DECK:
      return {
        ...state,
        deck: action.deck,
      }
    case ADD_CLICK_COUNTER:
      return {
        ...state,
        clicks: state.clicks + 1,
      };
    case ON_RETURN_CARD:
      return {
        ...state,
        deck: [
          ...state.deck.slice(0, action.id),
          {
            ...state.deck[action.id],
            isHidden: false,
          },
          ...state.deck.slice(action.id + 1)
        ],
      }
    default:
      return state;
  };
};

export default player;