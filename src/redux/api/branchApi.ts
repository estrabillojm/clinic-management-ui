import { apiService } from "../apiService";

export const branchApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getBranchList: builder.query({
            query: (clinicId) => ({
                url: `/branches/clinics/${clinicId}`
            }),
            providesTags: ["Branches"],
        })

    })
})

export const {
    useGetBranchListQuery,
} = branchApi;