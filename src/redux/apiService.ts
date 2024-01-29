import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  
  import { APP_CONFIG } from "../configs/config"
  
  const baseQuery = fetchBaseQuery({
    baseUrl: APP_CONFIG.API_URL,
    // prepareHeaders: (headers) => {
    //   headers.set(
    //     "Authorization",
    //     `Bearer ${localStorage.getItem("accessToken")}`,
    //   );
    //   return headers;
    // },
  });
  
//   const autoLogoutQuery = fetchBaseQuery({
//     baseUrl: APP_CONFIG.API_URL,
//     prepareHeaders: (headers) => {
//       headers.set(
//         "Authorization",
//         `Bearer ${localStorage.getItem("refreshToken")}`,
//       );
//       return headers;
//     },
//   });
  
  const checkIfAuthorized: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    // IF LOGIN AND AUTH IS READY PUT AUTOLOGOUT FUNCTION HERE
    return result;
  };
  
  const apiServiceTags = [
    "sample tags", // TBR - ADD PROVIDETAGS / INVALIDATETAGS HERE
  ];
  
  export const apiService = createApi({
    reducerPath: "apiService",
    tagTypes: apiServiceTags,
    baseQuery: checkIfAuthorized,
    endpoints: () => ({}),
  });
  