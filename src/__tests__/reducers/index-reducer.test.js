import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ciderMenuReducer from '../../reducers/cider-menu-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainCiderList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of ciderMenuReducer matches root reducer', () => {
    expect(store.getState().mainCiderMenu).toEqual(ciderMenuReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of ciderMenuReducer matches root reducer', () => {
    const action = {
      type: 'ADD_CIDER',
      name:"Blackberry Cider",
      brewery:"Avid",
      alcoholContent: 6.2,
      price: 6,
      remainingPints: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainCiderMenu).toEqual(ciderMenuReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});