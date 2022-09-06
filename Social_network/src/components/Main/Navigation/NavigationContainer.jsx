import React from 'react';
import Navigation from './Navigation';
import StoreContext from '../../../StoreContext';

const NavigationContainer = () => {
	// {props.store.getState().sideBarFriends}
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					return (<Navigation store={store.getState().sideBarFriends} />);
				}
			}
		</StoreContext.Consumer>
	);
};

export default NavigationContainer;