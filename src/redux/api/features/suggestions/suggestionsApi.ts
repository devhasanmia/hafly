import { baseApi } from "../../baseApi";

const suggestionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSuggestions: builder.query({
      query: () => ({
        url: "/user/suggestions",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSuggestionsQuery } = suggestionsApi;
