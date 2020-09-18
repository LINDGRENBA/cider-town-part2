import formVisibleReducer from './form-visible-reducer';
import ciderMenuReducer from './cider-menu-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainCiderList: ciderMenuReducer
});


export default rootReducer;