import { apiService } from "../apiService";

export const branchApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getBranchList: builder.query({
            query: () => ({
                url: `/branches/clinics/0c7694f1-a867-4131-ad3b-6a3e971e8b72` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["Branches"],
        })

    })
})

export const {
    useGetBranchListQuery,
} = branchApi;