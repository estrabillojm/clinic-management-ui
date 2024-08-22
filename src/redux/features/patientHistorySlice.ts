import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { // TODO : CHANGE THIS
  patientHistory: {}
};

const patientHistorySlice = createSlice({
  name: "patientHistory",
  initialState,
  reducers: {
    setActivePatientHistory: (state, action) => {
      state.patientHistory = action.payload.result ?? {}
    },
    clearPatientHistory: (state) => {
      state.patientHistory = {}
    },
  },
});

export const { setActivePatientHistory, clearPatientHistory } = patientHistorySlice.actions;

export default patientHistorySlice.reducer;
