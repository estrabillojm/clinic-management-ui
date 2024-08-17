import { apiService } from "../apiService";

export const physicianApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPhysicianList: builder.query({
            query: () => ({
                url: `/users/physician/d32247a8-8589-41de-bfb3-aea615bdf862/list` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["Physician"],
        })

    })
})

export const {
    useGetPhysicianListQuery,
} = physicianApi;