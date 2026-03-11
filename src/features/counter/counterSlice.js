import { createSlice } from "@reduxjs/toolkit";

const savedValue = localStorage.getItem("counter")

const initialState = {
    value: savedValue ? Number(savedValue) : 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { state.value += 1 },

        decrement: (state) => { state.value -= 1 },

        reset: (state) => { state.value = 0 },

        incrementByAmount: (state, action) => { state.value += action.payload }
    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer