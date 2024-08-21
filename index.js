const redux = require ('redux')
const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOKED = "CAKE_RESTOKED"

function orderCake() {
    return{
        type:CAKE_ORDERED,
        quantity:1,
    }
}
function restokeCake() {
    return{
        type:CAKE_RESTOKED,
        quant:1,
    }
}

const intialState = {
    numOfCakes :10
}

const reducer =( state =intialState,action) => {
    switch (action.type) {
        case  CAKE_ORDERED:
        return{
            ...state,
            numOfCakes: state.numOfCakes -1 
        }
        case CAKE_RESTOKED:
        return{
            ...state,
            numOfCakes: state.numOfCakes + action.quant
        }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('intialState', store.getState());

 const unsubscribe = store.subscribe(() => console.log(' updated state', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restokeCake())
store.dispatch(restokeCake())
store.dispatch(restokeCake())




unsubscribe()
