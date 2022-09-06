import React from 'react';
import Navigation from './Navigation';
import storeContext from '../../../storeContext';

const NavigationContainer = () => {

	return (
		<storeContext.Consumer>
			{
				(store) => {
					console.log(store.getState);
					return (<Navigation state={store.getState().sideBarFriends} />);
				}
			}
		</storeContext.Consumer>
	);
};

export default NavigationContainer;