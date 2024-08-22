import { apiService } from "../apiService";

export const patientApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPatientList: builder.query({
            query: () => ({
                url: `/patients/d32247a8-8589-41de-bfb3-aea615bdf862` // PATIENT'S BY CLINIC ID
            }),
            providesTags: ["Patients"],
        }),
        getPatientDetails: builder.query({
            query: (props) => ({
                url: `/patients/details/${props.patientId}`
            }),
            providesTags: ["PatientDetails"],
        }),
        createPatient: builder.mutation({
            query: (data) => ({
                url: "/patients",
                method: "POST",
                body: {
                    ...data
                },
              }),
            invalidatesTags: ["PatientHistory", "PatientHistories", "Patients", "PatientDetails"]
        }),

    })
})

export const {
    useCreatePatientMutation,
    useGetPatientListQuery,
    useGetPatientDetailsQuery,
    useLazyGetPatientDetailsQuery,
} = patientApi;