import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer'
import Messages from './Messages';
import { connect } from 'react-redux';


const mapStateToProps = state => ({ messagesPage: state.messagesPage }),
	mapDispatchToProps = dispatch => {
		return {
			updateNewMessageText: value => (dispatch(updateNewMessageTextActionCreator(value))),
			addMsg: () => (dispatch(addMessageActionCreator()))
		};
	},

	MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;