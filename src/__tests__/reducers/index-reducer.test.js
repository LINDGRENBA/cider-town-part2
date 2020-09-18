//file responsible for retrieving logic from other files and importing into one big module is known as a module index, so we name it index-reducer

import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ciderMenuReducer from '../../reducers/cider-menu-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainCiderMenu: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of ciderMenuReducer matches root reducer', () => {
    expect(store.getState().mainCiderMenu).toEqual(ciderMenuReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

});