import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import SendPostForm from './SendPostForm/SendPostForm';



const MyPosts = () => {
	const profilePage = useSelector(state => state.profilePage),
		posts = profilePage.postData.map(el => <Post msg={el.msg} key={el.id} likesCount={el.likesCount} />);


	// onEnterPress = e => {
	// 	if (e.key === 'Enter' && e.shiftKey) return;
	// 	if (e.key === 'Enter') e.preventDefault();
	// 	if (e.key === 'Enter' && e.target.value.replace(/^\s+|\s+$/g, "")) dispatch(addPost());

	// };

	return (
		<div className='my__posts'>
			<div className='create__post'>
				<h3>My posts</h3>
				<SendPostForm />
			</div>
			{posts}
		</div>
	);
};
export default MyPosts;

// const mapStateToProps = state => ({ profilePage: state.profilePage }),
// 	mapDispatchToProps = dispatch => {
// 		return {
// 			onPostChange: value => dispatch(updateNewPostTextAC(value)),
// 			addPost: () => dispatch(addPostAC())
// 		};
// 	},
// 	MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
