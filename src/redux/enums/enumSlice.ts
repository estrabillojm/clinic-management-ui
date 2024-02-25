import { createSlice } from "@reduxjs/toolkit";

type Option = {
    label: string;
    value: string | number;
}

// TS Interface
interface State {
    gender: Option[];
    status: Option[];
}
// ADD interface if necessary


// END OF TS Interface

export const initialState : State = {
    gender: [
        {
            label: "Male",
            value: "Male",
        },
        {
            label: "Female",
            value: "Female",
        }
    ],
    status: [
        {
            label: "Single",
            value: "Single",
        },
        {
            label: "Married",
            value: "Married",
        },
        {
            label: "Divorced",
            value: "Divorced",
        }
    ]
}

export const enumSlice = createSlice({
    name: 'testSuitesSlice',
    initialState,
    reducers: {}
})

export default enumSlice.reducer


