import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
	const deletePost = () => props.removeCurrentPost(props.post.id);
	const navigate = useNavigate();
	return (
		<div className='post'>
			<div className='post__content'>
				<strong>{props.post.id}. {props.post.title ? props.post.title : 'Empty title'}</strong>
				<div>
					{props.post.body ? props.post.body : 'Empty body'}
				</div>
			</div>
			<div className='post__btns'>
				<MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MyButton>
				<MyButton onClick={deletePost}>Delete</MyButton>
			</div>
		</div>
	)
}

export default PostItem;