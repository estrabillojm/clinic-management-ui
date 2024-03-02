import { createSlice } from "@reduxjs/toolkit";

type Tab = {
    label: string;
}

type State = {
    tabs: Tab[];
    tabSelected: number;
    dataTable: any | null | undefined;
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
    dataTable: null,
}
export const patientInfoTabSlice = createSlice({
    name: 'patientInfoTabSlice',
    initialState,
    reducers: {
        setTabSelected: (state, action) => {
            state.tabSelected = action.payload
        },
        setDataTable: (state, action) => {
            state.dataTable = action.payload
        }
    }
})

export const { setTabSelected, setDataTable } = patientInfoTabSlice.actions
export default patientInfoTabSlice.reducer


