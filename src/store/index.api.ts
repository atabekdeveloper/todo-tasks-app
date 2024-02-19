import { baseUrl } from 'src/config/url.config';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api/tasks',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  refetchOnFocus: true,
  tagTypes: ['tasks'],
  endpoints: (build) => ({
    default: build.query({
      query: () => 'default',
    }),
  }),
});
