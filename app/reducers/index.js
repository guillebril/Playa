import { combineReducers } from 'redux';
import * as visorReducer from './visorReducer'

export default combineReducers (Object.assign(
  visorReducer,

));
