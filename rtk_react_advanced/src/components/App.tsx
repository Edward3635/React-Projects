import React from 'react';
import '../Styles/css/app.css';
import PostContainer from './PostContainer';
import { type } from 'os';


const App = () => {
	// const { users, error, isLoading } = useTypedSelector(state => state.userReducer)
	// const selector = useSelector((state: ReducersState) => state.userReducer.error); Analog

	return (
		<div className='App'>
			<PostContainer />
		</div>
	)
};

export default App;
