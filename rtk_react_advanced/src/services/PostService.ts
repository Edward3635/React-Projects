import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost } from "../models/IPost";


export const postAPI = createApi({
	reducerPath: "postAPI",
	baseQuery: fetchBaseQuery({ baseUrl: 'http://jsonplaceholder.typicode.com' }),
	tagTypes: ['Post'],
	endpoints: (builder) => ({
		fetchAllPosts: builder.query<IPost[], number>({
			query: (limit: number = 5) =>
			({
				url: '/posts',
				params: { _limit: limit }
			}),
			providesTags: result => ['Post']
		}),
	}),
});

export const { useFetchAllPostsQuery } = postAPI;