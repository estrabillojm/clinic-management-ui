import { createSlice } from "@reduxjs/toolkit";

type Province = {
  name: string;
  code: string;
  region_code: string;
};

type InitialState = {
  provinces: Province | [],
  birthPlaceProvinceId: string | null,
  contactProvinceId: string | null,
  personToNotifyProvinceId: string | null,
}

const initialState: InitialState = {
  provinces: [],
  birthPlaceProvinceId: null,
  contactProvinceId: null,
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
    setBirthPlaceProvinceId: (state, action) => {
      state.birthPlaceProvinceId = action.payload.provinceId
    },
    setPersonToNotifyProvinceId: (state, action) => {
      state.personToNotifyProvinceId = action.payload.provinceId
    },
    setContactProvinceId: (state, action) => {
      state.contactProvinceId = action.payload.provinceId
    },
  },
});

export const { mapProvinces, setBirthPlaceProvinceId, setPersonToNotifyProvinceId, setContactProvinceId } = addressSlice.actions;

export default addressSlice.reducer;
