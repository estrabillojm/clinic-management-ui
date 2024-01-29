import { apiService } from "../apiService";

export const sampleApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    //api for table

    getList: builder.query({
      query: () => ({
        url: `/todos`,
      }),
      providesTags: ["Sample"], // YOU CAN ALSO USE MULTIPLE TAGS IF NEEDED
    }),
    createSample: builder.mutation({
      query: (data) => ({
        url: "/sample-route", // FOR SAMPLE PURPOSES ONLY
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Sample"], // IF THIS MUTATION WAS TRIGGERED, IT INVALIDATES / REFETCH ALL THE QUERIES THAT HAS A PROVIDES TAG OF "Sample" , YOU CAN ALSO USE MULTIPLE TAGS
    }),
  }),
});

export const {
  useCreateSampleMutation, // MUTATIONS ARE USED IN THE POST, PUT, DELETE WHILE QUERY USED IN RETRIEVING / GET
  useGetListQuery, // TRIGGER THIS FUNCTION WHEN THE COMPONENT MOUNT
  useLazyGetListQuery, // LAZY USE TO TRIGGER THE FUNCTION MANUALLY E.G IN AN EVENT
} = sampleApi;
