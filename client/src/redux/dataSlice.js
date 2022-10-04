import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataSlice = createApi({
    reducerPath: 'data',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/'}),
    endpoints: builder => ({
        getData: builder.query({
            query: ({byNameСolumn, byСondition, input, limit}) => ({
                url: `data?sortByColumn=${byNameСolumn}&sortByCondition=${byСondition}&filteringValue=${input}&limit=${limit}`
            })
        })
    })

});

export const {useGetDataQuery} = dataSlice;