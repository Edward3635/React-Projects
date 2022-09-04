import React from 'react';
import avatar from '../../../../../../src/img/ava.jpg';

const Post = (props) => {
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