import { apiService } from "../apiService";

export const patientApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getPatientList: builder.query({
      query: (props) => {
        let queryParams = "";
        if (
          props.params.searchFirstName ||
          props.params.searchLastName ||
          props.params.dateOfBirth
        ) {
          queryParams += `&firstName=${props.params.searchFirstName}&lastName=${props.params.searchLastName}&dateOfBirth=${props.params.dateOfBirth}`;
        }

        return {
          url: `/patients/${props.clinicId}?patientType=${props.patientType ?? ""}${queryParams}`,
        };
      },
      providesTags: ["Patients"],
    }),
    getPatientDetails: builder.query({
      query: (props) => ({
        url: `/patients/details/${props.patientId}`,
      }),
      providesTags: ["PatientDetails"],
    }),
    createPatient: builder.mutation({
      query: (data) => ({
        url: "/patients",
        method: "POST",
        body: {
          ...data,
        },
      }),
      invalidatesTags: [
        "PatientHistory",
        "PatientHistories",
        "Patients",
        "PatientDetails",
      ],
    }),
    updatePatient: builder.mutation({
      query: ({ data, patientId }) => {
        console.log(data)
        console.log(patientId)
        return {
          url: `/patients/${patientId}`,
          method: "PATCH",
          body: {
            ...data,
          },
        };
      },
      invalidatesTags: [
        "PatientHistory",
        "PatientHistories",
        "Patients",
        "PatientDetails",
      ],
    }),
  }),
});

export const {
  useCreatePatientMutation,
  useUpdatePatientMutation,
  useGetPatientListQuery,
  useLazyGetPatientListQuery,
  useGetPatientDetailsQuery,
  useLazyGetPatientDetailsQuery,
} = patientApi;
