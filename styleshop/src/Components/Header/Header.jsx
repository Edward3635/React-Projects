import React from 'react'
import { Link } from 'react-router-dom';

import cl from '../../Style/Header.module.css';
import { ROUTES } from '../../Utils/Routes';
import LOGO from '../../Img/logo.svg';
import AVATAR from '../../Img/avatar.jpg';

const Header = () => {
	return (
		<div className={cl.header}>
			<div className={cl.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt="logo" />
				</Link>
			</div>

			<div className={cl.info}>
				<div className={cl.user}>
					<div className={cl.avatar} style={{ backgroundImage: `url(${AVATAR})` }} />
					<div className={cl.username}>Guest</div>
				</div>
				<form className={cl.form}>
					<div className={cl.icon}>
						<svg className="icon">
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
						</svg>
					</div>
					<div className={cl.input}>
						<input type="search" name='search' placeholder='Search for anything...'
							autoComplete='off' onChange={() => { }} value="" />
					</div>

					{false && <div className={cl.box}></div>}
				</form>

				<div className={cl.account}>
					<Link to={ROUTES.HOME} className={cl.favourites}>
						<svg className={cl["icon-fav"]}>
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
						</svg>
					</Link>

					<Link to={ROUTES.CART} className={cl.cart}>
						<svg className={cl["icon-cart"]}>
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
						</svg>
						<span className={cl.count}>2</span>
					</Link>

				</div>
			</div>
		</div>
	)
}

export default Header