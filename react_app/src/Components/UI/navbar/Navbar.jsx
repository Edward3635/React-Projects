import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context/index'

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const executeLogout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	};
	return (
		<div className='navbar'>
			<div className="navbar__links">
				<MyButton><Link to='/posts'>Posts</Link></MyButton>
				<MyButton><Link to='/about'>About site</Link></MyButton>
			</div>
			{isAuth &&
				<MyButton style={{ marginLeft: 'auto' }} onClick={executeLogout}>Logout</MyButton>}
		</div>
	)
}

export default Navbar