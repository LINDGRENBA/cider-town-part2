export default(state = {}, action) => {
  const { name, brewery, alcoholContent, price, remainingPints, id } = action;
  switch(action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id] : {
          name:"Blackberry Cider",
          brewery:"Avid",
          alcoholContent: 6.2,
          price: 6,
          remainingPints: 124,
          id: 1
        }
      });
      default:
      return state;
  }
};