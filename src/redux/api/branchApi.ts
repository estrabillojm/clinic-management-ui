import { apiService } from "../apiService";

export const branchApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getBranchList: builder.query({
            query: (clinicId) => ({
                url: `/branches/clinics/${clinicId}`
            }),
            providesTags: ["Branches"],
        }),
        getBranchById: builder.query({
            query: (branchId) => ({
                url: `/branches/${branchId}`
            }),
            providesTags: ["Branch"],
        })

    })
})

export const {
    useGetBranchListQuery,
    useGetBranchByIdQuery,
} = branchApi;