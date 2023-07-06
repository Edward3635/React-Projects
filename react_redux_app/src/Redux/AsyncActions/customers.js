import { addManyCustomersAction } from "../CustomerReducer";

export const fetchCustomers = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch(addManyCustomersAction(data)))
};
