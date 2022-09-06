import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = () => {

	return (
		<section className='section__profile'>
			<div className='profile__banner'>
				<img src={require('../../../img/banner.jpg')} alt="banner" />
			</div>
			<div className='profile__content'>
				Ava + description
				<MyPostsContainer />
			</div>
		</section>
	);
};
export default Profile;