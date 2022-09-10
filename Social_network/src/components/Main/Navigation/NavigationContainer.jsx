import Navigation from './Navigation';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		sideBarFriends: state.sideBarFriends
	};
},
	NavigationContainer = connect(mapStateToProps)(Navigation);
export default NavigationContainer;