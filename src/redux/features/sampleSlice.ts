import { createSlice } from "@reduxjs/toolkit";

// TS Interface
interface State {
    value: number,
}
// ADD interface if necessary


// END OF TS Interface

export const initialState : State = {
    value: 0
}

export const sampleSlice = createSlice({
    name: 'testSuitesSlice',
    initialState,
    reducers: {
        incrementValue: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { incrementValue } = sampleSlice.actions
export default sampleSlice.reducer


