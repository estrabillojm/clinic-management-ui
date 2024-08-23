import { apiService } from "../apiService";

export const patientHistoryApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getRecentPatientHistory: builder.query({
            query: (props) => ({
                url: `/patient-histories/recent?clinicId=${props.clinicId}&patientId=${props.patientId}`
            }),
            providesTags: ["RecentPatientHistory"],
        }),
        getPatientHistories: builder.query({
            query: (props) => ({
                url: `/patient-histories/list?clinicId=${props.clinicId}&patientId=${props.patientId}`
            }),
            providesTags: ["PatientHistories"],
        }),
        getPatientHistory: builder.query({
            query: (patientHistoryId) => ({
                url: `/patient-histories/${patientHistoryId}`
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
        }),
        getPatientTransactionHistory: builder.query({
            query: (patientId) => ({
                url: `/patient-histories/transaction/patient/${patientId}`
            }),
            providesTags: ["PatientHistory"],
        }),

    })
})

export const {
    useLazyGetPatientTransactionHistoryQuery,
    useGetRecentPatientHistoryQuery,
    useLazyGetRecentPatientHistoryQuery,
    useGetPatientHistoriesQuery,
    useLazyGetPatientHistoryQuery,
    useCreatePatientHistoryMutation,
} = patientHistoryApi;