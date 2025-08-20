import { baseApi } from "../../baseApi";

const messengerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMessanger: builder.query({
      query: (receiverId) => ({
        url: `/messenger/${receiverId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllMessangerQuery } = messengerApi;
