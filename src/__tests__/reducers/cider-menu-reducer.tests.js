import ciderMenuReducer from '../../reducers/cider-menu-reducer';

discribe('ciderMenuReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ciderMenuReducer({}, { type: null })).toEqual({});
  });

  

});