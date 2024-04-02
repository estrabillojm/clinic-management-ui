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
        })

    })
})

export const {
    useGetRecentPatientHistoryQuery,
    useGetPatientHistoriesQuery,
    useLazyGetPatientHistoryQuery
} = patientHistoryApi;