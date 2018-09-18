import { FETCH_CARDS_DATA } from '../actions/types';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_CARDS_DATA:
      return {...state, ...action.payload};

    default:
      return state;
  }
}
