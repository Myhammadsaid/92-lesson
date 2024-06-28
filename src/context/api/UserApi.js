import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({
        url: "/users/search",
        params,
      }),
      providesTags: ["User"],
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    postSignIn: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useSignInMutation,
  useDeleteUserMutation,
  usePostSignInMutation,
} = userApi;
