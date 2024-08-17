import { apiService } from "../apiService";

export const branchApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getBranchList: builder.query({
            query: () => ({
                url: `/branches/clinics/d32247a8-8589-41de-bfb3-aea615bdf862` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["Branches"],
        })

    })
})

export const {
    useGetBranchListQuery,
} = branchApi;