import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'
import checkValidCityReducer from './checkValidCityReducer';
import dateSelectionReducer from './dateSelectionReducer';

export default combineReducers({
    fetch: fetchReducer,
    checkCity: checkValidCityReducer,
    dateSelection: dateSelectionReducer

})