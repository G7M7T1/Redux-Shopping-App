import {createStore} from 'redux'

const reducerFunction = (state = {counter: 10}, action) => {
    if (action.type === "INC") {
        return {counter: state.counter + 1}
    }

    if (action.type === "DEC") {
        return {counter: state.counter - 1}
    }

    if (action.type === "ADD") {
        return {counter: state.counter + action.payload}
        console.log(action)
    }

    return state
}

const store = createStore(reducerFunction)


export default store
