import React from 'react';
import { useSelector } from 'react-redux';
import avaDefault from '../../../../../img/userPhoto.png'

const Post = (props) => {
	const profile = useSelector(state => state.profilePage.profile);
	let avatar;
	profile && profile.photos.small ? avatar = profile.photos.small : avatar = avaDefault;
	return (
		<div className='post'>
			<img src={avatar} alt="Avatar" />
			<div>
				<div>{props.msg}</div>
				<span>{props.likesCount} Likes</span>
			</div>
		</div>
	);
};
export default Post;