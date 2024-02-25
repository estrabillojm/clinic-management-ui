import {
    combineReducers,
    configureStore,
  } from "@reduxjs/toolkit";
  import sampleSlice from "./features/sampleSlice";
  import { apiService } from "./apiService";
  import userSlice from "./features/userSlice";
  import patientInfoTabSlice from "./features/patientInfoTabSlice";
import enumSlice from "./enums/enumSlice";
//   import { loginApi } from "./api/loginApi";
  
  const reducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    // [loginApi.reducerPath]: loginApi.reducer,
    sample: sampleSlice, // REMOVE THIS IF NECESSARY
    user: userSlice,
    patientInfoTabs: patientInfoTabSlice,
    enum: enumSlice,
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
  