import { addPost, updateNewPostText } from '../../../../redux/profileReducer'
import MyPosts from './MyPosts';
import { useSelector } from 'react-redux';


const MyPostsContainer = () => {
	const profilePage = useSelector(state => state.profilePage)

	return <MyPosts profilePage={profilePage} updateNewPostText={updateNewPostText} addPost={addPost} />

};

export default MyPostsContainer;

// const mapStateToProps = state => ({ profilePage: state.profilePage }),
// 	mapDispatchToProps = dispatch => {
// 		return {
// 			onPostChange: value => dispatch(updateNewPostTextAC(value)),
// 			addPost: () => dispatch(addPostAC())
// 		};
// 	},
// 	MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
