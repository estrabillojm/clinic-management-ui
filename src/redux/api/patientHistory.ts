import { apiService } from "../apiService";

export const patientHistoryApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getRecentPatientHistory: builder.query({
            query: (props) => ({
                url: `/patient-histories/recent?clinicId=0b0e5cc1-44e0-4147-904e-e59075278ff7&patientId=${props.patientId}` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["RecentPatientHistory"],
        }),
        getPatientHistories: builder.query({
            query: (props) => ({
                url: `/patient-histories/list?clinicId=0b0e5cc1-44e0-4147-904e-e59075278ff7&patientId=${props.patientId}` // TODO : REPLACE UUID AS A VARIABLE
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
                    patientTransactionHistoryId: "c620ff49-65c9-4dc4-87b0-a53fbee148ea",
                    ...data
                },
              }),
            invalidatesTags: ["PatientHistory", "PatientHistories"]
        })

    })
})

export const {
    useGetRecentPatientHistoryQuery,
    useGetPatientHistoriesQuery,
    useLazyGetPatientHistoryQuery,
    useCreatePatientHistoryMutation,
} = patientHistoryApi;