import React from 'react'
import Preloader from '../../Common/Preloader/Preloader';
import PageNumbers from './PageNumbers/PageNumbers';
import UserContainer from './User/UserContainer';

const Users = props => {

	return (
		<section className='section__users'>
			<div className='users__title'>Users</div>
			{props.isFetching ? <Preloader /> : null}
			<PageNumbers slicedPages={props.slicedPages} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />
			<ul className='user__list'>
				{props.usersData.map(user => <UserContainer key={user.id} user={user} />)}
			</ul>
			<PageNumbers slicedPages={props.slicedPages} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />
		</section>);
};
export default Users