import { apiService } from "../apiService";
import { UserTypes } from "../../types/users";

export const patientApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getPatientList: builder.query({
      query: () => ({
        url: `/patients/0b0e5cc1-44e0-4147-904e-e59075278ff7`, // PATIENT'S BY CLINIC ID
      }),
      providesTags: ["Patients"],
    }),
    getPatientDetails: builder.query({
      query: (props) => ({
        url: `/patients/details/${props.patientId}`,
      }),
      providesTags: ["PatientDetails"],
    }),
    addNewPatient: builder.mutation<{}, UserTypes>({
      query: (props) => ({
        url: `/patients`,
        method: 'POST',
        body: props
      }),
      invalidatesTags: ["Patients"],
    }),
  }),
});

export const { useGetPatientListQuery, useGetPatientDetailsQuery, useAddNewPatientMutation} = patientApi;
