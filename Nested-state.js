const redux = require('redux')

const intialState = {
    name: 'prayatna',
    address :{
        street:'123',
        state:'UP',
        city:'G.Noida'

    },
}

const UPDATE_STREET = 'UPDATE_STREET';
const  updatedstreet = (street) => {
    return{
        type:UPDATE_STREET,
        payload:street,
    }
}

const reducer = (state = intialState, action) => {
    console.log('props',state,action);
    
    switch(action.type) {
        case UPDATE_STREET:
            return {
                    ...state,
                    address: {
                        ...state.address,...action.payload
                } }
    
        default:return state
    } 
}

const store = redux.createStore(reducer);
console.log('initial State', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('update state', store.getState());
    

})

store.dispatch(updatedstreet({ city: '456 main st'}))
unsubscribe();

