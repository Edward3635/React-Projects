import React from 'react'
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ title, posts, removeCurrentPost }) => {
	if (!posts.length) return (<h1 style={{ textAlign: 'center' }}>Empty Posts List</h1>);

	const postList = posts.map((post) =>
		<CSSTransition
			key={post.id}
			timeout={500}
			classNames="post"
		>
			<PostItem post={post} removeCurrentPost={removeCurrentPost} />
		</CSSTransition>);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<TransitionGroup>
				{postList}
			</TransitionGroup>
		</div>
	)
}

export default PostList