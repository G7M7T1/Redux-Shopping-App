import {createStore} from 'redux'

const reducerFunction = (state = {counter: 10}, action) => {
    return state
}

const store = createStore(reducerFunction)


export default store
