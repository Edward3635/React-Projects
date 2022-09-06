import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = props => {

	return (
		<section className='section__profile'>
			<div className='profile__banner'>
				<img src={require('../../../img/banner.jpg')} alt="banner" />
			</div>
			<div className='profile__content'>
				Ava + description
				<MyPostsContainer store={props.store} />
			</div>
		</section>
	);
};
export default Profile;