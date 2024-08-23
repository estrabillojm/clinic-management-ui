import { apiService } from "../apiService";

export const patientApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPatientList: builder.query({
            query: (props) => {
                let queryParams = ""
                console.log(props)
                if(props.params.searchFirstName || props.params.searchLastName || props.params.dateOfBirth){
                    queryParams += `?firstName=${props.params.searchFirstName}&lastName=${props.params.searchLastName}&dateOfBirth=${props.params.dateOfBirth}`
                }
                return {url: `/patients/${props.clinicId}${queryParams}`}
            },
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
    useLazyGetPatientListQuery,
    useGetPatientDetailsQuery,
    useLazyGetPatientDetailsQuery,
} = patientApi;