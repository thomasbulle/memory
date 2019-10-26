// ACTIONS
export const upTimer = () => ({
  type: 'UP_TIMER',
});

export const setDeck = (deck) => ({
  type: 'SET_DECK',
  deck,
});

export const addClickCounter = () => ({
  type: 'ADD_CLICK_COUNTER',
});

export const onReturnCard = (id) => ({
  type: 'ON_RETURN_CARD',
  id,
});