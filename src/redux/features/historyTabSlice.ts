import { createSlice } from "@reduxjs/toolkit";

const initialState = { // TODO : CHANGE THIS
  familyHistory: "",
  pastHistory: "",
  socialHistory: "",
};

const historyTabSlice = createSlice({
  name: "historyTab",
  initialState,
  reducers: {
    setFamilyHistory: (state, action) => {
      state.familyHistory = action.payload.toString()
    },
    setPastHistory: (state, action) => {
        state.pastHistory = action.payload.toString()
    },
    setSocialHistory: (state, action) => {
        state.socialHistory = action.payload.toString()
    }
  },
});

export const { setFamilyHistory, setPastHistory, setSocialHistory } = historyTabSlice.actions;

export default historyTabSlice.reducer;
