import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessageForm from './SendMessageForm/SendMessageForm';




const Messages = () => {
	const messagesPage = useSelector(state => state.messagesPage),
		dialogNames = messagesPage.dialogData.map(el => <DialogItem id={el.id} key={el.id} name={el.name} />),
		dialogMessages = messagesPage.messageData.map(el => <Message msg={el.message} key={el.id} />);

	const isAuth = useSelector(state => state.authorization.isAuthorized);

	return !isAuth ? <Navigate to='/signIn' /> :
		<section className='section__messages'>
			<div className='dialogs'>
				{dialogNames}
			</div>
			<div className='messages'>
				<div>
					{dialogMessages}
				</div>
				<SendMessageForm />
			</div>
		</section>

};

export default Messages;

// Useless code
// const mapStateToProps = state => ({ messagesPage: state.messagesPage }),
// 	mapDispatchToProps = dispatch => {
// 		return {
// 			updateNewMessageText: value => (dispatch(updateNewMessageTextActionCreator(value))),
// 			addMsg: () => (dispatch(addMessageActionCreator()))
// 		};
// 	},

// 	MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);