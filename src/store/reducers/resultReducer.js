const initialState = {
    results:[]
} 
const resultReducer = (state = initialState,action) => {
    switch( action.type) {
          case "STORE_RESULT":
          return {
               ...state,
              results:state.results.concat({id:new Date(),resValue:action.ctrVal}) 
              //we are not using push because it modifies the original array. whereas concat creates new array and
              //action.ctrVal - is passed as an action because in reducer we dont have access for global state "ctr"
          }
           case "DEL_RESULT":
           //Modifying array immutably
           //Method 1: 
           //const id=2;
           //const newArray=[...state.result];
           //newArray.slice(id,1);
           //Method 2:
           var newArray = state.results.filter((resultObj)=>{
                 return resultObj.id !== action.resultId
           })
          return {
               ...state,
              results:newArray
           }
        default:
             return state;
    }
   
}

export default resultReducer;




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