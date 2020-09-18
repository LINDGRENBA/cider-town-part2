export default (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_FORM':
      return !state; //return the opposite of state
    default:
      return state;
  }
}; 