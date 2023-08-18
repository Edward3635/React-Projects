import React from 'react'
import EventsExample from './EventsExample'
import UserList1 from './UserList1'
import TodoList from './TodoList'
import Card, { CardVariant } from './Card'

const Lists = () => {
	return (
		<div className='flex'>
		<EventsExample />
		<UserList1 />
		<TodoList />
		<Card width='200px' height='200px' variant={CardVariant.primary} onClick={(num) => console.log('click', num)}>
			<button>Buy</button>
		</Card>
	</div>
	)
}

export default Lists