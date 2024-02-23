import { apiService } from "../apiService";

export const authApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: `/users/login`,
                method: "POST",
                body: payload,
            }),
        }),
        verifyToken: builder.mutation({
            query: (payload) => ({
                url: `/tokens/verify`,
                method: "POST",
                body: payload,
            }),
        }),

    })
})

export const {
    useLoginMutation,
    useVerifyTokenMutation,
} = authApi;