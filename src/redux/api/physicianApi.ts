import { apiService } from "../apiService";

export const physicianApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPhysicianList: builder.query({
            query: (clinicId) => ({
                url: `/users/physician/${clinicId}/list`
            }),
            providesTags: ["Physician"],
        })

    })
})

export const {
    useGetPhysicianListQuery,
} = physicianApi;