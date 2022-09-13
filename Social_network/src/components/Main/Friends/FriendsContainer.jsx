import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Friends from './Friends';

const mapStateToProps = state => {
	return {
		usersData: state.friendsPage.usersData,
		pageSize: state.friendsPage.pageSize,
		totalUsersCount: state.friendsPage.totalUsersCount,
		currentPage: state.friendsPage.currentPage
	}
},
	mapDispatchToProps = dispatch => {
		return {
			onFollow: userId => dispatch(followAC(userId)),
			onUnfollow: userId => dispatch(unfollowAC(userId)),
			setUsers: usersData => dispatch(setUsersAC(usersData)),
			setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
			setTotalUsersCount: totalCount => dispatch(setTotalUsersCountAC(totalCount))
		};
	};


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;