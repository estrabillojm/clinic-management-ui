import { apiService } from "../apiService";

export const patientHistoryApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getRecentPatientHistory: builder.query({
            query: (props) => ({
                url: `/patient-histories/recent?clinicId=0c7694f1-a867-4131-ad3b-6a3e971e8b72&patientId=${props.patientId}` // TODO : REPLACE UUID AS A VARIABLE
            }),
            providesTags: ["RecentPatientHistory"],
        }),
        getPatientHistories: builder.query({
            query: (props) => ({
                url: `/patient-histories/list?clinicId=0c7694f1-a867-4131-ad3b-6a3e971e8b72&patientId=${props.patientId}` // TODO : REPLACE UUID AS A VARIABLE
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