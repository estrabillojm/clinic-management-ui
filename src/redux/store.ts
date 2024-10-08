import {
    combineReducers,
    configureStore,
  } from "@reduxjs/toolkit";
  import sampleSlice from "./features/sampleSlice";
  import { apiService } from "./apiService";
  import userSlice from "./features/userSlice";
  import patientInfoTabSlice from "./features/patientInfoTabSlice";
  import opticalPatientInfoTabSlice from "./features/opticalPatientInfoTabSlice";
import enumSlice from "./enums/enumSlice";
import adminTabSlice from "./features/adminTabSlice";
import patientHistorySlice from "./features/patientHistorySlice";
import actionTypeSlice from "./features/actionTypeSlice";
import patientSlice from "./features/patientSlice";
import addressSlice from "./features/addressSlice";
import patientValidatorSlice from "./features/patientValidatorSlice";
import historyTabSlice from "./features/historyTabSlice";
//   import { loginApi } from "./api/loginApi";
  
  const reducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    // [loginApi.reducerPath]: loginApi.reducer,
    sample: sampleSlice, // REMOVE THIS IF NECESSARY
    user: userSlice,
    patients: patientInfoTabSlice,
    optics: opticalPatientInfoTabSlice,
    adminTabs: adminTabSlice,
    patientHistories: patientHistorySlice,
    enum: enumSlice,
    actionType: actionTypeSlice,
    patientDetails: patientSlice,
    address: addressSlice,
    patientValidator: patientValidatorSlice,
    historyTab: historyTabSlice,
  });
  export const setupStore = () =>
    configureStore({
      reducer: reducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
          apiService.middleware,
        //   loginApi.middleware,
        ]),
    });
  
  export type RootState = ReturnType<typeof reducer>;
  export type AppStore = ReturnType<typeof setupStore>;
  export type AppDispatch = AppStore["dispatch"];
  