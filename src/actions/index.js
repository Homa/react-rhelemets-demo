import { FETCH_CARDS_DATA, ADD_CARD, REMOVE_CARD } from './types';
import cardsBand from '../fakeData/cardsBand';

export const fetchCardsData = () => {
  return async (dispatch) => {
    await window.setTimeout(()=>{}, 1000);
    dispatch(
      {
        type: FETCH_CARDS_DATA,
        payload: cardsBand
      }
    );
  }
}

export const addCard = (index) => {
  return {
    type: ADD_CARD,
    payload: index
  }
}

export const removeCard = (index) => {
  return {
    type: REMOVE_CARD,
    payload: index
  }
}
