import { FETCH_CARDS_DATA} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CARDS_DATA:
      return action.payload || false;
    default:
      return state;
  }
}
