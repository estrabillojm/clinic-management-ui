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
            label: "Optical"
        },
        {
            label: "Physician"
        },
    ],
    tabSelected: 0,
    dataTable: null,
}
export const opticalPatientInfoTabSlice = createSlice({
    name: 'opticalPatientInfoTabSlice',
    initialState,
    reducers: {
        setTabSelected: (state, action) => {
            state.tabSelected = action.payload
        },
        setDataTable: (state, action) => {
            state.dataTable = action.payload
        },
        clearDataTable: (state) => {
            console.log("CALL MEEE")
            state.dataTable = null
        }
    }
})

export const { setTabSelected, setDataTable, clearDataTable } = opticalPatientInfoTabSlice.actions
export default opticalPatientInfoTabSlice.reducer


