import { apiService } from "../apiService";

export const branchApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getBranchList: builder.query({
            query: () => ({
                url: `/branches/clinics/0b0e5cc1-44e0-4147-904e-e59075278ff7` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["Branches"],
        })

    })
})

export const {
    useGetBranchListQuery,
} = branchApi;