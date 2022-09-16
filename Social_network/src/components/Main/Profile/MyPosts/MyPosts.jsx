import React from 'react';
import { useDispatch } from 'react-redux';
import Post from './Post/Post';


const MyPosts = props => {
	const dispatch = useDispatch(),
		posts = props.profilePage.postData.map(el => <Post msg={el.msg} key={el.id} likesCount={el.likesCount} />),

		onAddPost = () => dispatch(props.addPost()),
		onPostChange = e => dispatch(props.updateNewPostText(e.target.value)),
		onEnterPress = e => {
			if (e.key === 'Enter' && e.shiftKey) return;
			if (e.key === 'Enter') e.preventDefault();
			if (e.key === 'Enter' && e.target.value.replace(/^\s+|\s+$/g, "")) dispatch(props.addPost());

		};

	return (
		<div className='my__posts'>
			<div className='create__post'>
				<h3>My posts</h3>
				<textarea className='post__area' onChange={onPostChange} onKeyPress={onEnterPress}
					value={props.profilePage.newPostText} />
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
