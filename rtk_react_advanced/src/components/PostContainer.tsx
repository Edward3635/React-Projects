import React from 'react'
import { useFetchAllPostsQuery } from '../services/PostService'
import PostItem from './PostItem';

const PostContainer = () => {
	const { data: posts, isLoading, error } = useFetchAllPostsQuery(5);

	return (
		<div>
			<div className='post__list'>
				{isLoading && <div>Loading...</div>}
				{error && <div>ERROR</div>}
				{posts && posts.map(post => <PostItem key={post.id} post={post} />)}
			</div>
		</div>
	)
}

export default PostContainer