import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Friends from './Friends';

const mapStateToProps = state => ({ usersData: state.friendsPage.usersData }),
	mapDispatchToProps = dispatch => {
		return {
			onFollow: userId => dispatch(followAC(userId)),
			onUnfollow: userId => dispatch(unfollowAC(userId)),
			setUsers: usersData => dispatch(setUsersAC(usersData))
		};
	};


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;