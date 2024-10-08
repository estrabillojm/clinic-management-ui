import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  
  import { APP_CONFIG } from "../configs/config"
  
  const baseQueryWithHeaders = fetchBaseQuery({
    baseUrl: APP_CONFIG.API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "accesstoken",
        `${localStorage.getItem("accesstoken")}`,
      );
      return headers;
    },
  });

  const baseQueryWithoutHeaders = fetchBaseQuery({
    baseUrl: APP_CONFIG.API_URL,
  });

  
  const checkIfAuthorized: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
      if(api.endpoint.toLowerCase() === "login"){
        return await baseQueryWithoutHeaders(args, api, extraOptions);
      }
      
      const result = await baseQueryWithHeaders(args, api, extraOptions);
      if(result.error){
          localStorage.clear()
          window.location.href = "/login"
      }
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
  