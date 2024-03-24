import { apiService } from "../apiService";

export const addressApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getAllProvinces: builder.query({
            query: () => ({
                url: `/provinces`
            })
        }),
        getCitiesByProvince: builder.query({
            query: (provinceCode) => ({
                url: `/cities/${provinceCode}`
            }),
        })

    })
})

export const {
    useGetAllProvincesQuery,
    useLazyGetCitiesByProvinceQuery,
} = addressApi;