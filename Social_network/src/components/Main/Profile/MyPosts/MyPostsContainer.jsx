import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../State/profileReducer'
import MyPosts from './MyPosts';


const MyPostsContainer = props => {
	const state = props.store.getState(),
		onPostChange = value => props.store.dispatch(updateNewPostTextActionCreator(value)),
		addPost = () => props.store.dispatch(addPostActionCreator());

	return <MyPosts state={state.profilePage} updateNewPostText={onPostChange} addPost={addPost} />;
};
export default MyPostsContainer;
