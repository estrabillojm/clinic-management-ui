import { apiService } from "../apiService";

export const patientApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPatientList: builder.query({
            query: () => ({
                url: `/patients/0c7694f1-a867-4131-ad3b-6a3e971e8b72` // PATIENT'S BY CLINIC ID
            }),
            providesTags: ["Patients"],
        }),
        getPatientDetails: builder.query({
            query: (props) => ({
                url: `/patients/details/${props.patientId}`
            }),
            providesTags: ["PatientDetails"],
        })

    })
})

export const {
    useGetPatientListQuery,
    useGetPatientDetailsQuery,
} = patientApi;