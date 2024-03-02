import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { // TODO : CHANGE THIS
  patientHistory: {}
};

const patientHistorySlice = createSlice({
  name: "patientHistory",
  initialState,
  reducers: {
    setActivePatientHistory: (state, action) => {
      state.patientHistory = action.payload.result
    }
  },
});

export const { setActivePatientHistory } = patientHistorySlice.actions;

export default patientHistorySlice.reducer;
