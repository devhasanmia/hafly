import { baseApi } from "../../baseApi";

const friendRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFriendRequest: builder.query({
      query: () => ({
        url: "/friend-request",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllFriendRequestQuery } = friendRequestApi;
