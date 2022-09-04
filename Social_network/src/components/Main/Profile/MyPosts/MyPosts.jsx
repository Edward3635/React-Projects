import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../State/profileReducer'


const MyPosts = props => {

	const posts = props.state.map(el => <Post msg={el.msg} key={el.id} likesCount={el.likesCount} />),

		onPostChange = e => props.dispatch(updateNewPostTextActionCreator(e.target.value)),
		addPost = () => props.dispatch(addPostActionCreator());

	return (
		<div className='my__posts'>
			<h3>My posts</h3>
			<textarea onChange={onPostChange} value={props.newPostText} />
			<div className='post__buttons'>
				<button className='btn__add-post' onClick={addPost}>Add post</button>
				<button className='btn__remove-post'>Remove post</button>
			</div>
			{posts}
		</div>
	);
};
export default MyPosts;
