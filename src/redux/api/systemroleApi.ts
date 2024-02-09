import { apiService } from "../apiService";

export const systemroleApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getSystenroles: builder.query({
            query: () => ({
                url: `/system-roles`
            }),
            providesTags: ["Systemroles"],
        })

    })
})

export const {
    useGetSystenrolesQuery,
} = systemroleApi;