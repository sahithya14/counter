const initialState = {
    counter:0
} 
const reducer=(state = initialState,action) => {
    switch( action.type) {
        case "INCREMENT":
          var newState= Object.assign({},state);
          newState.counter=state.counter + 1;
          return newState
          case "DECREMENT":
          return {
              ...state,
              counter:state.counter - 1
          }
          case "ADD":
          return {
               ...state,
              counter:state.counter + action.val
          }
          case "SUB":
          return {
               ...state,
              counter:state.counter - action.val
          }
        default:
             return state;
    }
   
}

export default reducer;



// ways to update the state immutably- check INCREMENT, decrement are two different types

// like setState here old state(other properties along with updated one) is not attached to new state, 
//so only state which we returned is passed


/*
accessing state immutably 
state.first.second[someId].fourth might look like:

function updateVeryNestedField(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}

*/