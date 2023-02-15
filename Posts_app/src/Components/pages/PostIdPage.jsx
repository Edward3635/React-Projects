import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import postService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import Loader from '../UI/loader/Loader';
import PostError from './PostError';

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
			<h5 className='com__email'>{com.email}</h5>
			<div>{com.body}</div>
		</div>)
	useEffect(() => {
		fetchPostById(id);
		fetchComments(id)
	}, []);
	if (postLoading || commentsLoading) return <div style={{ marginTop: 150 }}><Loader /></div>
	if (postError.message || commentsError.message)
		return <PostError postError={postError.message} commentsError={commentsError.message} />

	return (
		<div className='page__post'>
			<h1 className='page__post-title'>Post {id}</h1>
			<div className='page__post-text'>{post.id}. {post.title}</div>
			<div>{post.body}</div>
			<div className='page__post-comments'>Comments</div>
			<div>{postComments}</div>
		</div>
	)
}

export default PostIdPage