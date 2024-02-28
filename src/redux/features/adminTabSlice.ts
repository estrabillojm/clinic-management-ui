import { createSlice } from "@reduxjs/toolkit";

type Tab = {
    label: string;
}

type State = {
    tabs: Tab[];
    tabSelected: number;
}
// ADD interface if necessary

export const initialState : State = {
    tabs: [
        {
            label: "Personal"
        },
        {
            label: "Contact"
        },
        {
            label: "Access"
        },
    ],
    tabSelected: 0,
}
export const adminTabSlice = createSlice({
    name: 'patientInfoTabSlice',
    initialState,
    reducers: {
        setTabSelected: (state, action) => {
            state.tabSelected = action.payload
        }
    }
})

export const { setTabSelected } = adminTabSlice.actions
export default adminTabSlice.reducer


