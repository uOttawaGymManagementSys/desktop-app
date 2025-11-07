import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "gymApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ["Traffic", "Machines"],
  endpoints: (build) => ({
    //traffic endpoints
    getTraffic: build.query({
      query: () => "/traffic",
      providesTags: ["Traffic"],
    }),
    getTrafficByGym: build.query({
      query: (gymId) => `/traffic/gym/${gymId}`,
      providesTags: ["Traffic"],
    }),
    getTodayTrafficByGym: build.query({
      query: (gymId) => `/traffic/gym/${gymId}/today`,
      providesTags: ["Traffic"],
    }),
    //machine status endpoints
    getMachines: build.query({
      query: () => "/machinestatus",
      providesTags: ["Machines"],
    }),

    getMachinesByGym: build.query({
      query: (gymId) => `/machinestatus/gym/${gymId}`,
      providesTags: ["Machines"],
    }),
    updateMachineStatus: build.mutation({
      query: ({ id, status }) => ({
        url: "/machinestatus/update",
        method: "POST",
        body: { id, status },
      }),
      invalidatesTags: ["Machines"],
    }),

    addTrafficCount: build.mutation({
      query: ({ gym_id, traffic_count }) => ({
        url: "/traffic/add",
        method: "POST",
        body: { gym_id, traffic_count },
      }),
      invalidatesTags: ["Traffic"],
    }),
  }),
});

export const {
  useGetTrafficQuery,
  useGetTrafficByGymQuery,
  useGetMachinesQuery,
  useGetMachinesByGymQuery,
  useUpdateMachineStatusMutation,
  useAddTrafficCountMutation,
  useGetTodayTrafficByGymQuery,
} = api;
