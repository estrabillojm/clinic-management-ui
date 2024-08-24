import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

// import { User, UserInfo } from "ts/src/types/types";

const accessToken = localStorage.getItem("accessToken");

const userInfoDefaultValues = {
  email: "",
  userId: "",
  firstName: "",
  lastName: "",
  iat: 0,
  exp: 0,
  clinic: {
    clinicId: ""
  },
};


export const getUserInfo = (token: string | null) => {
  //get initial state from decoded access token
  const info: any = token && jwtDecode(token);

  //if no token, return default values
  return {...info, userId:null, systemRole: null, username: null};
};

const initialState: any = { // TODO : CHANGE THIS
  isAuthenticated:
  accessToken && typeof accessToken === "string" ? true : false,
  userInfo: getUserInfo(accessToken),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("accesstoken", action.payload.accesstoken);
      localStorage.setItem("refreshtoken", action.payload.refreshtoken);
      state.isAuthenticated = true;
      state.userInfo = getUserInfo(action.payload.accesstoken);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = userInfoDefaultValues;
      localStorage.clear();

    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
