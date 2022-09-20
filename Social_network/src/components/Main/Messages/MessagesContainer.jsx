import { addMessage, updateNewMessageText } from '../../../redux/messagesReducer'
import Messages from './Messages';
import { useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';


const MessagesContainer = () => {
	const messagesPage = useSelector(state => state.messagesPage);
	//	isAuthorized = useSelector(state => state.authorization.isAuthorized),
	//navigate = useNavigate();
	//if (!isAuthorized) return navigate('/login');

	return <Messages messagesPage={messagesPage} addMessage={addMessage}
		updateNewMessageText={updateNewMessageText} />

};

export default MessagesContainer;

// const mapStateToProps = state => ({ messagesPage: state.messagesPage }),
// 	mapDispatchToProps = dispatch => {
// 		return {
// 			updateNewMessageText: value => (dispatch(updateNewMessageTextActionCreator(value))),
// 			addMsg: () => (dispatch(addMessageActionCreator()))
// 		};
// 	},

// 	MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

// export default MessagesContainer;