const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOKED = "CAKE_RESTOKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOKED = "ICECREAM_RESTOKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
function restokeCake() {
  return {
    type: CAKE_RESTOKED,
    quant: 1,
  };
}
function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    quantity: 1,
  };
}
function restokeIceCream() {
  return {
    type: ICECREAM_RESTOKED,
    quant: 1,
  };
}

// const intialState = {
//     numOfCakes :10,
//     numOfIceCream:10,
// }

const cakeintialState = {
  numOfCakes: 10,
};
const iceCreamintialState = {
  numOfIceCream: 10,
};



const cakereducer = (state = cakeintialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quant,
      };
    default:
      return state;
  }
};
const iceCreamereducer= (state = iceCreamintialState,action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream+1,
            };
        case ICECREAM_RESTOKED:
            return {
                ...state,
                numOfIceCream:state.numOfIceCream-1,
            };
            default:
                return state;
    }
}

const rootReducer = combineReducer({
  cake: cakereducer,
  iceCream: iceCreamereducer,
});

const store = createStore(rootReducer);
console.log("intialState", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log(" updated state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restokeCake());
store.dispatch(restokeCake());
store.dispatch(restokeCake());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restokeIceCream());

unsubscribe();
