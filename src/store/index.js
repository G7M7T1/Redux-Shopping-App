import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: 0},
    reducers: {
        increment(state, action) {
            state.counter += action.payload;
        },
        decrement(state, action) {
            state.counter -= action.payload;
        },
        addValue(state, action) {
            state.counter += action.payload;
        },
    }
})

export const actions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store
