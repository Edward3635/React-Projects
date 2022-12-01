import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from './Post/Post';
import SendPostForm from './SendPostForm/SendPostForm';



const MyPosts = () => {
	const { userId } = useParams(),
		profilePage = useSelector(state => state.profilePage.postData),
		posts = profilePage.map(el => <Post msg={el.msg} key={el.id} likesCount={el.likesCount} />);



	return (
		<div className='my__posts'>
			<div className='create__post'>
				<h3>My posts</h3>
				{userId ? null : <SendPostForm />}
			</div>
			{posts}
		</div>
	);
};
export default MyPosts;
