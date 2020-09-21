 const redux = require("redux");

//getting createstore function
const createStore = redux.createStore;

//initialSate

var initialState = {
    counter:0
}

//reducer
const reducerFuncton = (state=initialState,action)=>{
    if(action.type==='AUTO_INC'){
        console.log(state.counter+ "inside auto inc");
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type==='ADD_VAL'){
         console.log(state.counter + "inside add val");
         console.log(action.value + "inside add val ction val");
         return {
            ...state,
            counter: state.counter + action.value
        };
    }
 return state;
}
//creating store
const store= createStore(reducerFuncton);
 console.log("After Create Store"+JSON.stringify(store.getState()))




//Subscribe
store.subscribe(()=>{
    console.log("Subscribe"+JSON.stringify(store.getState()))
})

//dispatcher- (subscription should be before dispatch )

store.dispatch({type:'AUTO_INC'});
console.log("AfterDispatch 'AUTO_INC'"+JSON.stringify(store.getState()))
store.dispatch({type:'ADD_VAL',value:5});
 console.log("AfterDispatch 'ADD_VAL'"+JSON.stringify(store.getState()))
//can pass values as below aslo
//store.dispatcher({type:'AUTO_INC',payload:{value:5}});




