import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface ClientResponse {
  client_id: string;
  booking_count: number;
  client_name: string;
  city: string;
  client_email: string;
  joined_on: Date;
  account_type: string;
  block_status: boolean;
  images_count: number;
  account_status: string;
}

let headers = new Headers();
headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
headers.append("Access-Control-Allow-Credentials", "true");
export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_ENDPOINT,
  }),
  tagTypes: ["Clients"],
  endpoints: (builder) => ({
    getClients: builder.query<ClientResponse[], void>({
      query: () => {
        return {
          url: "/clients",
          headers: headers,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ client_id }) => ({
                type: "Clients" as const,
                client_id,
              })),
              { type: "Clients", id: "LIST" },
            ]
          : [{ type: "Clients", id: "LIST" }],
    }),
    addClient: builder.mutation<ClientResponse[], Object>({
      query: (post) => {
        return {
          url: "/add_client",
          method: "POST",
          body: post,
        };
      },
      invalidatesTags: [{ type: "Clients", id: "LIST" }],
      transformResponse: (result: ClientResponse[]) => result,
    }),
    deleteClient: builder.mutation<ClientResponse[], Object>({
      query: (post: any) => {
        return {
          url: `/delete_client/${post.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Clients", id: "LIST" }],
      transformResponse: (result: ClientResponse[]) => result,
    }),
    updateBlockStatus: builder.mutation<ClientResponse[], Object>({
      query: (post: any) => {
        return {
          url: `/update_blockstatus/${post.id}`,
          method: "POST",
        };
      },
      invalidatesTags: [{ type: "Clients", id: "LIST" }],
      transformResponse: (result: ClientResponse[]) => result,
    }),
  }),
});
export const {
  useGetClientsQuery,
  useAddClientMutation,
  useDeleteClientMutation,
  useUpdateBlockStatusMutation,
} = clientApi;
