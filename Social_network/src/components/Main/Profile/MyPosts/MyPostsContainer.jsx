import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = state => ({ profilePage: state.profilePage }),
	mapDispatchToProps = dispatch => {
		return {
			onPostChange: value => dispatch(updateNewPostTextActionCreator(value)),
			addPost: () => dispatch(addPostActionCreator())
		};
	},
	MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
