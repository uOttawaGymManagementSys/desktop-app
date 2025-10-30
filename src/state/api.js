import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "gymApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ["Traffic", "Machines"],
  endpoints: (build) => ({
    getTraffic: build.query({
      query: () => "/traffic",
      providesTags: ["Traffic"],
    }),
    getTrafficByGym: build.query({
      query: (gymId) => `/traffic/gym/${gymId}`,
      providesTags: ["Traffic"],
    }),
    getMachines: build.query({
      query: () => "/machinestatus",
      providesTags: ["Machines"],
    }),

    getMachinesByGym: build.query({
      query: (gymId) => `/machines/gym/${gymId}`,
      providesTags: ["Machines"],
    })
  }),
});

export const {
  useGetTrafficQuery,
  useGetTrafficByGymQuery,
  useGetMachinesQuery,
  useGetMachinesByGymQuery
} = api;
