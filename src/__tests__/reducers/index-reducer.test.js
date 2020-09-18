//file responsible for retrieving logic from other files and importing into one big module is known as a module index, so we name it index-reducer

import rootReducer from '../../reducers/index';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainCiderMenu: {},
      formVisibleOnPage: false
    });
  });

});