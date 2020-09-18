import ciderMenuReducer from '../../reducers/cider-menu-reducer';

describe('ciderMenuReducer', () => {

  let action;
  let ciderData = {
    type: 'ADD_TICKET',
    name:"Blackberry Cider",
    brewery:"Avid",
    alcoholContent: 6.2,
    price: 6,
    remainingPints: 124,
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ciderMenuReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a new cider object to the menu', () => {
    expect(ciderMenuReducer({}, action)).toEqual({
      [id] : {
        type: 'ADD_TICKET',
        name:"Blackberry Cider",
        brewery:"Avid",
        alcoholContent: 6.2,
        price: 6,
        remainingPints: 124,
        id: 1
      }
    });
  });

});