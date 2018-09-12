import { FETCH_CARDS_DATA } from './types';
import data from '../fakeData/cardsBand'

export const fetchCardsData = () => {
  return async (dispatch) => {
    await window.setTimeout(()=>{}, 1000);
    dispatch({ type: FETCH_CARDS_DATA, payload: data });
  }
}
