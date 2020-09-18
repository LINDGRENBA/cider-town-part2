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
    const { name, brewery, alcoholContent, price, remainingPints, id } = ciderData;
    action = {
      type: 'ADD_TICKET',
      name: name,
      brewery: brewery,
      alcoholContent: alcoholContent,
      price: price,
      remainingPints: remainingPints,
      id: id
    };

    expect(ciderMenuReducer({}, action)).toEqual({
      [id] : {
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