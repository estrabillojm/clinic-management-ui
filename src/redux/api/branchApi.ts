import { apiService } from "../apiService";

export const branchApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getBranchList: builder.query({
            query: (clinicId) => ({
                url: `/branches/clinics/${clinicId}` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["Branches"],
        })

    })
})

export const {
    useGetBranchListQuery,
} = branchApi;