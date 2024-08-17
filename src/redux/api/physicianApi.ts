import { apiService } from "../apiService";

export const physicianApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPhysicianList: builder.query({
            query: () => ({
                url: `/users/physician/0c7694f1-a867-4131-ad3b-6a3e971e8b72/list` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["Physician"],
        })

    })
})

export const {
    useGetPhysicianListQuery,
} = physicianApi;