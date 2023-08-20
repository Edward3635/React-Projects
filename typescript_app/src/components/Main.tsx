import React from 'react'
import EventsExample from './EventsExample'
import UserList from './User/UserList'
import TodoList from './Todo/TodoList'
import Card, { CardVariant } from './Card'

const Lists = () => {
	return (
		<div className='flex'>
			<EventsExample />
			<UserList />
			<TodoList />
			<Card width='200px' height='200px' variant={CardVariant.primary} onClick={(num) => console.log('click', num)}>
				<button>Buy</button>
			</Card>
		</div>
	)
}

export default Lists