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
            label: "Person to Notify"
        },
        {
            label: "Vital Signs"
        },
        {
            label: "History"
        },
        {
            label: "SOAP"
        },
        {
            label: "Physician"
        },
    ],
    tabSelected: 0,
}
export const patientInfoTabSlice = createSlice({
    name: 'patientInfoTabSlice',
    initialState,
    reducers: {
        setTabSelected: (state, action) => {
            state.tabSelected = action.payload
        }
    }
})

export const { setTabSelected } = patientInfoTabSlice.actions
export default patientInfoTabSlice.reducer


