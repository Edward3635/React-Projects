import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => (sort ?
		[...posts].sort((a, b) => a[sort].toString().localeCompare(b[sort].toString(), undefined, { numeric: true }))
		: posts
	), [sort, posts])
	return sortedPosts;
}
export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);
	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
	},
		[query, sortedPosts]);
	return sortedAndSearchedPosts;
};
