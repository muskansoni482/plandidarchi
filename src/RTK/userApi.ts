import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from 'pages/login/authSlice';
export interface IUser {
    _id: string;
    name: string;
    email: string;
    photo: string;
    role: string;
    provider?: string;
    active?: boolean;
    verified?: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
  }

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/users/`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, null>({
      query() {
        return {
          url: 'me',
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: { user: IUser } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

