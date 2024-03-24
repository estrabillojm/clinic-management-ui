import { createSlice } from "@reduxjs/toolkit";

type Province = {
  name: string;
  code: string;
  region_code: string;
};

type InitialState = {
  provinces: Province | [],
  personalProvinceId: string | null,
  personToNotifyProvinceId: string | null,
}

const initialState: InitialState = {
  provinces: [],
  personalProvinceId: null,
  personToNotifyProvinceId: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    mapProvinces: (state, action) => {
      if(action.payload.results){
        state.provinces = action.payload.results.map((province : Province) => {
          return {
            value: province.code,
            label: province.name,
          }
        })
      }
    },
    setPersonalProvinceId: (state, action) => {
      state.personalProvinceId = action.payload.provinceId
    },
    setPersonToNotifyProvinceId: (state, action) => {
      console.log("ACTION", action.payload.provinceId)
      state.personToNotifyProvinceId = action.payload.provinceId
    }
  },
});

export const { mapProvinces, setPersonalProvinceId, setPersonToNotifyProvinceId } = addressSlice.actions;

export default addressSlice.reducer;
