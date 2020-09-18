export default(state = {}, action) => {
  const { name, brewery, alcoholContent, price, remainingPints, id } = action;
  switch(action.type) {
    case 'ADD_CIDER':
      return Object.assign({}, state, {
        [id] : {
          name: name,
          brewery:brewery,
          alcoholContent: alcoholContent,
          price: price,
          remainingPints: remainingPints,
          id: id
        }
      });
      case 'DELETE_CIDER':
        const newState = {...state};
        delete newState[id];
        return newState; 
      default: 
      return state;
  }
};