import React from 'react';
import Post from './Post/Post';


const MyPosts = props => {

	const posts = props.state.postData.map(el => <Post msg={el.msg} key={el.id} likesCount={el.likesCount} />),

		onPostChange = e => props.updateNewPostText(e.target.value),
		onAddPost = () => props.addPost();

	return (
		<div className='my__posts'>
			<div className='create__post'>
				<h3>My posts</h3>
				<textarea className='post__area' onChange={onPostChange} value={props.state.newPostText} />
				<div className='post__buttons'>
					<div className='posts_secondary__buttons'>
						<button className='secondarry__button'></button>
						<button className='secondarry__button'></button>
						<button className='secondarry__button'></button>
						<button className='secondarry__button'></button>
						<button className='secondarry__button'></button>
					</div>
					<div className='btn__add-post-wrapper'><button className='btn__add-post' onClick={onAddPost}>Add post</button></div>
					{/* <button className='btn__remove-post'>Remove post</button> */}
				</div>
			</div>
			{posts}
		</div>
	);
};
export default MyPosts;
