import { apiService } from "../apiService";

export const physicianApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPhysicianList: builder.query({
            query: () => ({
                url: `/users/physician/0b0e5cc1-44e0-4147-904e-e59075278ff7/list` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["Physician"],
        })

    })
})

export const {
    useGetPhysicianListQuery,
} = physicianApi;