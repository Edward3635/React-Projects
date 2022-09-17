import Navigation from './Navigation';
import { useSelector } from 'react-redux';

const NavigationContainer = () => {
	const sideBarFriends = useSelector(state => state.sideBarFriends)
	return <Navigation sideBarFriends={sideBarFriends} />
};

export default NavigationContainer;


// const mapStateToProps = state => {
// 	return {
// 		sideBarFriends: state.sideBarFriends
// 	};
// },
//	NavigationContainer = connect(mapStateToProps)(Navigation);