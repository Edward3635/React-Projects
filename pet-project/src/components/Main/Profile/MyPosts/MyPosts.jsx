import React from 'react';
import Post from './Post/Post';

const MyPosts = props => {

	const posts = props.state.map(el => <Post msg={el.msg} key={el.id} likesCount={el.likesCount} />);

	return (
		<div className='my__posts'>
			<h3>My posts</h3>
			<textarea></textarea>
			<div className='post__buttons'>
				<button className='btn__add-post'>Add post</button>
				<button className='btn__remove-post'>Remove post</button>
			</div>
			{posts}
		</div>
	);
};
export default MyPosts;