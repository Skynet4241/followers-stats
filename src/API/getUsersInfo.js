import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://6492f63d428c3d2035d0ff97.mockapi.io";

export const usersInfoApi = createApi({
  reducerPath: "usersInfo",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsersInfo: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    updateUsersInfo: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersInfoQuery, useUpdateUsersInfoMutation } =
  usersInfoApi;
