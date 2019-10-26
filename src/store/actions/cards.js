// ActionsTypes
import { SET_DECK, ON_RETURN_CARD } from './actionsTypes';


export const setDeck = (deck) => ({
  type: SET_DECK,
  deck,
});

export const onReturnCard = (id) => ({
  type: ON_RETURN_CARD,
  id,
});
