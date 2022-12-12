import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import postService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, postLoading, postError] = useFetching(async () => {
		const response = await postService.getPostById(id);
		setPost(response.data);
	});
	const [fetchComments, commentsLoading, commentsError] = useFetching(async () => {
		const response = await postService.getCommentsByPostId(id);
		setComments(response.data);
	});
	const postComments = comments.map(com =>
		<div key={com.id} style={{ marginTop: 15 }}>
			<h5>{com.email}</h5>
			<div>{com.body}</div>
		</div>)
	useEffect(() => {
		fetchPostById(id);
		fetchComments(id)
	}, []);
	return (
		<div>
			<h1>You have opened a post page width id: {id}</h1>
			{postLoading ? <Loader /> : postError.message ? postError.message : <div>{post.id}. {post.title}</div>}
			<div>Comments</div>
			{commentsLoading ? <Loader /> : commentsError.message ? commentsError.message : <div>{postComments}</div>}
		</div>
	)
}

export default PostIdPage