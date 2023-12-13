import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    registerItem: builder.mutation({
      query: (item) => ({
        url: "/item/register",
        method: "POST",
        body: item,
      }),

      onQueryStarted: async (item, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log(data, item);
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useRegisterItemMutation } = registerApi;
