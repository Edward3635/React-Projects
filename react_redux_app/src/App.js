import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './Redux/CustomerReducer';
import { addCashAction, getCashAction } from './Redux/CashReducer';
import { fetchCustomers } from './Redux/AsyncActions/customers';

function App() {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.cash.cash);
	const customers = useSelector(state => state.customers.customers);
	const addCash = (cash) => dispatch(addCashAction(cash));
	const removeCash = (cash) => dispatch(getCashAction(cash));
	const addCustomer = (name) => dispatch(addCustomerAction({ id: Date.now(), name }));
	const removeCustomer = (customer) => dispatch(removeCustomerAction(customer.id));
	console.log(customers);
	return (
		<div>
			<div className='app'>
				<div className='cash'>Баланс: {cash} грн</div>
				<div className='btn-wrapper'>
					<button onClick={() => addCash(Number(prompt()))}>Поповнити рахунок</button>
					<button onClick={() => removeCash(Number(prompt()))}>Зняти з рахунку</button>
					<button onClick={() => addCustomer(prompt())}>ADD</button>
					<button onClick={() => dispatch(fetchCustomers())}>Get all customers</button>
				</div>
				<div>
					{customers.length ? <div>{customers.map(customer => <div onClick={() => removeCustomer(customer)}
						key={customer.id}>{customer.name}</div>)}</div>
						: <div className='customers'>Клієнти відсутні</div>}
				</div>
			</div>
		</div>
	);
}

export default App;
