import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from '../../store/action-creator/user';
import * as TodoActionCreators from '../../store/action-creator/todo';

const ActionCreators = {
	...UserActionCreators,
	...TodoActionCreators
}

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(ActionCreators, dispatch);
};