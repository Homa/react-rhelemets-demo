import { combineReducers } from 'redux';
import cardsDataReducer from './cardsDataReducer';
import addCardReducer from './addCardReducer';

export default combineReducers({
  cardsBand: cardsDataReducer,
  addCards: addCardReducer
});
