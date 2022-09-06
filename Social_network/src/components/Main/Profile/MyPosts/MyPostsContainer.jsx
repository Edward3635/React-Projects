import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../State/profileReducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../../StoreContext';


const MyPostsContainer = () => {

	return <StoreContext.Consumer>
		{
			(store) => {
				let state = store.getState(),
					onPostChange = value => store.dispatch(updateNewPostTextActionCreator(value)),
					addPost = () => store.dispatch(addPostActionCreator());
				return <MyPosts state={state.profilePage} updateNewPostText={onPostChange} addPost={addPost} />
			}
		}
	</StoreContext.Consumer>

};
export default MyPostsContainer;
