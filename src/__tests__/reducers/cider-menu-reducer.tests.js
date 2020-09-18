import ciderMenuReducer from '../../reducers/cider-menu-reducer';

describe('ciderMenuReducer', () => {

  let action;

  const currentState = {
    1: {
      name:'Blackberry Cider',
      brewery: 'Avid',
      alcoholContent: 6.2,
      price: 6,
      remainingPints: 124,
      id: 1 },
    2: {
      name:'Dry Cider',
      brewery: 'Portland Cider Company',
      alcoholContent: 5,
      price: 5.5,
      remainingPints: 124,
      id: 2 }
    }


  const ciderData = {
    // type: 'ADD_CIDER',
    name:"Blackberry Cider",
    brewery:"Avid",
    alcoholContent: 6.2,
    price: 6,
    remainingPints: 124,
    id: 1
  }

  // test('Should return default state if there is no action type passed into the reducer', () => {
  //   expect(ciderMenuReducer({}, { type: null })).toEqual({});
  // });

  test('Should successfully add a new cider object to the menu', () => {
    const { name, brewery, alcoholContent, price, remainingPints, id } = ciderData;
    action = {
      type: 'ADD_CIDER',
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

  // test('Should successfully delete a ciderMenu object', () => {
  //   action = {
  //     type: 'DELETE_CIDER',
  //     id: 1
  //   };

  //   expect(ciderMenuReducer(currentState, action)).toEqual({
  //     2: {
  //       name:'Dry Cider',
  //       brewery: 'Portland Cider Company',
  //       alcoholContent: 5,
  //       price: 5.5,
  //       remainingPints: 124,
  //       id: 2
  //     }
  //   });
  // });

});