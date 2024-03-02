import { createSlice } from "@reduxjs/toolkit";

type Action = {
    actionType: "View" | "Edit" | "Add" | null
}

const initialState: Action = {
  actionType: null,
};

const actionTypeSlice = createSlice({
  name: "actionType",
  initialState,
  reducers: {
    setView: (state) => {
      state.actionType = "View"
    },
    setEdit: (state) => {
        state.actionType = "Edit"
    },
    setAdd: (state) => {
        state.actionType = "Add"
    }

  },
});

export const { setView, setEdit, setAdd } = actionTypeSlice.actions;

export default actionTypeSlice.reducer;
