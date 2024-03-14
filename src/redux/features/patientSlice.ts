import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { // TODO : CHANGE THIS
  patientDetails: null
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setActivePatient: (state, action) => {
      state.patientDetails = action.payload.result
    }
  },
});

export const { setActivePatient } = patientSlice.actions;

export default patientSlice.reducer;
