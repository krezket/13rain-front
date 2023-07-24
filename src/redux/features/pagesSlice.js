import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const URL_PREFIX = "http://localhost:3001"
const URL_PREFIX = "https://a-13rain-backend-f1bf2467fb35.herokuapp.com"


export const pagesApi = createApi({
    reducerPath: "pagesApi",
    baseQuery: fetchBaseQuery({baseUrl: `${URL_PREFIX}`}),
    endpoints: (builder) => ({
        getAllPages: builder.query({
            query: () => "pages"
        })
    })
});

export const { useGetAllPagesQuery } = pagesApi;

export default pagesApi;