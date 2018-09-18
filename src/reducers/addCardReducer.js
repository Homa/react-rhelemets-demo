import { ADD_CARD, REMOVE_CARD, MAX_NUM, FETCH_CARDS_DATA } from '../actions/types';

export default function(state = {
  allCards: [],
  addedCards: [],
  index: 0,
  max: 3,
}, action) {

  switch (action.type) {
    case FETCH_CARDS_DATA:
      return {...state, allCards: action.payload.cards};

    case ADD_CARD:
      let index = action.payload;

      if (index < state.max) {
        return {...state, index: parseInt(index, 10) + 1};
      } else {
        return state;
      }

    case REMOVE_CARD:
      return {...state, index: parseInt(action.payload, 10) - 1};

    default:
      return state;
  }
}
