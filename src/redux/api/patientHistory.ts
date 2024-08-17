import { apiService } from "../apiService";

export const patientHistoryApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getRecentPatientHistory: builder.query({
            query: (props) => ({
                url: `/patient-histories/recent?clinicId=d32247a8-8589-41de-bfb3-aea615bdf862&patientId=${props.patientId}` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["RecentPatientHistory"],
        }),
        getPatientHistories: builder.query({
            query: (props) => ({
                url: `/patient-histories/list?clinicId=d32247a8-8589-41de-bfb3-aea615bdf862&patientId=${props.patientId}` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["PatientHistories"],
        }),
        getPatientHistory: builder.query({
            query: (patientHistoryId) => ({
                url: `/patient-histories/${patientHistoryId}` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["PatientHistory"],
        }),
        // TODO IN API - ADD UPDATE PATIENT INFO THEN RETURN THE PATIENT TRANSACTION HISTORY ID
        createPatientHistory: builder.mutation({
            query: (data) => ({
                url: "/patient-histories",
                method: "POST",
                body: {
                    ...data
                },
              }),
            invalidatesTags: ["PatientHistory", "PatientHistories"]
        })

    })
})

export const {
    useGetRecentPatientHistoryQuery,
    useLazyGetRecentPatientHistoryQuery,
    useGetPatientHistoriesQuery,
    useLazyGetPatientHistoryQuery,
    useCreatePatientHistoryMutation,
} = patientHistoryApi;