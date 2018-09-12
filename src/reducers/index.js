import { combineReducers } from 'redux';
import dataReducer from './cardsDataReducer';

export default combineReducers({
  data: dataReducer
});
