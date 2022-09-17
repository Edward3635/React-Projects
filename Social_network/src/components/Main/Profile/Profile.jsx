import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = props => {
	return (
		<section className='section__profile'>
			<div className='profile__banner'>
				<img src={require('../../../img/banner.jpg')} alt="banner" />
			</div>
			<div className='profile__content'>
				<ProfileInfo profile={props.profile} isFetching={props.isFetching} />
				<MyPostsContainer />
			</div>
		</section>
	);
};
export default Profile;