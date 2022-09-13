import React from 'react'
import User from './User/User';
import * as axios from 'axios'


class Friends extends React.Component {
	componentDidMount() {
		if (this.props.usersData.length === 0) {
			axios.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
					this.props.setUsers(response.data.items);
					this.props.setTotalUsersCount(response.data.totalCount)
				});
		};
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {

		const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize),
			pages = [...Array(pagesCount).keys()].map(x => ++x), //fill array 1 to pagesCount

			slicedPages = () => {
				const currentPage = this.props.currentPage,
					currentPageFirst = ((currentPage - 5) < 0) ? 0 : currentPage - 5,
					currentPageLast = currentPage + 5;

				return pages.slice(currentPageFirst, currentPageLast);
			};

		return (
			<section className='section__users'>
				<div className='users__title'>Users</div>
				<div className='page__numbers'>
					{slicedPages().map(page => <span
						className={`${this.props.currentPage === page ? 'current__page-number' : ''} page__number`}
						key={page} onClick={() => this.onPageChanged(page)}>{page}</span>)}
				</div>
				<ul className='user__list'>
					{this.props.usersData.map(user => <User key={user.id} user={user} state={this.props} />)}
				</ul>
			</section>);
	}
}

export default Friends